import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { SkillCards } from "@/Components/Molecules";

import "./Skills.scss";

const Skills = (): JSX.Element => {
  return (
    <section id={ROUTE_URLS.SKILLS} className="skills-section">
      <SkillCards />
    </section>
  );
};

export default Skills;
