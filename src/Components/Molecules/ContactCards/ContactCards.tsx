import { contactList } from "@/Data/Contact";

import "./ContactCards.scss";

export const ContactCards = () => {
  return (
    <div className="contact-cards__container">
      {contactList.map(({ name, href, Icon }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer">
          <Icon aria-label={`${name} icon`} className="contact-cards__icon" />
        </a>
      ))}
    </div>
  );
};
