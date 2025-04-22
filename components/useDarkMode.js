// components/useDarkMode.js

import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    const initial = stored ? stored : "light";
    setTheme(initial);
    root.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    root.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
}
