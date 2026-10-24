import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { SearchIcon } from "./Icons";

const snippet = (text, q) => {
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return null;
  const start = Math.max(0, i - 24);
  const end = Math.min(text.length, i + q.length + 48);
  return `${start > 0 ? "…" : ""}${text.slice(start, end).trim()}${end < text.length ? "…" : ""}`;
};

const Sidebar = ({ notes, searchIndex, activeId, onSelect, dark, onToggleTheme, className = "" }) => {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = q
    ? notes
        .map((n) => {
          const inHeader = `${n.id} ${n.title} ${n.preview}`.toLowerCase().includes(q);
          const match = snippet(searchIndex[n.id] ?? "", q);
          if (!inHeader && !match) return null;
          return { ...n, preview: inHeader ? n.preview : match };
        })
        .filter(Boolean)
    : notes;
  const groups = [
    { label: "Pinned", items: visible.filter((n) => n.pinned) },
    { label: "Notes", items: visible.filter((n) => !n.pinned) },
  ].filter((g) => g.items.length);

  return (
    <aside
      className={`${className} w-full md:w-72 lg:w-80 shrink-0 flex-col bg-mist dark:bg-night-side md:border-r border-line/70 dark:border-black/60`}
    >
      {/* Window bar */}
      <div className="h-12 shrink-0 px-4 flex items-center justify-between">
        <div className="hidden md:flex gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="md:hidden" />
        <ThemeToggle dark={dark} onToggle={onToggleTheme} />
      </div>

      <div className="px-4 pb-3">
        <p className="md:hidden mb-3 text-3xl font-bold tracking-tight text-ink dark:text-mist">notes.</p>
        <label className="relative block">
          <span className="sr-only">Search notes</span>
          <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft dark:text-night-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full rounded-lg bg-black/[0.06] dark:bg-white/10 pl-8 pr-3 py-1.5 text-sm text-ink dark:text-mist placeholder:text-ink-soft dark:placeholder:text-night-soft outline-none focus:ring-2 focus:ring-note/50"
          />
        </label>
      </div>

      <nav aria-label="Notes" className="flex-1 overflow-y-auto px-2.5 pb-4">
        {groups.map((group) => (
          <div key={group.label} className="mt-2">
            <p className="px-2 pb-1.5 text-xs font-semibold text-ink-soft dark:text-night-soft">{group.label}</p>
            <ul className="space-y-0.5">
              {group.items.map((note) => {
                const active = note.id === activeId;
                return (
                  <li key={note.id}>
                    <button
                      type="button"
                      onClick={() => onSelect(note.id)}
                      aria-current={active ? "page" : undefined}
                      className={`w-full text-left rounded-lg px-3 py-2.5 transition-colors cursor-pointer ${
                        active
                          ? "bg-note-sel dark:bg-night-note-sel"
                          : "hover:bg-black/[0.04] dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="block text-sm font-semibold truncate text-ink dark:text-mist">{note.title}</span>
                      <span className="block mt-0.5 text-xs truncate text-ink-soft dark:text-night-soft">
                        {note.preview}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {!groups.length && (
          <p className="px-2 py-6 text-sm text-center text-ink-soft dark:text-night-soft">
            No notes match “{query}”.
          </p>
        )}
      </nav>

      <footer className="shrink-0 px-5 py-3 border-t border-line/70 dark:border-white/10 flex justify-between gap-2 text-[11px] text-ink-soft dark:text-night-soft">
        <span>© {new Date().getFullYear()} Muhammad Atiq</span>
        <a
          href="https://github.com/maybeAtiq/Atiq"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink dark:hover:text-mist transition-colors"
        >
          Source code
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
