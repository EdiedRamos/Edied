import "./Footer.scss";

import { ContactCards } from "../ContactCards/ContactCards";
import { Logo } from "@/Resources/Icons";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer footer__container">
      <img
        width={50}
        height={50}
        className="footer__logo"
        src={Logo}
        alt="EdiedRamos logo"
      />
      <ContactCards />
      <p className="footer__made">{parse(t("footer.made"))}</p>
    </footer>
  );
};
