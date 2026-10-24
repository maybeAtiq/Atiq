import NoteTitle from "./NoteTitle";

const experienceItems = [
  {
    company: "Olamax",
    jobTitle: "Frontend Developer",
    duration: "Nov 2024 – Aug 2025",
    desc: [
      "Developed and deployed scalable, production-ready applications integrated with RESTful APIs.",
      "Enhanced web performance and resolved rendering issues to improve user experience.",
      "Contributed to redesigning interfaces in collaboration with design and engineering teams.",
      "Worked closely with senior engineers and the product manager, adhering to best practices across the SDLC.",
    ],
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    company: "NCAIR",
    jobTitle: "Data Analyst Intern",
    duration: "Nov 2023 – Nov 2024",
    desc: [
      "Collected, cleaned, and analyzed large datasets to extract actionable insights.",
      "Applied statistical methods to uncover trends, patterns, and anomalies.",
      "Created data visualizations and presented findings to supervisors for decision-making support.",
    ],
    tech: ["Python"],
  },
  {
    company: "Freelance",
    jobTitle: "Fullstack Developer",
    duration: "Nov 2021 – Present",
    desc: [
      "Designed and developed full-stack web applications for diverse clients.",
      "Built and maintained REST APIs and scalable backend services.",
      "Delivered high-quality solutions tailored to client needs, focusing on performance and usability.",
    ],
    tech: ["React", "Next.js", "Node.js", "Zustand", "TypeScript", "Tailwind CSS"],
  },
];

const Experience = () => {
  return (
    <div>
      <NoteTitle>where i’ve worked.</NoteTitle>

      {experienceItems.map((item) => (
        <section key={item.company} className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-ink dark:text-mist">
            {item.jobTitle}{" "}
            <span className="font-semibold text-ink-soft dark:text-night-soft">at {item.company}</span>
          </h2>
          <p className="mt-1 text-sm text-ink-soft dark:text-night-soft">{item.duration}</p>
          <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-note dark:marker:text-night-note text-base leading-relaxed text-ink-soft dark:text-night-soft">
            {item.desc.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs font-medium text-ink-soft/80 dark:text-night-soft/80">
            {item.tech.join(" · ")}
          </p>
        </section>
      ))}
    </div>
  );
};

export default Experience;
