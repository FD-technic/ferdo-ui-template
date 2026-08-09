import { Link } from "react-router-dom";
import "./Button.css";

type ButtonType = "submit" | "reset" | "button";

type ButtonProps = {
  type?: ButtonType;
  to?: string;
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({
  type = "button",
  to = "",
  href = "",
  children,
  disabled = false,
  onClick,
  className,
}: ButtonProps) {
  const isLink = to !== "";
  const isHref = href !== "";

  if (isLink) {
    return (
      <Link to={to} className={`btn ${className ?? ""}`}>
        {children}
      </Link>
    );
  }

  if (isHref) {
    return (
      <a href={href} className={`btn ${className ?? ""}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn ${className ?? ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
