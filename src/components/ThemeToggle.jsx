import { MoonIcon, SunIcon } from "./Icons";
import ToolbarButton from "./ToolbarButton";

const ThemeToggle = ({ dark, onToggle }) => (
  <ToolbarButton
    as="button"
    type="button"
    onClick={onToggle}
    label={dark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {dark ? <SunIcon /> : <MoonIcon />}
  </ToolbarButton>
);

export default ThemeToggle;
