import { headerData } from "../../../Data/Header/header.data";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header__list">
        {headerData.map(({ id, name, redirect, icon }) => (
          <li className="header__list__item" key={id}>
            <div className="header__list__item__container">
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
