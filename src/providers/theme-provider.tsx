"use client";

import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";
type ThemeContextType = {
  parceiro: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const parceiro = pathname.split("/")[1] || "softrack"; // Se não tiver parceiro na URL, usa "softrack"
  const [theme, setTheme] = useState<Theme>("dark"); // Padrão: dark
  console.log("aquiu");
  useEffect(() => {
    const htmlElement = document.documentElement;

    // Remove qualquer classe antiga que segue o padrão `parceiro-tema`
    htmlElement.classList.forEach((className) => {
      if (className.includes("-light") || className.includes("-dark")) {
        htmlElement.classList.remove(className);
      }
    });

    // Adiciona a nova classe no formato correto
    htmlElement.classList.add(`${parceiro}-${theme}`);
  }, [parceiro, theme]);

  return (
    <ThemeContext.Provider value={{ parceiro, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function ThemeProvider({
//   children,
//   ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }
