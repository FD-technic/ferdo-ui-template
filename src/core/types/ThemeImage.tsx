import { themeService } from "./ThemeStorage";

type ThemeImageProps = {
    light: string;
    dark: string;
    alt: string;
};

export function ThemeImage({ light, dark, alt }: ThemeImageProps) {
    const theme = themeService.get();

    return (
        <>
            <img 
                src={theme === "dark" ? dark : light}
                alt={alt} />
        </>
    )
}