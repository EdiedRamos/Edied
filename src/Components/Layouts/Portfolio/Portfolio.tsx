import { Home, Projects, Contact } from "../../Pages";

import { Header } from "../../Molecules";

const Portfolio = (): JSX.Element => {
  return (
    <main style={{ marginBottom: "2rem" }}>
      <Header />
      <Home />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;
