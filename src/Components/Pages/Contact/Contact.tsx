import { ROUTE_URLS } from "../../../Domain/Constants/urls";
import { BorderContainer } from "../../Atoms";
import { ContactCards, MyCv } from "../../Molecules";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id={ROUTE_URLS.CONTACT}>
      <BorderContainer isTitle>
        <p>Contact me</p>
      </BorderContainer>
      <ContactCards />
      <MyCv />
    </section>
  );
};

export default Contact;
