'use client';

import NavBar from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Home() {
  const [darkModeOn, setDarkModeOn] = useDarkMode();
  const themeContext = {
    darkModeOn,
    setDarkModeOn
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <div className={darkModeOn ? "dark" : ""}>
        <div className="h-screen bg-white dark:bg-black">
          <NavBar />

        </div>
      </div>
    </ThemeContext.Provider>
  );
}
