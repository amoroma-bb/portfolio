import React from "react";

const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "95",
  },
  {
    name: "Python",
    skillPercent: "95",
  },
  {
    name: "SQL",
    skillPercent: "97",
  },
  {
    name: "R",
    skillPercent: "91",
  },
  {
    name: "JavaScript",
    skillPercent: "84",
  },
  {
    name: "AWS",
    skillPercent: "92",
  },
  {
    name: "MongoDB",
    skillPercent: "88",
  },
  {
    name: "TensorFlow",
    skillPercent: "90",
  },
  {
    name: "Scikit-Learn",
    skillPercent: "93",
  },
  {
    name: "Pandas",
    skillPercent: "96",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
