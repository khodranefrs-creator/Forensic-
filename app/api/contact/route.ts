import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: silently accept bot submissions without forwarding them.
  if (asString(payload.company)) {
    return NextResponse.json({ ok: true, delivery: "preview" });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const subject = asString(payload.subject);
  const message = asString(payload.message);

  if (
    name.length < 2 ||
    name.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 200 ||
    subject.length < 2 ||
    subject.length > 160 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    // Honest preview mode: the message is validated but not delivered.
    return NextResponse.json({ ok: true, delivery: "preview" });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        source: "theforensicneuroscientist.com",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with ${response.status}`);
    }

    return NextResponse.json({ ok: true, delivery: "webhook" });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "The inquiry could not be delivered right now. Please try again shortly.",
      },
      { status: 502 },
    );
  }
}
