import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { SkillCards } from "@/Components/Molecules";

const Skills = (): JSX.Element => {
  return (
    <section id={ROUTE_URLS.SKILLS}>
      <SkillCards />
    </section>
  );
};

export default Skills;
