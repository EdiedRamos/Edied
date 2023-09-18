import { Card } from "../../Atoms";
import { skillList } from "../../../Data/Skills";

import "./SkillCards.scss";

export const SkillCards = () => {
  return (
    <section>
      {skillList.map((skill) => (
        <div>
          <div className="container border-decoration">
            <p>{skill.type}</p>
          </div>
          <div className="skillCards-container">
            {skill.content.map(({ image, name }) => (
              <Card key={image} src={image} alt={name} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
