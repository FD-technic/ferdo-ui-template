import { NavLink } from "react-router-dom";

type MenuLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
};

export function MenuLink({ to, children, onClick }: MenuLinkProps) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `btn btn-accent btn-line btn-md${isActive ? " active" : ""}`
        }
        onClick={onClick}
      >
        {children}
      </NavLink>
    </>
  );
}
