import { Header } from "@/Components/Molecules";
import { Contact, Home, Projects, Skills } from "@/Components/Pages";

import { useRoutes } from "@/Core";

const Portfolio = (): JSX.Element => {
  useRoutes();
  return (
    <main>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;
