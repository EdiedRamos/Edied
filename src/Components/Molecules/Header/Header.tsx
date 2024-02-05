import { headerData } from "../../../Data/Header/header.data";

import { useHeader } from "./useHeader";

import "./Header.scss";

export const Header = () => {
  const { activeSection } = useHeader();

  return (
    <header className="header">
      <ul className="header__list">
        {headerData.map(({ id, name, redirect, icon }) => (
          <li className="header__list__item" key={id}>
            <div
              className={`header__list__item__container ${
                activeSection.endsWith(redirect) && "active"
              }`}
            >
              <a title={name} href={`#${redirect}`}>
                <img src={icon} />
              </a>
              <p>{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
