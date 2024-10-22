import React, { useEffect } from "react";
import useDarkMode from "use-dark-mode";

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    // This effect could be used to add a class to the body or handle any side effects
    if (darkMode.value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode.value]);

  return (
    <button
      className="btn btn-outline-dark"
      onClick={darkMode.toggle}
      style={{ padding: "10px", cursor: "pointer" }}
    >
      {darkMode.value ? "Light" : "Dark"}
    </button>
  );
}
