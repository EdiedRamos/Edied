import { Header } from "@/Components/Molecules";
import { Contact, Home, Projects, Skills } from "@/Components/Pages";

import "./Portfolio.scss";

const Portfolio = (): JSX.Element => {
  return (
    <main>
      <Header />
      <div className="portfolio-wrapper">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Portfolio;
