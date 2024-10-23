import { useDarkMode } from "./DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  console.log("Dark mode is:", isDarkMode);
  return (
    <button
      className="btn btn-outline-dark"
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{ padding: "10px", cursor: "pointer" }}
    >
      {isDarkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;
