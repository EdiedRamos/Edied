import { Profile } from "../../../Resources/Profile";

import "./MyFace.scss";

export const MyFace = () => {
  return (
    <div className="my-face-container">
      <img width="250" height="250" src={Profile} alt="Edied's Face" />
    </div>
  );
};
