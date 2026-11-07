import { certificates } from "@/data/certificates";

export default function Certificates() {
  if (certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
          Certificates
        </h2>

        <ol className="mt-10 space-y-4">
          {certificates.map((certificate, index) => (
            <li key={`${certificate.title}-${certificate.year}`} className="flex gap-4 text-ink">
              <span className="mt-0.5 min-w-7 text-sm text-muted">{index + 1}.</span>
              <a
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
                className="text-base text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
              >
                {certificate.title}
              </a>
              <span className="text-sm text-muted">
                {certificate.issuer} · {certificate.year}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
