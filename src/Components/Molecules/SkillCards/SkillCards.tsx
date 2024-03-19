import { skillList } from "@/Data/Skills";
import { Icon, Title } from "@/Components/Atoms";

import "./SkillCards.scss";

export const SkillCards = () => {
  return (
    <div className="container skill-container">
      {skillList.map((skill) => (
        <article key={skill.type}>
          <Title>{skill.type}</Title>
          <div className="skill-cards">
            {skill.content.map(({ image, name }) => (
              <Icon key={image} src={image} alt={name} value={name} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
