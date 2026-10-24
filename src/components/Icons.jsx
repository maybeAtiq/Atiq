const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SunIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const MoonIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const MailIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

// Medium's brand mark: three ellipses
export const MediumIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <ellipse cx="6.77" cy="12" rx="6.77" ry="6.82" />
    <ellipse cx="17.58" cy="12" rx="3.38" ry="6.42" />
    <ellipse cx="22.81" cy="12" rx="1.19" ry="5.75" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const GitHubIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

export const ChevronLeftIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.25}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const CheckIcon = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={3.5}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
