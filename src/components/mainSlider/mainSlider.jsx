import React from 'react';
import "./mainSlider.scss"
import copter from "../../assets/image 39.png"
import Dysonslider from "../../assets/image 40.png"
import Slider from "react-slick";
import xiaomi from "../../assets/image 41.png"
import { ColorFactory } from 'antd/es/color-picker/color';


const mainSlider = () => {
    let settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div id='mainSlider'>
            <div className="container">
                <div className="mainSlider">
                    <div className="photosslider">
                <Slider {...settings}>
                    {/* <div className="photosslider"> */}
      <div className='copterMain'>
        <h1><img src={copter} alt="" /></h1>
      </div>
      <div className='dysonslider'>
        <img src={Dysonslider} alt="" />
      </div>
      <div className="xiaomislider">
        <img src={xiaomi} alt="" />
      </div>
      {/* </div> */}
    </Slider>
                </div>
                </div>
            </div>
        </div>
    );
};

export default mainSlider;