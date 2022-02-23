import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://react-e-commerce-project-chuxuan.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/p1.png"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="product"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>E-Commerce</h5>
                      <span>Web App</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://githubusersearch-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/p2.png"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="dribbble"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Github User Search</h5>
                      <span>Web App</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://github.com/amoroma-bb/SkimLit-NLP-TensorFlow"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/p3.png"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="facebook"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>SkimLit</h5>
                      <span>NLP</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://github.com/amoroma-bb/IMDb_Scrap_EDA_DV_ML"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/p4.png"
                    data-tip
                    data-for="IMDb"
                    alt="Data Analytics"
                  />
                  <ReactTooltip
                    id="youtube"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Youtube Shot</h5>
                      <span>Youtube</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://github.com/amoroma-bb/timeseries_BTC/blob/main/Time_series_tensorflow.ipynb"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/p5.png"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="web"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>BTC Predict</h5>
                      <span>Time Series</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
