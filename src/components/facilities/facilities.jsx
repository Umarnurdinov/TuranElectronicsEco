import React from "react";
import "./facilities.scss";
import { Link } from "react-router-dom";
import car from "../../assets/Vector.png";
import tools from "../../assets/toools.png";
import check from "../../assets/check.png";
import procent from "../../assets/ph_percent-fill.png";

const Facilities = () => {
  return (
    <div id="facilities">
      <div className="container">
        <div className="facilities">
          <div className="factilities__nav">
            <div className="factilities__navs">
              <Link to={"/delivery"} className="delivery__nav">
                <button className="carButton">
                  <img className="carimg" src={car} />
                  <p className="carSpan">Удобная Доставка</p>
                </button>
              </Link>
              <Link to={"/service"} className="service__nav">
                <button className="carButton">
                  <img className="toolsimg" src={tools} />
                  <p>Быстросервис</p>
                </button>
              </Link>
              <Link to={"/guarantee"} className="guarantee__nav">
                <button className="carButton">
                  <img className="guaranteeimg" src={check} />
                  <p>Гарантия лучшей цены</p>
                </button>
              </Link>
              <Link to={"/credit"} className="credit__nav">
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
