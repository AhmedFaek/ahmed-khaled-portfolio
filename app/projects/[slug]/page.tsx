import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudySection, SectionShell } from "@/components/project-case-study";
import { portfolio } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = portfolio.projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.name} | Ahmed Khaled`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Ahmed Khaled`,
      description: project.description
    }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolio.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = portfolio.projects.findIndex((item) => item.slug === project.slug);
  const previousProject = portfolio.projects[projectIndex - 1];
  const nextProject = portfolio.projects[projectIndex + 1];

  return (
    <main className="bg-[#101113] text-[#E8E9EB]">
      <SectionShell>
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-[#B7BCC2] transition hover:text-[#E8E9EB]">
            ← Back to projects
          </Link>
        </div>

        <article className="rounded-[1.75rem] border border-[#2A2D32] bg-[#181A1D] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            {project.badges.map((badge) => (
              <span key={`${project.slug}-${badge}`} className="rounded-full border border-[#2A2D32] bg-[#121416] px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-[#B7BCC2]">
                {badge}
              </span>
            ))}
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">{project.year}</span>
          </div>

          <div className="mt-6 space-y-5">
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-[#E8E9EB] sm:text-5xl">{project.name}</h1>
            <p className="text-xl text-[#B7BCC2]">{project.subtitle}</p>
            <p className="max-w-3xl text-base leading-7 text-[#D7DCE1]">{project.description}</p>

            <div className="flex flex-wrap gap-2.5">
              {project.stack.map((item) => (
                <span key={`${project.slug}-${item}`} className="rounded-full border border-[#2A2D32] bg-[#121416] px-3 py-1.5 text-sm text-[#D7DCE1]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#2A2D32] px-4 py-2.5 text-sm font-medium text-[#E8E9EB] transition hover:border-[#7DA5C9] hover:bg-[#181A1D]"
              >
                {project.githubNote ?? "GitHub"}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#7DA5C9] px-4 py-2.5 text-sm font-medium text-[#101113] transition hover:bg-[#9AB7D6]"
                >
                  {project.demoNote ?? "Demo"}
                </a>
              ) : null}
            </div>
          </div>
        </article>

        <div className="mt-10 rounded-[1.5rem] border border-[#2A2D32] bg-[#181A1D] p-6 sm:p-8">
          <div className="space-y-6">
            {project.caseStudy.overview.map((item) => (
              <p key={item} className="text-lg leading-8 text-[#E8E9EB] sm:text-xl sm:leading-9">
                {item}
              </p>
            ))}
          </div>

          {project.caseStudy.facts && project.caseStudy.facts.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {project.caseStudy.facts.map((fact) => (
                <div key={fact.label} className="min-h-[150px] rounded-[1.25rem] border border-[#2A2D32] bg-[#121416] p-5">
                  <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">{fact.label}</p>
                  <p className="mt-4 text-base leading-7 text-[#E8E9EB] sm:text-lg">{fact.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-10 space-y-6">
          {project.caseStudy.sections.map((section) => (
            <CaseStudySection key={section.heading} {...section} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#2A2D32] pt-6 sm:flex-row sm:items-center sm:justify-between">
          {previousProject ? (
            <Link href={`/projects/${previousProject.slug}`} className="text-sm text-[#B7BCC2] transition hover:text-[#E8E9EB]">
              ← {previousProject.name}
            </Link>
          ) : <span />}
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="text-sm text-[#B7BCC2] transition hover:text-[#E8E9EB]">
              {nextProject.name} →
            </Link>
          ) : <span />}
        </div>
      </SectionShell>
    </main>
  );
}
