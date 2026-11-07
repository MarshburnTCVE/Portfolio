import ProfilePhoto from "./ProfilePhoto";
import ResumePreview from "./ResumePreview";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <ProfilePhoto />
          <a href="#top" className="truncate font-display text-lg font-medium tracking-tight">
            Marshburn, Tc Vash Everett, A.
          </a>
        </div>
        <nav className="flex flex-wrap items-center gap-5 md:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <ResumePreview />
        </nav>
      </div>
    </header>
  );
}
