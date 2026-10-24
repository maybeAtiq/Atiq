import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import ToolbarButton from "./components/ToolbarButton";
import Introduction from "./components/Introduction";
import About from "./components/About";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { ChevronLeftIcon, GitHubIcon, MailIcon, MediumIcon } from "./components/Icons";
import { useTheme } from "./useTheme";

const notes = [
  {
    id: "hello",
    title: "hi, i’m atiq.",
    preview: "conjuring code magic. Software engineer from Nigeria.",
    pinned: true,
    Body: Introduction,
  },
  {
    id: "about",
    title: "meet me.",
    preview: "Frontend-focused developer, learning cybersecurity.",
    Body: About,
  },
  // {
  //   id: "experience",
  //   title: "where i’ve worked.",
  //   preview: "Olamax, NCAIR, freelance.",
  //   Body: Experience,
  // },
  {
    id: "projects",
    title: "things i’ve made.",
    preview: "State of Emergency, ROS Rentals, Atystic, Press-It!…",
    Body: Projects,
  },
];

const socials = [
  { label: "Email", href: "mailto:hello@maybeatiq.dev", Icon: MailIcon },
  { label: "GitHub", href: "https://github.com/maybeatiq", Icon: GitHubIcon },
  { label: "Medium", href: "https://medium.com/@defineAtiq", Icon: MediumIcon },
];

const noteFromHash = () => {
  const id = window.location.hash.slice(1);
  return notes.some((n) => n.id === id) ? id : null;
};

function App() {
  const [dark, toggleTheme] = useTheme();
  const [activeId, setActiveId] = useState(() => noteFromHash() ?? notes[0].id);
  // On phones the list and the note are separate screens, like iOS Notes
  // and the list is the home screen unless the URL points at a note
  const [showList, setShowList] = useState(() => !noteFromHash());

  // The URL hash picks the note, so links like #projects work and can be shared.
  // No hash means the list, so the browser's back button returns to it.
  useEffect(() => {
    const onHashChange = () => {
      const id = noteFromHash();
      if (id) {
        setActiveId(id);
        setShowList(false);
      } else {
        setShowList(true);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Full text of every note for search, read from a hidden render of each body
  const indexRef = useRef(null);
  const [searchIndex, setSearchIndex] = useState({});
  useEffect(() => {
    const index = {};
    indexRef.current.querySelectorAll("[data-note]").forEach((el) => {
      index[el.dataset.note] = el.textContent.replace(/\s+/g, " ").trim();
    });
    setSearchIndex(index);
  }, []);

  const openNote = (id) => {
    if (window.location.hash === `#${id}`) setShowList(false);
    else window.location.hash = id;
  };

  // Always lands on the list, whatever was open before; the browser's back button still works as usual
  const goToList = () => {
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    setShowList(true);
  };

  const active = notes.find((n) => n.id === activeId);
  const { Body } = active;

  return (
    <>
      <div className="h-svh flex md:p-6 lg:p-10">
        <div className="flex-1 max-w-6xl mx-auto flex overflow-hidden bg-white dark:bg-night-paper md:rounded-xl md:border border-line/80 dark:border-night-line md:shadow-2xl md:shadow-black/10">
          <Sidebar
            className={showList ? "flex" : "hidden md:flex"}
            notes={notes}
            searchIndex={searchIndex}
            activeId={activeId}
            onSelect={openNote}
            dark={dark}
            onToggleTheme={toggleTheme}
          />

          <main className={`${showList ? "hidden md:flex" : "flex"} flex-1 min-w-0 flex-col`}>
            {/* Note toolbar */}
            <div className="h-12 shrink-0 px-2 md:px-4 flex items-center justify-between border-b border-line/50 dark:border-white/10">
              <button
                type="button"
                onClick={goToList}
                className="md:hidden inline-flex items-center px-1 py-1 text-[17px] text-note-ink dark:text-night-note cursor-pointer"
              >
                <ChevronLeftIcon />
                notes
              </button>
              <span className="hidden md:block" />
              <div className="flex items-center gap-0.5">
                {socials.map(({ label, href, Icon }) => (
                  <ToolbarButton
                    key={label}
                    href={href}
                    label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </ToolbarButton>
                ))}
                <span className="md:hidden">
                  <ThemeToggle dark={dark} onToggle={toggleTheme} />
                </span>
              </div>
            </div>

            {/* Keyed so each note opens scrolled to the top */}
            <div key={active.id} className="flex-1 overflow-y-auto">
              <article className="min-h-full max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-12 flex flex-col">
                <Body />
              </article>
            </div>
          </main>
        </div>
      </div>

      <div ref={indexRef} hidden aria-hidden="true">
        {notes.map(({ id, Body: NoteBody }) => (
          <div key={id} data-note={id}>
            <NoteBody />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
