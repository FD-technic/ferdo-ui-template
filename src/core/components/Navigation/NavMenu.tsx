
import type { AppRoute } from "../../types/AppRoute";
import { MenuLink } from "./MenuLink";
import "./Navigation.css";

type NavMenuProps = {
    items: readonly AppRoute[];
    menuOpen: boolean;
  className?: string;
  onItemsClick: (() => void);
};

export function NavMenu({ items, menuOpen, className, onItemsClick }: NavMenuProps) {
  
  return (
    <nav className={`${menuOpen ? "nav open" : "nav"} ${className ?? ""}`}>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <MenuLink
              to={item.path}
              onClick={onItemsClick}
            >
              {item.label}
            </MenuLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

