import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalOne from "./Modal/ModalOne";
import ModalTwo from "./Modal/ModalTwo";
import ModalThree from "./Modal/ModalThree";
import ModalFour from "./Modal/ModalFour";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

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
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_inner my_carousel">
        <ul>
          <Slider {...settings}>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="image" onClick={toggleModalOne}>
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
                    April 07,2021 <a href="#">Design</a>
                  </span>
                  <h3 className="title" onClick={toggleModalOne}>
                    Forzo Immobile
                  </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog One */}

            {/* End single blog Two */}

            {/* End single blog Three */}

            {/* End single blog Four */}
          </Slider>
        </ul>

        {/* Start Modal One */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner">
              <ModalOne />
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End modal One */}
      </div>
    </>
  );
};

export default Blog;
