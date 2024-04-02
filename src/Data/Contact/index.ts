import type { IconType } from "react-icons";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

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
  {
    name: "cv",
    href: "https://drive.google.com/file/d/1zy75AUfLWtG__QrRs3OoCqiKmsi8nKLs/view?usp=sharing",
    Icon: TbFileCv,
  },
];
