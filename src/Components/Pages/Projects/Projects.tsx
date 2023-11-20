import { BorderContainer } from "../../Atoms";
import { ProjectCards } from "../../Organisms";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-page">
      <BorderContainer>
        <p>Here are some of my relevant projects</p>
      </BorderContainer>
      <ProjectCards />
    </div>
  );
};

export default Projects;
