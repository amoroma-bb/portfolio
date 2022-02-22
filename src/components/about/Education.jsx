import React from "react";

const educationContent = [
  {
    year: "2021 - 2023",
    degree: "MASTER DEGREE",
    institute: "New York University",
    details: `Management of Technology, Data Analytics Track`,
  },
  {
    year: "2016 - 2020",
    degree: "BACHELOR DEGREE ",
    institute: "SooChow University",
    details: `New Energy Materials and Devices`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
