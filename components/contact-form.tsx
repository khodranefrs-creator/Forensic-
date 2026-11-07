"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleAlert,
  Info,
  Loader2,
} from "lucide-react";
import { contactSubjects } from "@/lib/content";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

type Status = {
  kind: "preview" | "success" | "error";
  title: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (name.length > 120) {
    errors.name = "Please keep your name under 120 characters.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject) {
    errors.subject = "Please choose a subject.";
  }

  if (message.length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  } else if (message.length > 5000) {
    errors.message = "Please keep your message under 5,000 characters.";
  }

  return errors;
}

export function ContactForm() {
  const ids = useId().replace(/:/g, "");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  const fieldId = (field: string) => `${ids}-${field}`;
  const errorId = (field: string) => `${ids}-${field}-error`;

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status) setStatus(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      setStatus(null);
      document.getElementById(fieldId(firstError))?.focus();
      return;
    }

    setSubmitting(true);
    setStatus(null);
    const submittedName = values.name.trim().split(" ")[0];

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        delivery?: "preview" | "webhook";
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "The inquiry could not be sent.");
      }

      if (data.delivery === "webhook") {
        setStatus({
          kind: "success",
          title: "Message sent.",
          message: `Thank you, ${submittedName}. Your inquiry has been received.`,
        });
      } else {
        setStatus({
          kind: "preview",
          title: "Inquiry validated.",
          message:
            "Thank you. This preview build is not connected to an inbox yet, so your message has not been delivered. The form is ready to connect before launch.",
        });
      }

      setValues(initialValues);
      setErrors({});
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch (error) {
      setStatus({
        kind: "error",
        title: "Something went wrong.",
        message:
          error instanceof Error
            ? error.message
            : "The inquiry could not be sent. Please try again.",
      });
      requestAnimationFrame(() => statusRef.current?.focus());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative border border-paper/25 bg-cream p-6 text-ink sm:p-9"
    >
      <span
        className="absolute -top-px left-0 h-[3px] w-24 bg-ember"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
            Inquiry / 01
          </p>
          <p className="mt-2 font-display text-[1.9rem] leading-tight tracking-[-0.025em]">
            Send an inquiry
          </p>
          <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
            A short note is enough to begin.
          </p>
        </div>
        <p className="pt-1 text-right font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-muted">
          All fields
          <br />
          required
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor={fieldId("name")}>
            Name
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            className="field-input"
            placeholder="Your name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            required
          />
          {errors.name && (
            <p id={errorId("name")} className="field-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor={fieldId("email")}>
            Email
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            className="field-input"
            placeholder="you@example.com"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            required
          />
          {errors.email && (
            <p id={errorId("email")} className="field-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor={fieldId("subject")}>
            Subject
          </label>
          <div className="relative">
            <select
              id={fieldId("subject")}
              name="subject"
              className="field-input pr-8"
              value={values.subject}
              onChange={(event) => update("subject", event.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? errorId("subject") : undefined}
              required
            >
              <option value="" disabled>
                Select a subject
              </option>
              {contactSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              strokeWidth={1.6}
              className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
          </div>
          {errors.subject && (
            <p id={errorId("subject")} className="field-error">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor={fieldId("message")}>
            Message
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={4}
            className="field-input resize-y"
            placeholder="Tell us a little about the question or context…"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId("message") : undefined}
            required
          />
          {errors.message && (
            <p id={errorId("message")} className="field-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot field for spam filters */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={fieldId("company")}>Company</label>
        <input
          id={fieldId("company")}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[30ch] text-[0.8125rem] leading-relaxed text-muted">
          Your details are used only to respond to this inquiry.
        </p>
        <button
          type="submit"
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send inquiry"}
          {submitting ? (
            <Loader2 size={15} className="animate-spin" aria-hidden="true" />
          ) : (
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {status && (
          <div
            ref={statusRef}
            tabIndex={-1}
            role={status.kind === "error" ? "alert" : "status"}
            className={`mt-5 flex gap-3 border-l-2 p-3.5 ${
              status.kind === "error"
                ? "border-[#A8321E] bg-[#A8321E]/[0.06]"
                : status.kind === "success"
                  ? "border-azure-deep bg-azure-deep/[0.06]"
                  : "border-ember bg-ember/[0.07]"
            }`}
          >
            <span className="mt-0.5 shrink-0">
              {status.kind === "error" ? (
                <CircleAlert
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#A8321E]"
                  aria-hidden="true"
                />
              ) : status.kind === "success" ? (
                <Check
                  size={16}
                  strokeWidth={2}
                  className="text-azure-deep"
                  aria-hidden="true"
                />
              ) : (
                <Info
                  size={16}
                  strokeWidth={1.8}
                  className="text-ember-deep"
                  aria-hidden="true"
                />
              )}
            </span>
            <div>
              <p className="text-[0.875rem] font-semibold leading-snug">
                {status.title}
              </p>
              <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate">
                {status.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
