import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { SectionSetup, Title } from "@/Components/Atoms";
import { ProjectCards } from "@/Components/Organisms";

import "./Projects.scss";
import { ProjectsText } from "@/Data/Text";

const Projects = () => {
  return (
    <SectionSetup className="projects-section" id={ROUTE_URLS.PROJECTS}>
      <article className="container">
        <Title>{ProjectsText.title}</Title>
        <ProjectCards />
        <p
          style={{
            color: "#fcc39b",
            marginTop: "1.2rem",
          }}
        >
          {ProjectsText.moreProjects}
        </p>
      </article>
    </SectionSetup>
  );
};

export default Projects;
