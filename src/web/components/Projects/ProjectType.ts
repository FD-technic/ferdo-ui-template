import type { ButtonSize, ButtonVariant } from "@core/components/Button/ButtonVariant";

export type Projects = {
    projects: ProjectType[];
}

export type ProjectType = {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    action: Action;
    repositories?: Action[];
    image?: Image;
};

export type Action = {
  label: string;
  href: string;
  variant: ButtonVariant;
  size: ButtonSize;
  weight: string;
};

export type Repository = {
    actions: Action[];
}

export type Image = {
    src: string;
        alt: string;
        width: number;
}
