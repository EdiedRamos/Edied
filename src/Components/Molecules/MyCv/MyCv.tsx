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
          href="https://drive.google.com/file/d/1p0bLbPE9SRsZeTzCpW9tASgDGHjRrqh2/view?usp=sharing"
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
