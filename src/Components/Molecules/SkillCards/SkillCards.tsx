import { Title } from "@/Components/Atoms";
import { skillList } from "@/Data/Skills";

import "./SkillCards.scss";
import { SkillsText } from "@/Data/Text";

export const SkillCards = () => {
  return (
    <div className="container skill-container">
      {skillList.map((skill) => (
        <article key={skill.id}>
          <Title>{SkillsText[skill.id]}</Title>
          <div className="skill-icons">
            {skill.content.map(({ name, Icon }) => (
              <div key={name} className="skill-icons__container">
                <Icon
                  className="skill-icons__icon"
                  aria-label={`${name} icon`}
                />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
