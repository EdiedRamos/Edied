import "./Header.scss";

import { Logo } from "@/Resources/Icons";
import { headerData } from "../../../Data/Header";
import { useLanguage } from "@/Core";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const { language, handleLanguage } = useLanguage();

  return (
    <header className="header">
      <img
        width={30}
        height={30}
        className="header__logo"
        src={Logo}
        alt="EdiedRamos logo"
      />
      <ul className="header__list">
        {headerData.map(({ id, name, redirect }) => (
          <li className="header__list__item" key={id}>
            <div className="header__list__item__container">
              <a title={name} href={`#${redirect}`}>
                <p>{t(`header.${name}`)}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="header__language">
        {language === "es" ? (
          <button onClick={handleLanguage().toEnglish}>EN</button>
        ) : (
          <button onClick={handleLanguage().toSpanish}>ES</button>
        )}
      </div>
    </header>
  );
};
