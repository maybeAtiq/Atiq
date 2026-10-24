// Small round icon button, like the ones in a macOS toolbar
const ToolbarButton = ({ as: Tag = "a", label, children, className = "", ...props }) => (
  <Tag
    aria-label={label}
    title={label}
    className={`grid place-items-center w-9 h-9 rounded-lg text-ink-soft hover:text-ink hover:bg-black/[0.05] dark:text-night-soft dark:hover:text-mist dark:hover:bg-white/10 transition-colors cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

export default ToolbarButton;
