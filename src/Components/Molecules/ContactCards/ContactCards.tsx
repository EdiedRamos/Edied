import "./ContactCards.scss";

import { contactList, interCv } from "@/Data/Contact";

import { TbFileCv } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export const ContactCards = () => {
  const { i18n } = useTranslation();
  return (
    <div className="contact-cards__container">
      {contactList.map(({ name, href, Icon }) => {
        return (
          <a key={name} href={href} target="_blank" rel="noreferrer">
            <Icon aria-label={`${name} icon`} className="contact-cards__icon" />
          </a>
        );
      })}
      <a
        href={interCv[i18n.language as "es" | "en"]}
        target="_blank"
        rel="noreferrer"
      >
        <TbFileCv aria-label={`cv icon`} className="contact-cards__icon" />
      </a>
    </div>
  );
};
