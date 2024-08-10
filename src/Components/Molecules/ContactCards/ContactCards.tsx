import "./ContactCards.scss";

import { contactList } from "@/Data/Contact";

export const ContactCards = () => {
  return (
    <div className="contact-cards__container">
      {contactList.map(({ name, href, Icon }) => {
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={name}
          >
            <Icon aria-label={`${name} icon`} className="contact-cards__icon" />
          </a>
        );
      })}
    </div>
  );
};
