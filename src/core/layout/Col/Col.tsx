import "./Col.css";

type ColProps = {
  className?: string;
  children: React.ReactNode;
};

export function Col({ className = "", children }: ColProps) {
  return <div className={`col-layout ${className}`}>{children}</div>;
}
