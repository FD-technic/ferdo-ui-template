import { useEffect, useState } from "react";

import { Footer, Header } from "@core/components";
import { AppRoutes } from "@web/routes/AppRoutes";

import { adminRoutes } from "@web/content/adminRoutes";
import { publicRoutes } from "@web/content/publicRoutes";

import { themeService } from "@core/types/ThemeStorage";
import { useTheme } from "@core/hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    themeService.apply(theme);
  }, [theme]);

  const handleSwitchChange = (checked: boolean) => {
    setTheme(checked
      ? "dark"
      : "light");
  };

  return (
    <div className="page">
      <Header
        menu={isAuthorized ? adminRoutes : publicRoutes}
        isChecked={theme === "dark"}
        onChange={handleSwitchChange}
        authorized={isAuthorized}
        onAuthorizedCahange={setIsAuthorized}
      />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;