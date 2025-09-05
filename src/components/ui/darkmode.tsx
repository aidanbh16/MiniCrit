"use client";

import {useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("hs_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const dark = savedTheme === "dark" || (savedTheme === "auto" && prefersDark);
    const light = savedTheme === "light" || (savedTheme === "auto" && !prefersDark);

    if (dark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (light) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    localStorage.setItem("hs_theme", newTheme);
    html.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} type="button" className={`font-medium text-black rounded-full hover:cursor-pointer hover:bg-gray-200`}>
      <span className="group inline-flex shrink-0 justify-center items-center size-9">
        {isDark ? (
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
