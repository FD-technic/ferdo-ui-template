import { Dashboard } from "@web/pages";
import type { ComponentType } from "react";



export type AppRoute = {
  path: string;
  label: string;
  component: ComponentType;
};


export const adminRoutes: AppRoute[] = [
  {
    path: "/admin",
    label: "Dashboard",
    component: Dashboard,
  }
];