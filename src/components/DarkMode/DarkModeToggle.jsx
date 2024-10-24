import { useDarkMode } from "./DarkModeContext";
import { Classic } from "@theme-toggles/react";
import "./DarkModeToggle.css";

function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <Classic
      className="toggle-btn"
      toggled={isDarkMode}
      toggle={setIsDarkMode}
      duration={1000}
    />
  );
}

export default DarkModeToggle;
