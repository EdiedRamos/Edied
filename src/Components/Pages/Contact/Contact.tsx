import { SectionSetup, Title } from "@/Components/Atoms";
import { ContactCards } from "@/Components/Molecules";
import { ROUTE_URLS } from "@/Domain/Constants/urls";

import "./Contact.scss";
import { ContactText } from "@/Data/Text";

const Contact = () => {
  return (
    <SectionSetup className="contact-section" id={ROUTE_URLS.CONTACT}>
      <div className="container">
        <article>
          <Title>{ContactText.title}</Title>
          <div style={{ marginBottom: "4rem" }}>
            <ContactCards />
          </div>
        </article>
      </div>
    </SectionSetup>
  );
};

export default Contact;
