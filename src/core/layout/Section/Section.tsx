import type React from "react";
import "./Section.css";

type SectionProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
}
export function Section({ id = "", className = "", children }: SectionProps) {

    return (
        <section id={id} className={`section ${className}`}>
                {children}
        </section>
    );
};
