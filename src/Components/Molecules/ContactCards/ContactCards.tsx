import { contactList } from "@/Data/Contact";

import "./ContactCards.scss";

export const ContactCards = () => {
  return (
    <div className="contact-cards__container">
      {contactList.map(({ name, href, icon }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer">
          <img key={name} src={icon} alt={`${name} icon`} />
        </a>
      ))}
    </div>
  );
};
