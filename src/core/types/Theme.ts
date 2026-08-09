export type ThemeKey = "light" | "dark" ;

export type Theme = {
    key: ThemeKey;
    label: string;
};

export const THEMES: Theme[] = [
    { key: "light", label: "☀️" },
    { key: "dark", label: "🌙" },
];