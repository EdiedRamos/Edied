import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { BorderContainer } from "@/Components/Atoms";
import { ProjectCards } from "@/Components/Organisms";

import "./Projects.scss";

const Projects = () => {
  return (
    <section id={ROUTE_URLS.PROJECTS} className="projects-page">
      <BorderContainer isTitle>
        <p>Mis proyectos</p>
      </BorderContainer>
      <ProjectCards />
      <BorderContainer>
        <p style={{ fontStyle: "italic", color: "#fcc39b" }}>
          Más proyectos en camino.{" "}
          <span style={{ fontStyle: "normal" }}>😉</span>
        </p>
      </BorderContainer>
    </section>
  );
};

export default Projects;
