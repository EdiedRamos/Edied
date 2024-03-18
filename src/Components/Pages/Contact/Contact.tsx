import { ROUTE_URLS } from "@/Domain/Constants/urls";
import { BorderContainer } from "@/Components/Atoms";
import { ContactCards, MyCv } from "@/Components/Molecules";

import "./Contact.scss";

const Contact = () => {
  return (
    <section id={ROUTE_URLS.CONTACT} className="contact-section">
      <BorderContainer isTitle>
        <h2>Contacto</h2>
      </BorderContainer>
      <ContactCards />
      <MyCv />
    </section>
  );
};

export default Contact;
