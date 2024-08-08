import "./Resume.scss";

import { TbFileCv } from "react-icons/tb";
import i18n from "@/i18n";
import { interCv } from "@/Data/Contact";
import { t } from "i18next";

export const Resume = () => {
  return (
    <div className="cv__container">
      <a
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
