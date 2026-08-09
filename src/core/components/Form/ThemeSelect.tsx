import { Select } from "./Select";
import type { Theme, ThemeKey } from "../../types/Theme";


type ThemeSelectProps = {
    items: Theme[];
    value: ThemeKey;
    onChange: (theme: ThemeKey) => void;
}

export function ThemeSelect( {items, value, onChange}:ThemeSelectProps ) {

    return (
        <Select
        label="" 
        id="theme-select"
        name="themeSelect"
        items={items}
        value={value}
        onChange={(value) => onChange(value as ThemeKey)}
        />
    );
};
