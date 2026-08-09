import "../Button/Button.css"
import hamburger from "@assets/icons/hamburger.png";
import { Button } from "@core/components";

type HamburgerButtonProps = {
    onClick: () => void;
}

export function HamburgerButton({ onClick }: HamburgerButtonProps) {

    return (
        <Button className="hamburger btn-accent btn-sm"
        onClick={onClick} >
            <img src={hamburger} alt="menu" width={25} />
        </Button>

    )
}