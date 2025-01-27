import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  useEffect(() => {
    setDarkModeOn(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updateDarkMode = (e: MediaQueryListEvent) => {
      setDarkModeOn(e.matches);
    };

    // Register listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDarkMode);

    // Clean up listener
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateDarkMode);
  }, []);

  return [darkModeOn, setDarkModeOn] as [boolean, Dispatch<SetStateAction<boolean>>];
}
