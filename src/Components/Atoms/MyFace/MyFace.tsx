import { Profile } from "../../../Resources/Profile";

import "./MyFace.scss";

export const MyFace = () => {
  return (
    <div className="my-face my-face__container">
      <div className="my-face__box">
        <img
          fetchpriority="high"
          className="my-face__img"
          width="250"
          height="240"
          src={Profile}
          alt="Edied's Face"
        />
      </div>
    </div>
  );
};
