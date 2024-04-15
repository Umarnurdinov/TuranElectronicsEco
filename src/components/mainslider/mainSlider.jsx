import React, { useEffect, useState } from "react";
import "./mainSlider.scss";
import copter from "../../assets/image39.png";
import Dysonslider from "../../assets/image40.png";
import Slider from "react-slick";
import xiaomi from "../../assets/image41.png";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function MainSlider(props) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    axios("https://turaneletronic.onrender.com/carousel/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="mainSlider">
      <div className="container">
        <SkeletonTheme baseColor="#c6d7eb" highlightColor="#ebf2f9">
          {loading ? (
            <Skeleton
              count={1}
              width={"1249px"}
              height={"282px"}
              borderRadius={"20px"}
            />
          ) : (
            <div data-aos="zoom-in-up" className="photosslider">
              <Slider {...settings}>
                <div className="copterMain">
                  <img src={copter} alt="#" />
                </div>
                <div className="dysonslider">
                  <img src={Dysonslider || <Skeleton />} alt="#" />
                </div>
                <div className="xiaomislider">
                  <img src={xiaomi || <Skeleton />} alt="#" />
                </div>
              </Slider>
            </div>
          )}
        </SkeletonTheme>
      </div>
    </div>
  );
}

export default MainSlider;
