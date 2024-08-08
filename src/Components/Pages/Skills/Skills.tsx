import "./Skills.scss";

import { SectionSetup, Title } from "@/Components/Atoms";

import { ROUTE_URLS } from "@/Domain/Constants/urls";
import { SkillCards } from "@/Components/Molecules";
import { useTranslation } from "react-i18next";

const Skills = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <SectionSetup className="skills-section" id={ROUTE_URLS.SKILLS}>
      <Title>{t("header.skills")}</Title>
      <SkillCards />
    </SectionSetup>
  );
};

export default Skills;
