import { Home, Projects, Contact, Skills } from "@/Components/Pages";

import { Header } from "@/Components/Molecules";

const Portfolio = (): JSX.Element => {
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
