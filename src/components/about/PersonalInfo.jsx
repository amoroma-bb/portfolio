import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Chuxuan" },
  { meta: "last name", metaInfo: "Quan" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "China" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "New York" },
  { meta: "phone", metaInfo: "+1 917-294-8011" },
  { meta: "Email", metaInfo: "cq2012@nyu.edu" },
  { meta: "Skype", metaInfo: "" },
  { meta: "langages", metaInfo: "Chinese, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
