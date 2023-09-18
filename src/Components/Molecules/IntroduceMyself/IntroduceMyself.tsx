import { MyFace, MyName } from "../../Atoms";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <div className="container border-decoration">
      <MyFace />
      <div className="introduce-myself introduce-myself-config">
        <div id="introcue-myself-greeting">Hi there! I'm</div>
        <MyName />
      </div>
      <p className="introduce-myself-config">
        Frontend Developer looking for big challenges.
      </p>
      <p className="introduce-myself-config">Sometimes I do Backend 🤓.</p>
    </div>
  );
};
