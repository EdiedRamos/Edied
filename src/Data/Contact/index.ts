import { FaGithub, FaLinkedin } from "react-icons/fa";

import type { IconType } from "react-icons";
import { SiGmail } from "react-icons/si";

type ContactT = {
  name: string;
  href: string;
  Icon: IconType;
};

export const contactList: ContactT[] = [
  {
    name: "github",
    href: "https://github.com/EdiedRamos",
    Icon: FaGithub,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/ediedramos/",
    Icon: FaLinkedin,
  },
  {
    name: "email",
    href: "mailto:edieisa22@gmail.com",
    Icon: SiGmail,
  },
];

export const interCv = {
  es: "https://drive.google.com/file/d/1UdVFICqKSjhcnaaGtNk-572oSqqdw7QW/view?usp=sharing",
  en: "https://drive.google.com/file/d/1zrjBCW22USWqzawV2k0c4IDXNrtaDi9N/view?usp=sharing",
};
