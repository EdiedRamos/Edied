import { ROUTE_URLS } from "../../../Domain/Constants/urls";
import { BorderContainer } from "../../Atoms";
import { ProjectCards } from "../../Organisms";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id={ROUTE_URLS.PROJECTS} className="projects-page">
      <BorderContainer isTitle>
        <p>Mis proyectos</p>
      </BorderContainer>
      <ProjectCards />
    </section>
  );
};

export default Projects;
