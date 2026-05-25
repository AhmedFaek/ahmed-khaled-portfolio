import { FadeInSection } from "@/components/fade-in-section";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

const sectionClassName =
  "mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10";

const skillGroups = [
  {
    title: "Core Backend",
    items: ["Python", "FastAPI", "Django", "Node.js", "Express.js", "RESTful APIs"]
  },
  {
    title: "Data Layer",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "AI & Realtime",
    items: [
      "LangGraph",
      "RAG Pipelines",
      "Vector Search",
      "Whisper STT",
      "WebSockets",
      "LLM Integration"
    ]
  },
  {
    title: "Frontend & Tools",
    items: ["React", "Next.js", "Tailwind CSS", "Git", "GitHub", "CI/CD", "Postman"]
  }
];

export default function Home() {
  const featuredProject = portfolio.projects.find((project) => project.featured);
  const standardProjects = portfolio.projects.filter((project) => !project.featured);

  return (
    <main className="relative overflow-x-hidden pb-16">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white">
              {portfolio.name}
            </p>
            <p className="mono text-xs uppercase tracking-[0.28em] text-slate-400">
              {portfolio.title}
            </p>
          </a>

          <nav className="flex max-w-[68vw] gap-5 overflow-x-auto pb-1 text-nowrap md:max-w-none md:gap-7">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <div className="section-shell glass-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(76,215,246,0.08),transparent_28%)]" />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-14">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                {portfolio.opportunityBadge}
              </div>

              <div className="space-y-5">
                <p className="mono text-xs uppercase tracking-[0.34em] text-slate-400">
                  {portfolio.location}
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  {portfolio.name}
                </h1>
                <p className="text-2xl font-medium text-slate-200 sm:text-3xl">
                  {portfolio.title}
                </p>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  {portfolio.heroTagline}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  View Projects
                </a>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-950/70"
                >
                  Download CV
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="mono text-xs uppercase tracking-[0.26em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    Scalable APIs, authentication systems, and real-time communication.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="mono text-xs uppercase tracking-[0.26em] text-slate-500">
                    AI
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    LangGraph orchestration, RAG pipelines, vector search, and LLM integration.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="mono text-xs uppercase tracking-[0.26em] text-slate-500">
                    Education
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    {portfolio.education.degree}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                <p className="mono text-xs uppercase tracking-[0.28em] text-slate-500">
                  Summary
                </p>
                <p className="mt-4 text-base leading-7 text-slate-200">
                  {portfolio.summary}
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                <p className="mono text-xs uppercase tracking-[0.28em] text-slate-500">
                  Links
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`mailto:${portfolio.contacts.email}`}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/5"
                  >
                    {portfolio.contacts.email}
                  </a>
                  <a
                    href={portfolio.contacts.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/5"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={portfolio.contacts.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/5"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                <p className="mono text-xs uppercase tracking-[0.28em] text-slate-500">
                  Education
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-base font-medium text-white">
                    {portfolio.education.institution}
                  </p>
                  <p className="text-sm leading-6 text-slate-300">
                    {portfolio.education.location} | {portfolio.education.dates}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection id="about" className={sectionClassName}>
        <div className="space-y-10">
          <SectionHeading eyebrow="About" title="About" />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="glass-card rounded-[1.75rem] p-7 sm:p-8">
              <div className="space-y-4 text-base leading-7 text-slate-300">
                {portfolio.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="glass-card rounded-[1.75rem] p-6">
                  <p className="mono text-xs uppercase tracking-[0.28em] text-slate-500">
                    {group.title}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="projects" className={sectionClassName}>
        <div className="space-y-10">
          <SectionHeading eyebrow="Projects" title="Projects" />

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProject ? (
              <article className="glass-card relative overflow-hidden rounded-[2rem] p-8 lg:col-span-2 lg:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_32%)]" />
                <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="mono rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-sky-200">
                        Featured Project
                      </span>
                      <span className="mono text-xs uppercase tracking-[0.28em] text-slate-500">
                        {featuredProject.year}
                      </span>
                    </div>
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                      {featuredProject.name}
                    </h3>
                    <p className="max-w-2xl text-sm leading-7 text-slate-300">
                      {featuredProject.bullets[0]}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {featuredProject.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-sm text-sky-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6">
                    <ul className="space-y-4 text-sm leading-7 text-slate-200">
                      {featuredProject.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={featuredProject.githubUrl}
                      className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400/40 hover:bg-sky-400/5"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ) : null}

            {standardProjects.map((project) => (
              <article
                key={project.name}
                className="glass-card rounded-[1.75rem] p-7 transition hover:border-slate-400/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4">
                    <p className="mono text-xs uppercase tracking-[0.28em] text-slate-500">
                      {project.year}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-sm text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.githubUrl}
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-400/40"
                  >
                    GitHub
                  </a>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="experience" className={sectionClassName}>
        <div className="space-y-10">
          <SectionHeading eyebrow="Experience" title="Experience" />

          <div className="relative ml-2 space-y-8 border-l border-slate-700/70 pl-8 lg:ml-0 lg:pl-10">
            {portfolio.experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="glass-card relative rounded-[1.75rem] p-7"
              >
                <span className="absolute -left-[2.15rem] top-8 h-4 w-4 rounded-full border-4 border-background bg-accent lg:-left-[2.65rem]" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <p className="mono text-xs uppercase tracking-[0.26em] text-slate-500">
                    {item.dates}
                  </p>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="certifications" className={sectionClassName}>
        <div className="space-y-10">
          <SectionHeading eyebrow="Certifications" title="Certifications" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.certifications.map((certification) => (
              <article
                key={certification.name}
                className="glass-card rounded-[1.5rem] p-6"
              >
                <p className="text-lg font-semibold text-white">{certification.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {certification.issuer}
                </p>
                <p className="mono mt-3 text-xs uppercase tracking-[0.26em] text-slate-500">
                  {certification.location} | {certification.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="contact" className={`${sectionClassName} pb-10`}>
        <div className="section-shell glass-card p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <SectionHeading eyebrow="Contact" title="Contact" />
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                {portfolio.summary}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${portfolio.contacts.email}`}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Email
              </a>
              <a
                href={portfolio.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-slate-400/40"
              >
                LinkedIn
              </a>
              <a
                href={portfolio.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-slate-400/40"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
