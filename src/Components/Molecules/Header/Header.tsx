import { NavLink } from "react-router-dom";

import { headerData } from "../../../Data/Header/header.data";

import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <ul>
        {headerData.map(({ id, name, redirect }) => (
          <li key={id}>
            <NavLink title={name} to={redirect}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};
