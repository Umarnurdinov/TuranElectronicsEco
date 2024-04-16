import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function BrandsContent() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
  const brandsSelec = useSelector((state) => state.data.brands);
  let dispatch = useDispatch();

  // useEffect(() => {
  //   axios("https://turaneletronic.onrender.com/brands/").then((res) => {
  //     dispatch({ type: "BrandsInfo", payload: res.data });
  //   });
  // }, []);

  return (
    <>
      <div className="brands">
        <div className="container">
          <SkeletonTheme baseColor="#c6d7eb" highlightColor="#e3edf7">
            <div className="brands__component">
              {/* {brandsSelec.map((el, idx) => ( */}
              <>
                {/* <div className="dysonbrand">
                  <Link to={`/${el.name}Page`}>
                  {console.log(el.brand_logo)}
                  <img className="dysonimg" src={el.image} alt="#" />
                  <button key={el.id} className="dysonbtn">
                  {el.name}
                  </button>
                  </Link>
                </div> */}
                {loading ? (
                  <Skeleton
                    count={1}
                    width={"399px"}
                    height={"647px"}
                    borderRadius={"24px"}
                  />
                ) : (
                  <div data-aos="zoom-in" className="dysonbrand">
                    <Link to={`/dysonPage`}>
                      <img className="dysonimg" src={dysonbrand} alt="#" />
                      <button className="dysonbtn">Dyson</button>
                    </Link>
                  </div>
                )}

                {loading ? (
                  <Skeleton
                    count={2}
                    width={"399px"}
                    height={"315px"}
                    borderRadius={"16px"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  />
                ) : (
                  <div data-aos="zoom-in" className="apple__block">
                    <div className="apple__brand">
                      <Link to={"/applePage"}>
                        <div className="apple__img">
                          <img className="appleimg" src={applebrand} alt="#" />
                          <button className="applebtn">Apple</button>
                        </div>
                      </Link>
                    </div>
                    <div className="xiaomi__brand">
                      <Link to={"/xiaomiPage"}>
                        <div className="xiaomi__img">
                          <img className="xiaomiimg" src={xiaomi} alt="#" />
                          <button className="xiaomibtn">Xiaomi</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
                {loading ? (
                  <Skeleton
                    count={2}
                    width={"399px"}
                    height={"315px"}
                    borderRadius={"16px"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  />
                ) : (
                  <div data-aos="zoom-in" className="samsung__block">
                    <div className="samsung__brand">
                      <Link to={"/samsungPage"}>
                        <div className="samsung__img">
                          <img className="samsungimg" src={samsung} alt="#" />
                          <button className="samsungbtn">Samsung</button>
                        </div>
                      </Link>
                    </div>
                    <div className="sony__brand">
                      <Link to={"/sonyPage"}>
                        <div className="sony__img">
                          <img className="sonyimg" src={sonyps} alt="#" />
                          <button className="sonybtn">Sony</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </>
              {/* ))} */}
            </div>
          </SkeletonTheme>
        </div>
      </div>
      <div className="brandsForAdaptive__content">
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <Link to={"/applePage"}>
              <div data-aos="flip-left" className="appleForAdaptive">
                <img src={applemini} alt="#" className="applemini" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/dysonPage"}>
              <div data-aos="flip-left" className="dysonForAdaptive">
                <img src={dysonmini} alt="#" className="dysonmini" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/sonyPage"}>
              <div data-aos="flip-left" className="sonyForAdaptive">
                <img src={playstationmini} alt="#" className="sonymini" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link data-aos="flip-left" to={"/samsungPage"}>
              <div className="samsungForAdaptive">
                <img src={samsungmini} alt="#" className="samsungmini" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link data-aos="flip-left" to={"/xiaomiPage"}>
              <div className="xiaomiForAdaptive">
                <img src={xiaomimini} alt="#" className="xiaomimini" />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default BrandsContent;
