import { useState } from "react";

import "./Header.css";

import {
  Brand,
  HamburgerButton,
  HeaderContent,
  NavMenu,
  ThemeSwitch,
} from "@core/components";

import { BrandFD } from "@web/content/BrandFD";

import type { AppRoute } from "../../types/AppRoute";

type HeaderProps = {
  menu: AppRoute[];
  isChecked: boolean;
  authorized: boolean;
  onChange: (checked: boolean) => void;
  onAuthorizedCahange: (isAuthorized: boolean) => void;
};

export function Header({
  menu,
  isChecked,
  onChange,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Brand brand={BrandFD} />

      <HeaderContent>
        <NavMenu
          items={menu}
          menuOpen={menuOpen}
          className="nav"
          onItemsClick={() => setMenuOpen(false)}
        />

        <ThemeSwitch
          isChecked={isChecked}
          onToggle={onChange}
        />

        {!menuOpen && (
          <HamburgerButton
            onClick={() => setMenuOpen(open => !open)}
          />
        )}
      </HeaderContent>
    </header>
  );
}