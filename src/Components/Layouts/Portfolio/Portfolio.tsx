import { Home, Projects, Contact, Skills } from "@/Components/Pages";

import { Header } from "@/Components/Molecules";

const Portfolio = (): JSX.Element => {
  return (
    <main>
      <Header />
      <div style={{ backdropFilter: "blur(75px)" }}>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Portfolio;
