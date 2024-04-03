import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { SectionSetup } from "@/Components/Atoms";
import { SkillCards } from "@/Components/Molecules";

import "./Skills.scss";

const Skills = (): JSX.Element => {
  return (
    <SectionSetup className="skills-section" id={ROUTE_URLS.SKILLS}>
      <SkillCards />
    </SectionSetup>
  );
};

export default Skills;
