import { FadeInSection } from "@/components/fade-in-section";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

const sectionClassName =
  "mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10";

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Django"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "APIs & Security",
    items: ["RESTful APIs", "JWT Authentication", "Google OAuth", "RBAC", "WebSockets"]
  },
  {
    title: "AI & ML",
    items: ["LangGraph", "RAG Pipelines", "Vector Search", "Embedding Models", "LLM Integration"]
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "CI/CD", "Postman"]
  }
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#101113] text-[#E8E9EB]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#E8E9EB] focus:px-4 focus:py-2 focus:text-[#101113]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[#2A2D32] bg-[#101113]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="space-y-1" aria-label="Go to top of page">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#E8E9EB]">
              {portfolio.name}
            </p>
            <p className="mono text-xs uppercase tracking-[0.28em] text-[#858A93]">
              {portfolio.title}
            </p>
          </a>

          <nav aria-label="Main navigation" className="flex max-w-[68vw] gap-5 overflow-x-auto pb-1 text-nowrap md:max-w-none md:gap-7">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#858A93] transition hover:text-[#E8E9EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DA5C9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101113]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="main-content">
        <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:px-8 lg:px-10 lg:pt-20">
          <div className="section-shell glass-card">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:p-12">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#2A2D32] bg-[#181A1D] px-4 py-2 text-sm text-[#D7DCE1]">
                  <span className="h-2 w-2 rounded-full bg-[#7DA5C9]" />
                  {portfolio.opportunityBadge}
                </div>

                <div className="space-y-5">
                  <p className="mono text-xs uppercase tracking-[0.34em] text-[#858A93]">
                    {portfolio.location}
                  </p>
                  <h1 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#E8E9EB] sm:text-5xl lg:text-6xl">
                    {portfolio.name}
                  </h1>
                  <p className="text-2xl font-medium text-[#E8E9EB] sm:text-3xl">
                    {portfolio.title}
                  </p>
                  <p className="max-w-2xl text-lg leading-8 text-[#B7BCC2]">
                    {portfolio.heroTagline}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl bg-[#7DA5C9] px-6 py-3.5 text-sm font-semibold text-[#101113] transition hover:bg-[#9AB7D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DA5C9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101113]"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Ahmed_Khaled_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-[#2A2D32] bg-[#141619] px-6 py-3.5 text-sm font-semibold text-[#E8E9EB] transition hover:border-[#4B5563] hover:bg-[#181A1D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DA5C9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101113]"
                  >
                    Download CV
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#2A2D32] bg-[#121416] p-4">
                    <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                      Focus
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#D7DCE1]">
                      Scalable APIs, authentication systems, and backend architecture.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#2A2D32] bg-[#121416] p-4">
                    <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                      AI
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#D7DCE1]">
                      LangGraph orchestration, RAG pipelines, and LLM-powered workflows.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#2A2D32] bg-[#121416] p-4">
                    <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                      Education
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#D7DCE1]">
                      {portfolio.education.degree}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[1.5rem] border border-[#2A2D32] bg-[#121416] p-6">
                  <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                    Focus area
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#D7DCE1]">
                    Backend architecture, API design, secure authentication, and AI-powered workflows.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[#2A2D32] bg-[#121416] p-6">
                  <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                    Links
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={`mailto:${portfolio.contacts.email}`}
                      className="rounded-xl border border-[#2A2D32] px-4 py-3 text-sm text-[#D7DCE1] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
                    >
                      {portfolio.contacts.email}
                    </a>
                    <a
                      href={portfolio.contacts.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[#2A2D32] px-4 py-3 text-sm text-[#D7DCE1] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={portfolio.contacts.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[#2A2D32] px-4 py-3 text-sm text-[#D7DCE1] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[#2A2D32] bg-[#121416] p-6">
                  <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                    Education
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-base font-medium text-[#E8E9EB]">
                      {portfolio.education.institution}
                    </p>
                    <p className="text-sm leading-6 text-[#B7BCC2]">
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
              <div className="glass-card rounded-[1.5rem] p-7 sm:p-8">
                <div className="space-y-4 text-base leading-7 text-[#B7BCC2]">
                  {portfolio.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <article key={group.title} className="glass-card rounded-[1.5rem] p-6">
                    <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                      {group.title}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#2A2D32] bg-[#121416] px-3 py-1.5 text-sm text-[#D7DCE1]"
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

            <div className="space-y-6">
              {portfolio.projects.map((project, index) => (
                <article key={project.slug} className="glass-card rounded-[1.5rem] p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono rounded-full border border-[#2A2D32] bg-[#121416] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#D7DCE1]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.badges.map((badge) => (
                      <span
                        key={`${project.slug}-${badge}`}
                        className="rounded-full border border-[#2A2D32] bg-[#121416] px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-[#B7BCC2]"
                      >
                        {badge}
                      </span>
                    ))}
                    <span className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">
                      {project.year}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#E8E9EB]">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-base font-medium text-[#B7BCC2]">
                          {project.subtitle}
                        </p>
                      </div>
                      <p className="max-w-2xl text-sm leading-7 text-[#B7BCC2]">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {project.stack.map((item) => (
                          <span
                            key={`${project.slug}-${item}`}
                            className="rounded-full border border-[#2A2D32] bg-[#121416] px-3 py-1.5 text-sm text-[#D7DCE1]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.25rem] border border-[#2A2D32] bg-[#121416] p-5">
                      <ul className="space-y-4 text-sm leading-7 text-[#D7DCE1]">
                        {project.bullets.slice(0, 2).map((bullet) => (
                          <li key={`${project.slug}-${bullet}`} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-[#7DA5C9]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center justify-center rounded-xl bg-[#7DA5C9] px-4 py-2.5 text-sm font-medium text-[#101113] transition hover:bg-[#9AB7D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DA5C9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101113]"
                        >
                          View case study
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repository for ${project.name}`}
                          className="inline-flex items-center justify-center rounded-xl border border-[#2A2D32] px-4 py-2.5 text-sm font-medium text-[#E8E9EB] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection id="experience" className={sectionClassName}>
          <div className="space-y-10">
            <SectionHeading eyebrow="Experience" title="Experience" />

            <div className="relative ml-2 space-y-8 border-l border-[#2A2D32] pl-8 lg:ml-0 lg:pl-10">
              {portfolio.experience.map((item) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className="glass-card relative rounded-[1.5rem] p-7"
                >
                  <span className="absolute -left-[2.15rem] top-8 h-4 w-4 rounded-full border-4 border-[#101113] bg-[#7DA5C9] lg:-left-[2.65rem]" />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-[#E8E9EB]">{item.role}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#B7BCC2]">
                        {item.company} | {item.location}
                      </p>
                    </div>
                    <p className="mono text-[10px] uppercase tracking-[0.26em] text-[#858A93]">
                      {item.dates}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[#D7DCE1]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#7DA5C9]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection id="contact" className={`${sectionClassName} pb-10`}>
          <div className="section-shell glass-card p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <SectionHeading eyebrow="Contact" title="Let's build something useful." />
                <p className="max-w-xl text-sm leading-7 text-[#B7BCC2]">
                  I’m available for backend engineering work, API design, full-stack collaboration, and AI-powered product development.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${portfolio.contacts.email}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#7DA5C9] px-6 py-3.5 text-sm font-semibold text-[#101113] transition hover:bg-[#9AB7D6]"
                >
                  Email
                </a>
                <a
                  href={portfolio.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center justify-center rounded-xl border border-[#2A2D32] bg-[#141619] px-6 py-3.5 text-sm font-semibold text-[#E8E9EB] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolio.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center justify-center rounded-xl border border-[#2A2D32] bg-[#141619] px-6 py-3.5 text-sm font-semibold text-[#E8E9EB] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
