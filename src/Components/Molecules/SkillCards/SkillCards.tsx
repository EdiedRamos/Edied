import { skillList } from "@/Data/Skills";
import { BorderContainer, Icon } from "@/Components/Atoms";

import "./SkillCards.scss";

export const SkillCards = () => {
  return (
    <section>
      {skillList.map((skill) => (
        <article key={skill.type}>
          <BorderContainer isTitle>
            <h2>{skill.type}</h2>
          </BorderContainer>
          <div className="skillCards-container">
            {skill.content.map(({ image, name }) => (
              <Icon key={image} src={image} alt={name} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
