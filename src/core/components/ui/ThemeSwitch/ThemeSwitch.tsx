import { Switch } from "@core/components/Switch";
import "./ThemeSwitch.css";

type ThemeSwitchProps = {
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
}

export function ThemeSwitch({ isChecked, onToggle }: ThemeSwitchProps) {

    return (
        <Switch
          checked={isChecked}
          onChange={onToggle}
        />

    )
}