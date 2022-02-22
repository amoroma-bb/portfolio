import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiCode
} from "react-icons/fi";


const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/amoroma-bb",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/chuxuan-quan/",
  },
  {
    iconName: <FiCode />,
    link: "https://leetcode.com/qcx60990/"
  }
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
