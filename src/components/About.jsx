import NoteTitle from "./NoteTitle";
import { CheckIcon } from "./Icons";

const techStack = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Python"];

const About = () => {
  return (
    <div>
      <NoteTitle>meet me.</NoteTitle>

      <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft dark:text-night-soft">
        <p>
          I’m a <span className="text-ink dark:text-mist font-medium">software developer</span>{" "}
          specialized in bringing ideas to live on the web. If you can think it, I can build it.
        </p>
        <p>
          Outside of work, I’m diving into{" "}
          <span className="text-ink dark:text-mist font-medium">cybersecurity and data forensics</span>,
          trying to make the digital world safer. I also play video games and make art.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-bold tracking-tight text-ink dark:text-mist">
        technologies i work with.
      </h2>
      <ul className="mt-4 space-y-3">
        {techStack.map((tech) => (
          <li key={tech} className="flex items-center gap-3 text-lg text-ink dark:text-mist">
            <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-note dark:bg-night-note text-white dark:text-ink shrink-0">
              <CheckIcon />
            </span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
