import React from "react";
import "../brandsFromAmantur/brands.scss";
import dysonbrand from "../../assets/image21.png";
import applebrand from "../../assets/image5.png";
import xiaomi from "../../assets/image7.png";
import samsung from "../../assets/image10.png";
import sonyps from "../../assets/image8.png";
import applemini from "../../assets/applemini.png";
import dysonmini from "../../assets/dysonmini.png";
import playstationmini from "../../assets/playstationmini.png";
import samsungmini from "../../assets/samsungmini.png";
import xiaomimini from "../../assets/xiaomimini.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BrandsContent() {
  return (
    <>
      <div className="brands">
        <div className="container">
          <div className="brands__component">
            <div className="dysonbrand">
              <Link to={"/dysonbrand"}>
                <img className="dysonimg" src={dysonbrand} alt="#" />
                <button className="dysonbtn">Dyson</button>
              </Link>
            </div>
            <div className="apple__block">
              <div className="apple__brand">
                <Link to={"/applebrand"}>
                  <div className="apple__img">
                    <img className="appleimg" src={applebrand} alt="#" />
                    <button className="applebtn">Apple</button>
                  </div>
                </Link>
              </div>
              <div className="xiaomi__brand">
                <Link to={"/xiaomibrand"}>
                  <div className="xiaomi__img">
                    <img className="xiaomiimg" src={xiaomi} alt="#" />
                    <button className="xiaomibtn">Xiaomi</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="samsung__block">
              <div className="samsung__brand">
                <Link to={"/samsungbrand"}>
                  <div className="samsung__img">
                    <img className="samsungimg" src={samsung} alt="#" />
                    <button className="samsungbtn">Samsung</button>
                  </div>
                </Link>
              </div>
              <div className="sony__brand">
                <Link to={"/sonybrand"}>
                  <div className="sony__img">
                    <img className="sonyimg" src={sonyps} alt="#" />
                    <button className="sonybtn">Sony Playstation</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brandsForAdaptive__content">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="appleForAdaptive">
              <img src={applemini} alt="#" className="applemini" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dysonForAdaptive">
              <img src={dysonmini} alt="#" className="dysonmini" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sonyForAdaptive">
              <img src={playstationmini} alt="#" className="sonymini" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="samsungForAdaptive">
              <img src={samsungmini} alt="#" className="samsungmini" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xiaomiForAdaptive">
              <img src={xiaomimini} alt="#" className="xiaomimini" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default BrandsContent;
