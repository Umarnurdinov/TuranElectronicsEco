import React, { useEffect } from "react";
import "./facilities.scss";
import { Link } from "react-router-dom";
import car from "../../assets/car.svg";
import tools from "../../assets/toools.svg";
import check from "../../assets/cheked.svg";
import procent from "../../assets/percent.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div id="facilities">
      <div className="container">
        <div className="facilities">
          <div className="factilities__nav">
            <div className="factilities__navs">
              <Link
                data-aos="fade-down"
                data-aos-duration="1000"
                className="delivery__nav"
              >
                <button className="carButton">
                  <img className="carimg" src={car} />
                  <p className="carSpan">Удобная Доставка</p>
                </button>
              </Link>
              <Link
                data-aos="fade-down"
                data-aos-duration="1300"
                className="service__nav"
              >
                <button className="carButton">
                  <img className="toolsimg" src={tools} />
                  <p>Быстросервис</p>
                </button>
              </Link>
              <Link
                data-aos="fade-down"
                data-aos-duration="1600"
                className="guarantee__nav"
              >
                <button className="carButton">
                  <img className="guaranteeimg" src={check} />
                  <p>Гарантия лучшей цены</p>
                </button>
              </Link>
              <Link
                data-aos="fade-down"
                data-aos-duration="1900"
                className="credit__nav"
              >
                <button className="carButton">
                  <img className="creditimg" src={procent} />
                  <p>Рассрочка и кредит</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
