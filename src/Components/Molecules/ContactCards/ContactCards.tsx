import { contactList } from "@/Data/Contact";
import { Icon } from "@/Components/Atoms";

import "./ContactCards.scss";

export const ContactCards = () => {
  return (
    <div className="skill-cards-container">
      {contactList.map(({ name, href, icon }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer">
          <Icon spin key={name} src={icon} alt={name} />
        </a>
      ))}
    </div>
  );
};
