import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#101113] px-6 text-[#E8E9EB]">
      <div className="max-w-xl text-center">
        <p className="mono text-[10px] uppercase tracking-[0.28em] text-[#858A93]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#E8E9EB]">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-[#B7BCC2]">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#7DA5C9] px-5 py-3 text-sm font-semibold text-[#101113] transition hover:bg-[#9AB7D6]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
