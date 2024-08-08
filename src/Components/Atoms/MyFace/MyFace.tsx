import "./MyFace.scss";

import { Profile } from "../../../Resources/Profile";
import { Resume } from "@/Components/Atoms";

export const MyFace = () => {
  return (
    <article className="my-face my-face__container">
      <div className="my-face__box">
        <img
          fetchpriority="high"
          className="my-face__img"
          width="250"
          height="240"
          src={Profile}
          alt="Edied's Face"
        />
        <Resume />
      </div>
    </article>
  );
};
