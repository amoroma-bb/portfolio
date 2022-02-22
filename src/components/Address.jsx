import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/phone.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Phone</h3>
            <ul>
              <li>
                <a href="Tel: +1 917 294 8011">+1 917 294 8011</a>
              </li>
              <li>
                <a href="Tel: +86 183 0612 3893">+86 183 0612 3893</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/email.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:cq2012@nyu.edu">cq2012@nyu.edu</a>
              </li>
              <li>
                <a href="mailto:qcx60990@gmail.com">qcx60990@gmail.com</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/location.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Address</h3>
            <ul>
              <li>
                <p>
                  4610 Crane St.,
                  <br />
                  Long Island City, NY
                </p>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
