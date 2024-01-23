import { headerData } from "../../../Data/Header/header.data";

import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <ul>
        {headerData.map(({ id, name, redirect }) => (
          <li key={id}>
            <a title={name} href={`#${redirect}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
