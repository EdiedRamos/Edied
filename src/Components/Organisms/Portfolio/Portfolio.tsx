import { Home, Projects, Skills } from "@/Components/Pages";

import { MainLayout } from "@/Components/Layouts";
import { useRoutes } from "@/Core";

export const Portfolio = (): JSX.Element => {
  useRoutes();
  return (
    <MainLayout>
      <Home />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </MainLayout>
  );
};
