import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const experienceItems = [
  {
    company: "Olamax",
    jobTitle: "Frontend Developer @",
    duration: "Nov 2024 – August 2025",
    desc: [
      "Developed and deployed scalable, production-ready applications integrated with RESTful APIs.",
      "Enhanced web performance and resolved rendering issues to improve user experience.",
      "Contributed to redesigning interfaces in collaboration with design and engineering teams.",
      "Worked closely with senior engineers and the product manager, adhering to best practices across the software development lifecycle (SDLC).",
    ],
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    company: "NCAIR",
    jobTitle: "Data Analyst Intern @",
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
    jobTitle: "Fullstack Developer @",
    duration: "Nov 2021 – Present",
    desc: [
      "Designed and developed full-stack web applications for diverse clients.",
      "Built and maintained REST APIs and scalable backend services.",
      "Delivered high-quality solutions tailored to client needs, focusing on performance and usability.",
    ],
    tech: ["React", "Next.js", "Node.js", "Zustand", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "University of Ilorin",
    jobTitle: "Embedded Systems Engineer (Student) @",
    duration: "Jan 2019 – Sep 2023",
    desc: [
      "Led a team of five to develop a semi-autonomous firefighting robot equipped with a robotic arm and Android-based remote control.",
      "Awarded First Runner-Up at the 2023 Opolo Innovative Idea Pitch competition.",
    ],
    tech: ["Embedded C", "Java", "XML"],
  },
];


  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap items-start max-w-4xl w-full space-y-3">
      {/* Left Sidebar (Company Names) */}
      <div className="w-full md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible">
        {experienceItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setValue(i)}
            className={`py-3 text-left text-gray-300 hover:text-green-400 transition-colors w-full text-wrap cursor-pointer ${
              value === i
                ? "border-b-2 md:border-r-2 md:border-b-0 border-green-400 text-green-400 font-semibold"
                : ""
            }`}
          >
            {item.company}
          </button>
        ))}
      </div>

      {/* Right Section (Job Details) */}
      <div className="md:px-6 w-full">
        {experienceItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: value === i ? 1 : 0, y: value === i ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className={`${value === i ? "block" : "hidden"}`}
          >
            <h3 className="text-xl text-gray-300 font-semibold">
              {item.jobTitle}{" "}
              <span className="text-green-400">{item.company}</span>
            </h3>
            <p className="text-gray-400 text-sm">{item.duration}</p>
            <div className="space-x-4 flex mt-2 flex-wrap space-y-2">
            {item.tech.map((stack, s) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: s * 0.1 }}
                className="relative text-gray-300 text-sm border h-fit border-green-400 rounded-lg px-2"
              >
                {stack}
              </motion.span>
            ))}
          </div>

            <ul className="mt-4 space-y-3">
              {item.desc.map((descItem, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: j * 0.1 }}
                  className="relative pl-6 text-gray-400 before:content-['▹'] before:text-green-400 before:absolute before:left-0"
                >
                  {descItem}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
