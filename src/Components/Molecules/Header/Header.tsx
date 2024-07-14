import "./Header.scss";

import { headerData } from "../../../Data/Header";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <ul className="header__list">
        {headerData.map(({ id, name, redirect, Icon }) => (
          <li className="header__list__item" key={id}>
            <div className="header__list__item__container">
              <a title={name} href={`#${redirect}`}>
                <Icon />
              </a>
              <p>{t(`header.${name}`)}</p>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
