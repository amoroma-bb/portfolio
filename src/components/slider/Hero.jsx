import React from "react";
import Social from "../Social";

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: "2",
  name: "Chuxuan Quan",
  description: `I'm a master student at NYU, marjoring in Management of Technology. I have passion in data analyst, software development, machine learning, deep learning and cloud technology.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`img/hero/3`}
            srcSet={`img/hero/4.png`}
            alt="hero image"
          />
        </div>
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {heroContent.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <a href="img/Chuxuan Quan_resume.pdf" download className="color">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
