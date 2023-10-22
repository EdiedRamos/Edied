import { BorderContainer } from "../../Atoms";
import { ProjectCards } from "../../Organisms";
import "./Projects.scss";

const Projects = () => {
  return (
    <div>
      <BorderContainer>
        <p>Here are some of my relevant projects</p>
      </BorderContainer>
      <ProjectCards />
    </div>
  );
};

export default Projects;
