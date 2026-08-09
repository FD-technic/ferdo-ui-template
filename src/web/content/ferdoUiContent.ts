import type { ProjectType } from "../components/Projects/ProjectType";

export const ferdoUiContent: ProjectType = {
    badge: "Build. Reuse. Scale.",
    title: "Ferdo-UI",
    subtitle: "React UI Framework",

    description:
        "ferdo-ui is my personal React component library and design system.   It provides reusable UI components, responsive layouts and theme     support that power my portfolio and future web applications with a   consistent and maintainable architecture.",

    technologies: [
        "React",
        "TypeScript",
        "Vite",
        "CSS",
        "Design System"
    ],

    action: {
            label: "Repository",
            href: "https://github.com/FD-technic/ferdo-ui-template",
            variant: "accent",
            weight: "font-bold",
            size: "sm"
        }
};