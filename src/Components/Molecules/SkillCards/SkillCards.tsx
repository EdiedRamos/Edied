import "./SkillCards.scss";

import { Title } from "@/Components/Atoms";
import { skillList } from "@/Data/Skills";
import { useTranslation } from "react-i18next";

export const SkillCards = () => {
  const { t } = useTranslation();

  return (
    <div className="container skill-container">
      {skillList.map((skill) => (
        <article key={skill.id}>
          <Title>{t(`skills.${skill.type}`)}</Title>
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
