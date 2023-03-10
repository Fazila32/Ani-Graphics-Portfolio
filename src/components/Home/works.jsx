import React from "react";
import "../../styling/works.css";
import Upwork from "../../images/upwork.png";
import Facebook from "../../images/fb.png";
import Fiverr from "../../images/fiverr.png";
import Linkedin from "../../images/linkin.png";

const Works = () => {
  // transition
  return (
    <div className="container">
      <h6>Work</h6>
      <h2>Works with these clients and brands</h2>
      <div className="row">
        <div className="col-lg-7 col-md-8 col-sm-10 w-left">
          <p
            className="w-left-para"
            style={{ textAlign: "left", marginLeft: "10px" }}
          >
            My passion is to deliver a Great Design and Respect the opinion of
            My client. So if you are seeking a professional graphic designer or
            video animator with a quick turnover, then you are at the right
            place to assign your project with full trust and you will be
            satisfied with the result.
          </p>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-8 w-right text-center">
          <div>
            <img src={Upwork} alt="" />
          </div>

          <div className="worksImg">
            <img src={Fiverr} alt="" />
            <img src={Linkedin} alt="" />
          </div>
          <div>
            <img src={Facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
