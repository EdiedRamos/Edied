import { Cv } from "../../../Resources/Icons";
import { BorderContainer, Card } from "../../Atoms";

import "./MyCv.scss";

export const MyCv = () => {
  return (
    <>
      <BorderContainer>
        <p>Here you can check my CV</p>
      </BorderContainer>
      <div className="cv-container">
        <a
          href="https://drive.google.com/file/d/1x68ibvCb5sVFW6izLXZnwfV6g1dlXaBG/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="cv-link"
        >
          <Card src={Cv} spin alt="cv icon" />
        </a>
      </div>
    </>
  );
};
