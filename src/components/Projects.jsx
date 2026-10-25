import NoteTitle from "./NoteTitle";
import ToolbarButton from "./ToolbarButton";
import { ArrowUpRightIcon, ChevronRightIcon, GitHubIcon } from "./Icons";

const featured = {
  title: "State of Emergency",
  desc: [
    "A multiplayer game about a fictional leader’s worst day in office.",
    "Saboteurs try to force him out. Loyalists try to keep him in.",
    "Pick a side and play with friends.",
  ],
  open: "https://soe.maybeatiq.dev/",
};

const projects = [
  {
    title: "ROS Rentals",
    desc: "A platform for rentals.",
    techStack: "Next.js",
    open: "https://www.ros-rentals.com.ng/",
  },
  {
    title: "Atystic",
    desc: "An art platform for aspiring artists and veterans.",
    techStack: "Astro",
    open: "https://atystic.vercel.app/",
  },
  {
    title: "Press-It!",
    desc: "A free PWA to compress scanned documents to under 500KB while retaining quality.",
    techStack: "Next.js · Node.js",
    open: "https://pressit.onrender.com/",
  },
  {
    title: "SolGen",
    desc: "A browser extension for batch generation and funding of Solana wallets.",
    techStack: "Next.js · Solana/web3.js · Tailwind CSS",
    link: "https://github.com/maybeAtiq/solgen",
    open: "https://chromewebstore.google.com/detail/solgen/nhpgbeimfdhkiooagihinfofccmfilgp",
  },
  {
    title: "QR Code Generator",
    desc: "A tool to generate QR codes easily.",
    techStack: "Next.js · Tailwind CSS",
    link: "https://github.com/maybeAtiq/QR",
    open: "https://qrgen.maybeatiq.dev/",
  },
  {
    title: "MoDet",
    desc: "A motion detector built using Python and OpenCV.",
    techStack: "Python",
    link: "https://github.com/maybeAtiq/Motion-Detection",
  },
];

// Card in the game's own look: dot grid, cream type with a red offset shadow, yellow accents
const FeaturedCard = () => (
  <a
    href={featured.open}
    target="_blank"
    rel="noopener noreferrer"
    className="@container group block rounded-2xl bg-[#15121c] bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:22px_22px] px-5 py-12 md:px-10 md:py-14 text-center text-[#f5ecd9] font-soe transition-transform duration-300 hover:-translate-y-1"
  >
    <h2 className="font-display uppercase leading-[0.95] text-[clamp(2rem,13cqi,4.75rem)]">
      <span className="block text-[0.82em]" style={{ textShadow: "0.06em 0.06em 0 #c8371f" }}>
        State
      </span>
      <span className="block my-[0.12em] text-[0.32em] text-[#f5c331]">of</span>
      <span className="block" style={{ textShadow: "0.06em 0.06em 0 #c8371f" }}>
        Emergency
      </span>
    </h2>

    <p className="mt-8 mx-auto max-w-lg text-[clamp(1rem,3.6cqi,1.2rem)] font-bold leading-relaxed">
      {featured.desc.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>

    <span className="mt-10 inline-flex items-center gap-1 rounded-full bg-[#f5c331] text-[#15121c] px-6 py-3 text-[15px] font-bold shadow-[4px_4px_0_#c8371f] transition group-hover:shadow-[2px_2px_0_#c8371f] group-hover:translate-x-0.5 group-hover:translate-y-0.5">
      Play now
      <ChevronRightIcon className="w-4 h-4" />
    </span>
    <p className="mt-4 text-sm text-[#f5ecd9]/50">soe.maybeatiq.dev</p>
  </a>
);

const ProjectRow = ({ project }) => {
  const primary = project.open || project.link;

  return (
    <li className="group relative py-5 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h3 className="text-lg font-semibold tracking-tight text-ink dark:text-mist group-hover:text-note-ink dark:group-hover:text-night-note transition-colors">
          <a href={primary} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {project.title}
          </a>
        </h3>
        <p className="mt-1 text-base leading-relaxed text-ink-soft dark:text-night-soft">{project.desc}</p>
        <p className="mt-2 text-xs font-medium text-ink-soft/80 dark:text-night-soft/80">{project.techStack}</p>
      </div>
      <div className="relative z-10 flex items-center gap-0.5 shrink-0 -mr-2">
        {project.link && (
          <ToolbarButton href={project.link} target="_blank" rel="noopener noreferrer" label={`${project.title} source on GitHub`}>
            <GitHubIcon />
          </ToolbarButton>
        )}
        {project.open && (
          <ToolbarButton href={project.open} target="_blank" rel="noopener noreferrer" label={`Open ${project.title}`}>
            <ArrowUpRightIcon className="w-[18px] h-[18px]" />
          </ToolbarButton>
        )}
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <div>
      <NoteTitle>things i’ve made.</NoteTitle>

      <div className="mt-8">
        <FeaturedCard />
      </div>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-ink dark:text-mist">more projects.</h2>
      <ul className="mt-2 divide-y divide-line/70 dark:divide-white/10">
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
