import { Home, Projects, Contact, Skills } from "../../Pages";

import { Header } from "../../Molecules";

const Portfolio = (): JSX.Element => {
  return (
    <main style={{ marginBottom: "2rem" }}>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;
