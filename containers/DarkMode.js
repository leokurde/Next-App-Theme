import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export function DarkMode({ className }) {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [setTheme]);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const sunShadowStyles = isDarkMode
    ? "drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
    : "drop-shadow-[0_0_10px_rgba(0,0,0,1)]";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <button className="" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <SunIcon className={`h-20 w-20 ${sunShadowStyles} animate-fade-in`} />
        ) : (
          <MoonIcon
            className={`h-20 w-20 ${sunShadowStyles} animate-fade-in`}
          />
        )}
      </button>
    </div>
  );
}
