import React from "react";
import { ThemeProvider } from "./theme-provider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["softracklight", "softrackdark", "dark", "light"]}
    >
      {children}
    </ThemeProvider>
  );
}
