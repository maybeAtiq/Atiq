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

const FeaturedCard = () => (
  <a
    href={featured.open}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block overflow-hidden rounded-2xl bg-[#0b0b0f] text-white px-6 py-12 md:px-12 md:py-16 text-center"
  >
    {/* Soft signal-red glow + radar rings */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_120%,rgba(255,59,48,0.35),transparent_70%)] transition-opacity duration-500 group-hover:opacity-90"
    />
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
      {[240, 420, 600, 780].map((s) => (
        <span
          key={s}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
          style={{ width: s, height: s }}
        />
      ))}
    </div>

    <div className="relative">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#ff453a]">
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-[#ff453a] animate-ping motion-reduce:hidden opacity-60" />
          <span className="relative w-2 h-2 rounded-full bg-[#ff453a]" />
        </span>
        {featured.kicker}
      </p>
      <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em]">
        {featured.title}
      </h2>
      <p className="mt-5 mx-auto max-w-lg text-base md:text-lg leading-relaxed text-white/65">
        {featured.desc.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <span className="mt-8 inline-flex items-center gap-1 rounded-full bg-white text-[#0b0b0f] px-6 py-3 text-[15px] font-medium transition group-hover:bg-white/90">
        Play now
        <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </span>
      <p className="mt-4 text-sm text-white/40">soe.maybeatiq.dev</p>
    </div>
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
