import React from "react";

const experienceContent = [
  {
    year: "   Oct. 2020 - May 2021",
    position: "Project Management Intern",
    compnayName: "Shanghai Liangling M&E",
    details: `Performed online research and created 20+ business & technology documents for the BASF Golden Island project.
    Co-ordinated with 10+ team members & reported the consolidated project progress & status at BASF weekly meeting.`,
  },
  {
    year: "May 2020 - Sept. 2020",
    position: " Data Analyst Intern",
    compnayName: "Changzhou Sendo",
    details: `Overhauled the calculation process for water quality analysis on 10+ metrics collected for 800+ records from the water treatment plant with Python, optimized the calculation processing time by 50%.
    Developed Excel template for automatic data input and SQL database to store the historically collected data for analysis.
    Built a supervised machine learning model to optimize the selection of the water treatment chemical, decreasing 5% cost.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
