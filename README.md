# The Forensic Neuroscientist

A single-page website for an education, training, and consultation practice at
the intersection of neuroscience, forensic science, and human understanding.

The design is built around the practice's own identity: the official logo's
azure (`#24B1FA`) and ember (`#F4940E`) are paired with an ink-and-paper
editorial system, custom scientific diagrams, and a persistent left navigation
rail on desktop.

## Stack

- Next.js 16 (App Router) with React 19 and TypeScript
- Tailwind CSS v4
- Local variable fonts: Fraunces (display), Manrope (body), JetBrains Mono
- `lucide-react` icons
- Custom SVG artwork; no stock photography

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Configuration

Copy `.env.example` to `.env.local` and set the values you need.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL used for canonical metadata, Open Graph, `robots.txt`, and `sitemap.xml`. Defaults to `http://localhost:3000`. |
| `CONTACT_WEBHOOK_URL` | Optional HTTPS endpoint that receives contact inquiries as JSON. |

### Contact form delivery

The form validates on the client and again in `/api/contact`.

- **With `CONTACT_WEBHOOK_URL` set:** the API forwards the inquiry to that
  endpoint. Only a successful webhook response is shown as "Message sent."
- **Without it:** the API returns `delivery: "preview"` and the interface says
  the message was validated but **not delivered**. This keeps the preview build
  honest until a real inbox or CRM endpoint is connected.

The API also includes a honeypot field, length limits, and basic email
validation. It does not store submissions.

## Content and structure

Most copy, navigation, expertise areas, learning formats, consultation steps,
resource tracks, and contact subjects live in `lib/content.ts`.

Sections on the single page:

1. Home / hero
2. About
3. Expertise
4. Education & Training
5. Consultation
6. Featured YouTube video
7. Resources
8. Contact
9. Footer

The supplied YouTube links are used verbatim:

- Featured video: <https://www.youtube.com/watch?v=uGySNlWnPRk>
- Channel: <https://www.youtube.com/@TheForensicNeuroscientist>

## Brand assets

- `weblogo.png` — original supplied logo, kept unmodified at the repository root.
- `public/weblogo.png` — byte-for-byte copy used by the site.
- `app/icon.png` — favicon cropped from the logo's icon region, centered on the
  brand cream without stretching or recoloring.
- `public/og-image.png` — social sharing image built around the logo.
- `public/featured-video.jpg` — YouTube thumbnail for the featured video.

The logo is never recolored, redrawn, or distorted.

## Accessibility and motion

- Semantic landmarks, an ordered heading hierarchy, and a skip link.
- Visible focus styles, keyboard-operable menu, focus trap, Escape to close, and
  focus return to the menu trigger.
- Mobile navigation is a full-screen dialog below `1200px`; the desktop rail is
  used from `1200px` upward.
- Animations respect `prefers-reduced-motion`, including the hero entrance,
  scroll reveals, and animated science diagrams.
- Color pairs were checked against WCAG 2.1 AA at desktop and mobile sizes.

## Deployment

The site is a standard Next.js App Router app and can be deployed to any host
that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` and, if available,
`CONTACT_WEBHOOK_URL` in the hosting environment before the production build.
