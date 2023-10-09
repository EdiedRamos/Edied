import { ContactText } from "../../Atoms";
import { ContactCards, MyCv } from "../../Molecules";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <ContactText />
      <ContactCards />
      <MyCv />
    </>
  );
};

export default Contact;
