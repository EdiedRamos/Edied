import "./Resume.scss";

import { TbFileCv } from "react-icons/tb";
import { interCv } from "@/Data/Contact";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="cv__container">
      <a
        aria-label="resume anchor link"
        href={interCv[i18n.language as "es" | "en"]}
        target="_blank"
        rel="noreferrer"
      >
        <TbFileCv
          size={20}
          aria-label={`cv icon`}
          className="contact-cards__icon"
        />
        <span>{t("home.cv")}</span>
      </a>
    </div>
  );
};
