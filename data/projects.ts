export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  stack: string[];
  role: string;
  link?: string;
  repo?: string;
};


export const projects: Project[] = [
  {
    slug: "project-one",
    title: "eTukod: Web Based Building Permit Management and Verification System through Blockchain Technology",
    year: "2025-2026",
    summary:
      "This is an online platform that allows easier application. Efficient processing. A more secure and transparent system for applying building permits enabling an increase in public trust.",
    stack: ["TypeScript", "React", "Clerk", "SMTP", "Supabase", "PostgreSQL", "HardHat", "Solidity", "Tailwind CSS", "Git"],
    role: "Backend developer, Project Lead, Team of 4",
    link: "https://etukod.replit.com",
    repo: "https://github.com/MarshburnTCVE/eTukod",
  },
  {
    slug: "project-two",
    title: "DMCS: Dental Management Clinic System",
    year: "2025",
    summary: "A SAAS for Dental Clinics. It books appointments, sees patient profiles, and payments.",
    stack: ["Laravel", "Clerk", "SMTP", "SQL", "Stripe", "Supabase", "Tailwind CSS", "Git"],
    role: "Project Lead (Main), Backend and minor Front-end Development, team of 4",
    repo: "https://github.com/Joenstalker/dcms-saas",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Core", items: ["React", "Next.js", "Laravel", "AdonisJS", "TypeScript", "JavaScript (ES2023)"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS Modules", "View/React", "Wordpress", "Framer Motion"] },
  { category: "Tooling", items: ["Git", "Vercel", "Figma", "Vite", "Trello", "HardHat", "Solidity"] },
  { category: "Backend-adjacent", items: ["REST APIs", "Node.js", "Supabase", "PostgreSQL", "Clerk", "MongoDB", "Firebase"] },
];
