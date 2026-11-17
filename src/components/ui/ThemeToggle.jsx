import { AnimatePresence, m } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";
import { FiMoon, FiSun } from "./icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="icon-btn overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          initial={{ y: -18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: 18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
        </m.span>
      </AnimatePresence>
    </button>
  );
}
