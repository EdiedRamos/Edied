import { projectList } from "@/Data/Projects";
import { ProjectCard } from "@/Components/Molecules";

import "./ProjectCards.scss";

export const ProjectCards = () => {
  return (
    <div className="project-cards-container">
      {projectList.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
