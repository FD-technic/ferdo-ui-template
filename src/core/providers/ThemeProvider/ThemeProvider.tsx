import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { ThemeContext } from "./ThemeContext";
import { themeService } from "@core/types/ThemeStorage";
import type { ThemeKey } from "@core/types/Theme";

type ThemeProviderProps = {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    
    const [theme, setTheme] = useState<ThemeKey>(themeService.get());

    useEffect(() => {
        themeService.apply(theme);
    }, [theme]);

    return (
        <>
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
        </>
        
    )
}