import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { Title } from "@/Components/Atoms";
import { ProjectCards } from "@/Components/Organisms";

const Projects = () => {
  return (
    <section id={ROUTE_URLS.PROJECTS}>
      <article className="container" style={{ marginTop: "4rem" }}>
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
    </section>
  );
};

export default Projects;
