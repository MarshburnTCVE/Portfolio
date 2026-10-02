import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
          Work & Projects
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-10"
            >
              <div>
                <span className="text-sm text-muted">{project.year}</span>
                <h3 className="mt-1 font-display text-xl font-medium">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.role}</p>
              </div>

              <div>
                <p className="max-w-measure text-ink">{project.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-signal-dim px-3 py-1 text-xs font-medium text-signal"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-5 text-sm font-medium">
                  {project.link && (
                    <a
                      href={project.link}
                      className="underline decoration-line underline-offset-4 hover:decoration-signal"
                    >
                      Live site
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="underline decoration-line underline-offset-4 hover:decoration-signal"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
