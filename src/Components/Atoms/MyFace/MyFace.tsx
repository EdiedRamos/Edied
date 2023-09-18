import { Profile } from "../../../Resources/Profile";

import "./MyFace.scss";

export const MyFace = () => {
  return (
    <div id="my-face-container">
      <img
        id="my-face"
        className="border-decoration"
        src={Profile}
        alt="Edied's Face"
      />
    </div>
  );
};
