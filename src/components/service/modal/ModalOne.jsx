import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/s1.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Data Analytics</h3>
        <p>
        As the process of analyzing raw data to find trends and answer questions, 
        the definition of data analytics captures its broad scope of the field. 
        However, it includes many techniques with many different goals.

        </p>
        <p>
        The data analytics process has some components that can help a variety of initiatives. 
        By combining these components, a successful data analytics initiative will provide a clear picture of where you are, 
        where you have been and where you should go.
        </p>
        <h3>What the skills I have?</h3>
        <p>
          Technical Skills
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Data Visualization</p>
            </li>
            <li>
              <p>Data Cleaning</p>
            </li>
            <li>
              <p>R</p>
            </li>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>SQL and NoSQL</p>
            </li>
            <li>
              <p>Microsoft Excel</p>
            </li>
          </ul>
        </div>
        {/* End list */}
      </div>
    </div>
  );
};

export default ModalOne;
