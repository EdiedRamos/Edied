import { MyFace } from "@/Components/Atoms";
import { HomeText } from "@/Data/Text";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <div className="introduce-myself container">
      <div className="introduce-myself__text">
        <h1>
          {HomeText.title.first} <span>{HomeText.title.second}</span>
        </h1>
        <div className="introduce-myself__separator" />
        <p>{HomeText.introduce}</p>
      </div>
      <MyFace />
    </div>
  );
};
