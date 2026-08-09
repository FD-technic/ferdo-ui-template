import type { ComponentType } from "react";

import {
  Home,
  About,
  Projects,
  Contacts,
} from "@web/pages";

export type AppRoute = {
  path: string;
  label: string;
  component: ComponentType;
};

export const publicRoutes: AppRoute[] = [
  {
    path: "/",
    label: "Home",
    component: Home,
  },
  {
    path: "/about",
    label: "About",
    component: About,
  },
  {
    path: "/projects",
    label: "Projects",
    component: Projects,
  },
  {
    path: "/contacts",
    label: "Contacts",
    component: Contacts,
  },

];