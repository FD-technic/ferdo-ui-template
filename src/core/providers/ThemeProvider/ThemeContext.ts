import { createContext } from "react";
import type { ThemeKey } from "@core/types/Theme"

type ThemeContextType = {
    theme: ThemeKey;
    setTheme: (theme: ThemeKey) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null); 
