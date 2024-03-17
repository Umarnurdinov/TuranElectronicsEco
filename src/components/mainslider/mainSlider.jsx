import React from "react";
import "./mainSlider.scss";
import copter from "../../assets/image39.png";
import Dysonslider from "../../assets/image40.png";
import Slider from "react-slick";
import xiaomi from "../../assets/image41.png";
import { ColorFactory } from "antd/es/color-picker/color";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const MainSlider = () => {
  return (
    <div className="mainSlider">
      <div className="container">
        {/* <div className="mainSlider"> */}
        <div className="photosslider">
          <Slider {...settings}>
            {/* <div className="photos`slider"> */}
            <div className="copterMain">
              <img src={copter} alt="#" />
            </div>
            <div className="dysonslider">
              <img src={Dysonslider} alt="#" />
            </div>
            <div className="xiaomislider">
              <img src={xiaomi} alt="#" />
            </div>
            {/* </div> */}
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MainSlider;
