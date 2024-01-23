import { ROUTE_URLS } from "../../../Domain/Constants/urls";
import { ContactText } from "../../Atoms";
import { ContactCards, MyCv } from "../../Molecules";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id={ROUTE_URLS.CONTACT}>
      <ContactText />
      <ContactCards />
      <MyCv />
    </section>
  );
};

export default Contact;
