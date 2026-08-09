import image from "./images/EquiFlow.png";
import type { ProjectType } from "../components/Projects/ProjectType";

export const equiflowContent: ProjectType = {
    badge: "Track. Analyse.",
    title: "EquiFlow",
    subtitle: "Investment Portfolio Tracker",

    description:
        "EquiFlow is a full-stack web application for tracking stock markets, managing your portfolio and analyzing performance over time.",

    technologies: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Docker"
    ],

    action: {
            label: "Live Demo",
            href: "https://equiflow.ferdo.eu",
            variant: "accent",
            weight: "font-bold",
            size: "sm"
        },
    repositories: [
        {
            label: "Client",
            href: "https://github.com/FD-technic/equiflow-client",
            variant: "border-primary",
            weight: "",
            size: "sm"
        },
        {
            label: "Backend",
            href: "https://github.com/FD-technic/equiflow-backend",
            variant: "border-primary",
            weight: "",
            size: "sm"
        },
    ],
    image: {
        src: image,
        alt: "EquiFlow dashboard",
        width: 400}
};