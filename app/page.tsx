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
        <div className="bg-white dark:bg-black">
          <NavBar />

          <section className="relative h-[80vh]">
            <div className="h-full w-screen">
              <div className="h-full flex items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white">
                  Welcome to my home page!
                </h1>
              </div>
            </div>

            <div className="absolute h-full w-full bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal]" style={{
              filter: "blur(100px)",
              WebkitFilter: "blur(100px)",
              backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
            }}>

            </div>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
