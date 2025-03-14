import { ThemeContext } from "@providers/theme-provider";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
