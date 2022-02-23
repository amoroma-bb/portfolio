import React from "react";
import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/4.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          Feb 22, 2022 <a href="#">#</a>
        </span>
        <h3 className="title">Title</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>

          </p>
          <p>

          </p>
          <p>

          </p>
          <div className="quotebox">
            <p>
              quote part
            </p>
          </div>
          <p>

          </p>
          <p>

          </p>
        </div>
        {/* End description */}
        <div className="news_share ">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalOne;
