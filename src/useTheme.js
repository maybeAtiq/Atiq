import { useCallback, useEffect, useState } from "react";

// Theme state lives here so every toggle on the page stays in sync.
// Dark is the default; index.html applies the class before first paint.
export const useTheme = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        /* storage unavailable — theme still applies for this visit */
      }
      return next;
    });
  }, []);

  return [dark, toggle];
};
