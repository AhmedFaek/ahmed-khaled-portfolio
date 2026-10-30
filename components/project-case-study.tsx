import Image from "next/image";
import type { ReactNode } from "react";
import type { Screenshot } from "@/data/portfolio";

type DecisionRow = { label: string; value: string };

export function CaseStudySection({
  heading,
  intro,
  bullets,
  table,
  diagram,
  screenshots,
  implemented,
  planned,
  videoUrl
}: {
  heading: string;
  intro?: string;
  bullets?: string[];
  table?: DecisionRow[];
  diagram?: { src?: string; alt: string; caption: string };
  screenshots?: Screenshot[];
  implemented?: string[];
  planned?: string[];
  videoUrl?: string;
}) {
  return (
    <section className="rounded-[1.5rem] border border-[#2A2D32] bg-[#121416] p-6 sm:p-8">
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#E8E9EB]">{heading}</h3>
      {intro ? <p className="mt-4 text-base leading-7 text-[#B7BCC2]">{intro}</p> : null}
      {bullets && bullets.length > 0 ? (
        <ul className="mt-5 space-y-3 text-sm leading-7 text-[#D7DCE1]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#7DA5C9]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {table && table.length > 0 ? <DecisionTable rows={table} /> : null}
      {diagram ? <DiagramFigure src={diagram.src} alt={diagram.alt} caption={diagram.caption} /> : null}
      {screenshots ? <ScreenshotGallery screenshots={screenshots} /> : null}
      {implemented && implemented.length > 0 ? <ImplementedBox items={implemented} /> : null}
      {planned && planned.length > 0 ? <PlannedBox items={planned} /> : null}
      {videoUrl ? <VideoEmbed url={videoUrl} /> : null}
    </section>
  );
}

export function DiagramFigure({
  src,
  alt,
  caption
}: {
  src?: string;
  alt: string;
  caption: string;
}) {
  const hasImage = Boolean(src && src.trim().length > 0);

  if (!hasImage) {
    return (
      <div className="mt-6 rounded-[1.25rem] border border-dashed border-[#2A2D32] bg-[#181A1D] p-6 text-sm text-[#B7BCC2]">
        Diagram placeholder: add a diagram asset for {alt}.
      </div>
    );
  }

  return (
    <figure className="mt-6 overflow-hidden rounded-[1.25rem] border border-[#2A2D32] bg-[#181A1D]">
      <Image
        src={src as string}
        alt={alt}
        width={1200}
        height={800}
        unoptimized
        className="h-auto w-full object-cover"
      />
      {caption ? <figcaption className="border-t border-[#2A2D32] p-4 text-sm leading-6 text-[#B7BCC2]">{caption}</figcaption> : null}
    </figure>
  );
}

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="mt-6 rounded-[1.25rem] border border-dashed border-[#2A2D32] bg-[#181A1D] p-6 text-sm font-medium text-[#D7DCE1]">
        Screenshots coming soon
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {screenshots.map((shot) => (
        <figure key={shot.src} className="overflow-hidden rounded-[1.25rem] border border-[#2A2D32] bg-[#181A1D]">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1200}
            height={800}
            unoptimized
            className="h-60 w-full object-cover"
          />
          <figcaption className="border-t border-[#2A2D32] p-3 text-sm text-[#B7BCC2]">{shot.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function DecisionTable({ rows }: { rows: DecisionRow[] }) {
  return (
    <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-[#2A2D32]">
      <table className="w-full border-collapse text-left text-sm text-[#D7DCE1]">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[#2A2D32] last:border-b-0">
              <th scope="row" className="bg-[#181A1D] px-4 py-3 font-medium text-[#E8E9EB] align-top">
                {row.label}
              </th>
              <td className="px-4 py-3 text-[#B7BCC2] align-top">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ImplementedBox({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-[1.25rem] border border-[#2A2D32] bg-[#121416] p-5">
      <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#7DA5C9]">Implemented</p>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D7DCE1]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#7DA5C9]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlannedBox({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-[1.25rem] border border-dashed border-[#7DA5C9]/60 bg-[#111416] p-5">
      <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#7DA5C9]">Planned / in progress</p>
      <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D7DCE1]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#7DA5C9]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function VideoEmbed({ url }: { url?: string }) {
  if (!url || !url.trim()) {
    return null;
  }

  const isDirectVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

  if (isDirectVideo) {
    return (
      <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-[#2A2D32] bg-[#181A1D]">
        <video
          src={url}
          controls
          preload="metadata"
          className="aspect-video w-full bg-[#101113]"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  const embedUrl = url.includes("youtu.be/")
    ? url.replace("youtu.be/", "www.youtube.com/embed/")
    : url.includes("watch?v=")
      ? url.replace("watch?v=", "embed/")
      : url;

  return (
    <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-[#2A2D32] bg-[#181A1D]">
      <iframe
        src={embedUrl}
        title="Project walkthrough video"
        className="aspect-video w-full border-0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function SectionShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">{children}</div>;
}
