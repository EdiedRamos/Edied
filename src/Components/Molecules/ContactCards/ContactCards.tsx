import { contactList } from "@/Data/Contact";
import { Icon } from "@/Components/Atoms";

export const ContactCards = () => {
  return (
    <div className="skillCards-container">
      {contactList.map(({ name, href, icon }) => (
        <a key={name} href={href} target="_blank" rel="noreferrer">
          <Icon spin key={name} src={icon} alt={name} />
        </a>
      ))}
    </div>
  );
};
