import "./Projects.scss";

import { SectionSetup, Title } from "@/Components/Atoms";

import { ProjectCards } from "@/Components/Organisms";
import { ROUTE_URLS } from "@/Domain/Constants/urls";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <SectionSetup className="projects-section" id={ROUTE_URLS.PROJECTS}>
      <article className="container">
        <Title>{t("projects.title")}</Title>
        <ProjectCards />
        <p
          style={{
            color: "#fcc39b",
            marginTop: "1.2rem",
          }}
        >
          {t("projects.more")}
        </p>
      </article>
    </SectionSetup>
  );
};

export default Projects;
