import { Cv, Email, Github, Linkedin } from "@/Resources/Icons";

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
  {
    name: "cv",
    href: "https://drive.google.com/file/d/1zy75AUfLWtG__QrRs3OoCqiKmsi8nKLs/view?usp=sharing",
    icon: Cv,
  },
];
