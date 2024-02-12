import { Profile } from "../../../Resources/Profile";

import "./MyFace.scss";

export const MyFace = () => {
  return (
    <div id="my-face-container">
      <img
        width="250"
        height="240"
        id="my-face"
        src={Profile}
        alt="Edied's Face"
      />
    </div>
  );
};
