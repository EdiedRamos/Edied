import { Github, Linkedin, Email } from "@/Resources/Icons";

type ContactT = {
  name: string;
  href: string;
  icon: string;
};

export const contactList: ContactT[] = [
  { name: "github", href: "https://github.com/EdiedRamos", icon: Github },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/ediedramos/",
    icon: Linkedin,
  },
  { name: "email", href: "mailto:edieisa22@gmail.com", icon: Email },
];
