"use client";

import { useTheme } from "@hooks/useTheme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 border rounded-md"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Mudar para {theme === "light" ? "dark" : "light"}
    </button>
  );
};
