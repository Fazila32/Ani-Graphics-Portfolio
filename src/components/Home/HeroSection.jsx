import React from "react";
import "../../styling/basics.css";
import "../../styling/HeroSection.css";
import Bg from "../../images/shinybg.jpg";
import Ppt from "../../images/pp.jpeg";
import Photo from "../../images/photo.jpeg";
import Web from "../../images/web.jpeg";
import Rast from "../../images/rast.jpeg";
import Resume from "./cv.pdf";

function HeroSection() {
  return (
    <div className="hero">
      <div className="mask">
        <div class="wrapper">
          <img className="bgImg" src={Bg} alt="" />
        </div>
      </div>

      <div class="headerContent">
        <div className="Left">
          <h5>Hello This is Me!</h5>
          <h1>anila adnan</h1>
          <h3>expert in graphic design, UI/UX design & video animation.</h3>
          <div className="ButtonsSet">
            <a
              class="button button_still"
              href={Resume}
              download
              title="Ani Graphics"
            >
              Download Resume
            </a>
            <a
              class="button button_slide"
              href="https://www.fiverr.com/anilaadnan"
              target="blank"
              title="Ani Graphics"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="Right">
          <div className="SlideContainer">
            <div className="slider">
              <img src={Ppt} alt="" />
              <img src={Photo} alt="" />
              <img src={Web} alt="" />
              <img src={Rast} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default HeroSection;
