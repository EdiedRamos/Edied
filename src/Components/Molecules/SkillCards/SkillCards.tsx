import { BorderContainer, Card } from "../../Atoms";
import { skillList } from "../../../Data/Skills";

import "./SkillCards.scss";

export const SkillCards = () => {
  return (
    <section>
      {skillList.map((skill) => (
        <article key={skill.type}>
          <BorderContainer isTitle>
            <p>{skill.type}</p>
          </BorderContainer>
          <div className="skillCards-container">
            {skill.content.map(({ image, name }) => (
              <Card key={image} src={image} alt={name} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
