import { useEffect, useState } from "react";
import { IDarkMode } from "app/config/@interfaces/hook.interface";

export default function useDarkMode(): IDarkMode {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem("theme-mode") === "light") {
      document.documentElement.classList.remove("dark");
      setDarkModeEnabled(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkModeEnabled(true);
    }
  }, []);

  const toggleMode = () => {
    if (darkModeEnabled) {
      setDarkModeEnabled(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    } else {
      setDarkModeEnabled(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    }
  };

  return {
    darkModeEnabled,
    toggleMode,
  };
}
