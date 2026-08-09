import "./Row.css";

type RowProps = {
  className?: string;
  children: React.ReactNode;
};

export function Row({ className = "", children }: RowProps) {
  return <div className={`row-layout ${className}`}>{children}</div>;
}
