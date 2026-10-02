import { skills } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
          Tools I work with
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-muted">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
