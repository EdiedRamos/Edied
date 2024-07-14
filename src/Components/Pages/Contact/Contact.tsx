import "./Contact.scss";

import { SectionSetup, Title } from "@/Components/Atoms";

import { ContactCards } from "@/Components/Molecules";
import { ROUTE_URLS } from "@/Domain/Constants/urls";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionSetup className="contact-section" id={ROUTE_URLS.CONTACT}>
      <div className="container">
        <article>
          <Title>{t("contact.title")}</Title>
          <div style={{ marginBottom: "4rem" }}>
            <ContactCards />
          </div>
        </article>
      </div>
    </SectionSetup>
  );
};

export default Contact;
