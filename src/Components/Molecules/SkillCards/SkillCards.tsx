import { Title } from "@/Components/Atoms";
import { skillList } from "@/Data/Skills";

import "./SkillCards.scss";

export const SkillCards = () => {
  return (
    <div className="container skill-container">
      {skillList.map((skill) => (
        <article key={skill.type}>
          <Title>{skill.type}</Title>
          <div className="skill-icons">
            {skill.content.map(({ name, Icon }) => (
              <div key={name} className="skill-icons__container">
                {Icon && (
                  <Icon
                    className="skill-icons__icon"
                    aria-label={`${name} icon`}
                  />
                )}
                <p>{name}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
