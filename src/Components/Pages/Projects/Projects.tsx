import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { SectionSetup, Title } from "@/Components/Atoms";
import { ProjectCards } from "@/Components/Organisms";

import "./Projects.scss";

const Projects = () => {
  return (
    <SectionSetup className="projects-section" id={ROUTE_URLS.PROJECTS}>
      <article className="container">
        <Title>Proyectos</Title>
        <ProjectCards />
        <p
          style={{
            fontStyle: "italic",
            color: "#fcc39b",
            marginTop: "1.2rem",
          }}
        >
          Más proyectos en camino.{" "}
          <span style={{ fontStyle: "normal" }}>😉</span>
        </p>
      </article>
    </SectionSetup>
  );
};

export default Projects;
