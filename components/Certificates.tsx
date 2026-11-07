import CertificateTitle from "./CertificateTitle";
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
              <CertificateTitle
                title={certificate.title}
                url={certificate.url}
                pdf={certificate.pdf}
              />
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
