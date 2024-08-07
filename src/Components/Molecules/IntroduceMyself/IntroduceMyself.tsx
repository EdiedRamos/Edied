import "./IntroduceMyself.scss";

import { MyFace } from "@/Components/Atoms";
import { useTranslation } from "react-i18next";

export const IntroduceMyself = () => {
  const { t } = useTranslation();

  return (
    <div className="introduce-myself container">
      <div className="introduce-myself__text">
        <h1>{t("home.introduce.role")}</h1>
        <p>{t("home.introduce.about")}</p>
      </div>
      <MyFace />
    </div>
  );
};
