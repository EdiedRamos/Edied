import "./IntroduceMyself.scss";

import { MyFace } from "@/Components/Atoms";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

export const IntroduceMyself = () => {
  const { t } = useTranslation();

  return (
    <div className="introduce-myself container">
      <div className="introduce-myself__text">
        <h1>{t("home.introduce.role")}</h1>
        <p>{parse(t("home.introduce.about"))}</p>
      </div>
      <MyFace />
    </div>
  );
};
