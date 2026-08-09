import { Routes, Route } from "react-router-dom";

import { NotFound } from "@web/pages";
import { publicRoutes } from "@web/content/publicRoutes";
import { adminRoutes } from "@web/content/adminRoutes";

export function AppRoutes() {
    return (
        <Routes>
            {publicRoutes.map(({ path, component: Component}) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}

            {adminRoutes.map(({ path, component: Component}) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}
            

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

