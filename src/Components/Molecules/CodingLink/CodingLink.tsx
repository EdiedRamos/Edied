import "./CodingLink.scss";

import { BaseLink } from "@/Components/Atoms";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CODING_INFO = [
  {
    id: "1",
    platform: "leetcode",
    link: "https://leetcode.com/u/EdiedRamos/",
    icon: SiLeetcode,
  },
  {
    id: "1",
    platform: "hackerrank",
    link: "https://www.hackerrank.com/profile/EdiedRamos",
    icon: FaHackerrank,
  },
];

export const CodingLink = () => {
  return (
    <div className="coding-link coding-link__container">
      {CODING_INFO.map((info) => (
        <BaseLink href={info.link} ariaLabel={`my ${info.platform} profile`}>
          <info.icon className="coding-link__icon" />
        </BaseLink>
      ))}
    </div>
  );
};
