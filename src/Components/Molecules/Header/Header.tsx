import { HeaderText } from "@/Data/Text";
import { headerData } from "../../../Data/Header";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header__list">
        {headerData.map(({ id, name, redirect, Icon }) => (
          <li className="header__list__item" key={id}>
            <div className="header__list__item__container">
              <a title={name} href={`#${redirect}`}>
                <Icon />
              </a>
              <p>{HeaderText[name]}</p>
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
