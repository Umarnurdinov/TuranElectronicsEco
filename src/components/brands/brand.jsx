import React, { useEffect, useState } from "react";
import "./style.scss";
import apple from "../../assets/Apple.png";
import dyson from "../../assets/Dyson.png";
import playstation from "../../assets/Playstation.png";
import samsung from "../../assets/Samsung.png";
import xiaomi from "../../assets/Xiaomi.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Brands() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="footer__brands">
        <div className="container">
          <SkeletonTheme baseColor="#c6d7eb" highlightColor="#ebf2f9">
            <div className="brands__title">
              <p className="brands__text">Бренды</p>
            </div>
            <div className="brands__img">
              {loading ? (
                <Skeleton
                  count={1}
                  width={"233px"}
                  height={"106px"}
                  borderRadius={"24px"}
                />
              ) : (
                <div
                  data-aos-duration="1000"
                  data-aos="flip-left"
                  className="imgApple"
                >
                  <Link to={"/applePage"}>
                    <img className="apple" src={apple} alt="#" />
                  </Link>
                </div>
              )}
              {loading ? (
                <Skeleton
                  count={1}
                  width={"233px"}
                  height={"106px"}
                  borderRadius={"24px"}
                />
              ) : (
                <div
                  data-aos-duration="1200"
                  data-aos="flip-left"
                  className="imgDyson"
                >
                  <Link to={"/dysonPage"}>
                    <img className="dyson" src={dyson} alt="#" />
                  </Link>
                </div>
              )}
              {loading ? (
                <Skeleton
                  count={1}
                  width={"233px"}
                  height={"106px"}
                  borderRadius={"24px"}
                />
              ) : (
                <div
                  data-aos-duration="1400"
                  data-aos="flip-left"
                  className="imgPlaystation"
                >
                  <Link to={"/sonyPage"}>
                    <img className="playstation" src={playstation} alt="#" />
                  </Link>
                </div>
              )}
              {loading ? (
                <Skeleton
                  count={1}
                  width={"233px"}
                  height={"106px"}
                  borderRadius={"24px"}
                />
              ) : (
                <div
                  data-aos-duration="1600"
                  data-aos="flip-left"
                  className="imgSamsung"
                >
                  <Link to={"/samsungPage"}>
                    <img className="samsung" src={samsung} alt="#" />
                  </Link>
                </div>
              )}
              {loading ? (
                <Skeleton
                  count={1}
                  width={"233px"}
                  height={"106px"}
                  borderRadius={"24px"}
                />
              ) : (
                <div
                  data-aos="flip-left"
                  data-aos-duration="1800"
                  className="imgXiaomi"
                >
                  <Link to={"/xiaomiPage"}>
                    <img className="xiaomi" src={xiaomi} alt="#" />
                  </Link>
                </div>
              )}
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </>
  );
}

export default Brands;
