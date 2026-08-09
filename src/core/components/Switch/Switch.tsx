import "./Switch.css";

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Switch({ checked, onChange }: SwitchProps) {

    return (
        <button
        className={`switch ${checked ? "checked" : ""}`}
        onClick={() => onChange(!checked)}>
            <span className="switch-thumb" />
        </button>
    )
}