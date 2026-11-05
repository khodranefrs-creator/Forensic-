export const site = {
  name: "The Forensic Neuroscientist",
  shortName: "Forensic Neuroscientist",
  tagline: "The intersection of science, evidence & human understanding.",
  description:
    "Bridging neuroscience, forensic science, and professional education through specialized training, thoughtful consultation, and accessible scientific insight.",
  youtube: {
    channelUrl: "https://www.youtube.com/@TheForensicNeuroscientist",
    channelLabel: "@TheForensicNeuroscientist",
    featuredVideoId: "uGySNlWnPRk",
    featuredVideoUrl: "https://www.youtube.com/watch?v=uGySNlWnPRk",
    featuredVideoTitle:
      "Welcome to The Forensic Neuroscientist | Exploring Brain Science & Criminal Behavior",
    featuredVideoShortTitle: "Welcome to The Forensic Neuroscientist",
  },
} as const;

export const navItems = [
  { id: "home", number: "01", label: "Home" },
  { id: "about", number: "02", label: "About" },
  { id: "expertise", number: "03", label: "Expertise" },
  { id: "education", number: "04", label: "Education & Training" },
  { id: "consultation", number: "05", label: "Consultation" },
  { id: "resources", number: "06", label: "Resources" },
  { id: "contact", number: "07", label: "Contact" },
] as const;

export type NavItem = (typeof navItems)[number];

export const expertiseAreas = [
  {
    number: "01",
    title: "Forensic Neuroscience",
    description:
      "How brain science intersects with behavior, memory, perception and the interpretation of evidence.",
    tag: "Focus area",
  },
  {
    number: "02",
    title: "Brain Science & Human Behavior",
    description:
      "Foundations of cognition, emotion and decision-making, translated for professional contexts.",
    tag: "Foundation",
  },
  {
    number: "03",
    title: "Neuroscience Education",
    description:
      "Accessible explanations that connect research concepts to the questions professionals actually face.",
    tag: "Education",
  },
  {
    number: "04",
    title: "Professional Training",
    description:
      "Structured learning experiences for teams and practitioners who work with scientific information.",
    tag: "Training",
  },
  {
    number: "05",
    title: "Forensic Consultation",
    description:
      "A considered scientific perspective on questions that sit at the boundary of neuroscience and law.",
    tag: "Consultation",
  },
  {
    number: "06",
    title: "Scientific Communication",
    description:
      "Clear, responsible ways to describe complex science to non-specialist audiences.",
    tag: "Communication",
  },
] as const;

export const learningFormats = [
  {
    number: "01",
    title: "Workshops & seminars",
    description:
      "Focused sessions that build understanding of core concepts and their practical relevance.",
  },
  {
    number: "02",
    title: "Professional development",
    description:
      "Learning designed around the needs of teams working across psychology, law and forensic practice.",
  },
  {
    number: "03",
    title: "Bespoke learning sessions",
    description:
      "Content shaped around a specific question, audience or professional context.",
  },
  {
    number: "04",
    title: "Video & written resources",
    description:
      "Accessible explanations that make neuroscience easier to revisit and share.",
  },
] as const;

export const learningArc = [
  { number: "01", title: "Understand", copy: "Core science, clearly explained." },
  { number: "02", title: "Apply", copy: "Concepts connected to practice." },
  { number: "03", title: "Communicate", copy: "Confidence to explain the science." },
] as const;

export const consultationSteps = [
  {
    number: "01",
    title: "Frame the question",
    description:
      "We begin with the context, the audience and the specific scientific question that needs attention.",
  },
  {
    number: "02",
    title: "Examine the science",
    description:
      "Relevant research and concepts are considered carefully — including the limits of what is known.",
  },
  {
    number: "03",
    title: "Translate the findings",
    description:
      "Insight is communicated in clear, proportionate language that can be understood and used.",
  },
] as const;

export const resourceTracks = [
  {
    number: "01",
    title: "Explainers",
    description:
      "Plain-language notes on the brain, behavior and the science behind forensic questions.",
    status: "In development",
    href: "#contact",
    linkLabel: "Suggest a topic",
  },
  {
    number: "02",
    title: "Applied perspectives",
    description:
      "Short essays on how neuroscience is understood in professional and legal settings.",
    status: "In development",
    href: "#contact",
    linkLabel: "Register interest",
  },
  {
    number: "03",
    title: "Watch & listen",
    description:
      "Conversations and teaching from the official YouTube channel, exploring brain science and behavior.",
    status: "On YouTube",
    href: site.youtube.channelUrl,
    linkLabel: "Visit the channel",
  },
] as const;

export const contactSubjects = [
  "Training inquiry",
  "Consultation inquiry",
  "Speaking or collaboration",
  "General question",
] as const;
