import "./ProjectCards.scss";
import { projectList } from "../../../Data/Projects";
import { ProjectCard } from "../../Molecules/ProjectCard/ProjectCard";

export const ProjectCards = () => {
  return (
    <div className="project-cards-container">
      {projectList.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
