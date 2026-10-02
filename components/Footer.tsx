const socials = [
  { label: "GitHub", href: "https://github.com/MarshburnTCVE" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vash-marshburn-045695377" },
  { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=2301101823%40student.buksu.edu.ph" },
];

export default function Footer() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="max-w-measure font-display text-2xl font-medium tracking-tight md:text-3xl">
          Looking for opportunities where I can contribute from day one.
        </h2>
        <p className="mt-4 max-w-measure text-muted">
          Reach out if you'd like to see more of my work or talk about opportunities.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-signal"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 text-center text-xs text-muted md:px-10">
        © {new Date().getFullYear()} Marshburn, Tc Vash Everett. Built with Next.js and Tailwind CSS.
      </div>
    </section>
  );
}
