import { Cv } from "../../../Resources/Icons";
import { BorderContainer, Icon } from "../../Atoms";

import "./MyCv.scss";

export const MyCv = () => {
  return (
    <>
      <BorderContainer isTitle>
        <p>Hoja de vida</p>
      </BorderContainer>
      <div className="cv-container">
        <a
          href="https://drive.google.com/file/d/1DMispnqd7DYcajyh4q9FLwSxaZVaZrdn/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="cv-link"
        >
          <Icon src={Cv} spin alt="cv icon" />
        </a>
      </div>
    </>
  );
};
