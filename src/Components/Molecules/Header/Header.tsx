import "./Header.scss";

import { useRef, useState } from "react";

import { Icons } from "@/General/Icons";
import { Logo } from "@/Resources/Icons";
import { headerData } from "../../../Data/Header";
import { useLanguage } from "@/Core";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const { language, handleLanguage } = useLanguage();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);

  const handleToggle = () => {
    if (!mobileMenuRef.current) return;
    mobileMenuRef.current.classList.toggle("hide");
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="header container">
      <img
        width={50}
        height={50}
        className="header__logo"
        src={Logo}
        alt="EdiedRamos logo"
      />
      <ul ref={mobileMenuRef} className="header__mobile__list hide">
        {headerData.map(({ id, name, redirect }) => (
          <li className="header__list__item" key={id}>
            <div className="header__list__item__container">
              <a onClick={handleToggle} title={name} href={`#${redirect}`}>
                {t(`header.${name}`)}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <ul className="header__desktop__list">
        {headerData.map(({ id, name, redirect }) => (
          <li className="header__list__item" key={id}>
            <div className="header__list__item__container">
              <a title={name} href={`#${redirect}`}>
                {t(`header.${name}`)}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="header__group">
        <div className="header__language">
          <button
            aria-label="language toggle button"
            onClick={
              handleLanguage()[language === "es" ? "toEnglish" : "toSpanish"]
            }
          >
            {Icons.worldIcon({ size: 18 })}{" "}
            {language === "es" ? "English" : "Español"}
          </button>
        </div>
        <div className="mobile-list--toggle">
          <button aria-label="mobile menu toggle" onClick={handleToggle}>
            {Icons[showMenu ? "closeSharp" : "burgerMenu"]({ size: 25 })}
          </button>
        </div>
      </div>
    </header>
  );
};
