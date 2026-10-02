export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
      <div className="flex items-center gap-2 text-sm text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        Open to Internship Opportunities, Freelance Work, and Full-Time Roles.
      </div>

      <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
        I build based on the deliverables. Solutions that are fast,
        accessible, and easy to maintain.
      </h1>

      <p className="mt-6 max-w-measure text-lg text-muted">
        4th-year student, Bachelor of Information Technology, College of Technologies at 
        Bukidnon State University. I am a Full-stack web and mobile app developer. I have very strong communication
        skills and I have a very strong passion for learning new techniques to improve my skills.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal"
        >
          View my work
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=2301101823%40student.buksu.edu.ph"
          className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
        >
          2301101823@student.buksu.edu.ph
        </a>
      </div>
    </section>
  );
}
