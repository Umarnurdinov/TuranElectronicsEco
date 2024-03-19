import React from "react";
import "./style.scss";
import apple from "../../assets/Apple.png";
import dyson from "../../assets/Dyson.png";
import playstation from "../../assets/Playstation.png";
import samsung from "../../assets/Samsung.png";
import xiaomi from "../../assets/Xiaomi.png";
import { Link } from "react-router-dom";

function Brands() {
  return (
    <>
      <div className="footer__brands">
        <div className="container">
          <div className="brands__title">
            <p className="brands__text">Бренды</p>
          </div>
          <div className="brands__img">
            <div className="imgApple">
              <Link to={"/applePage"}>
                <img className="apple" src={apple} alt="#" />
              </Link>
            </div>
            <div className="imgDyson">
              <Link to={"/dysonPage"}>
                <img className="dyson" src={dyson} alt="#" />
              </Link>
            </div>
            <div className="imgPlaystation">
              <Link to={"/sonyPage"}>
                <img className="playstation" src={playstation} alt="#" />
              </Link>
            </div>
            <div className="imgSamsung">
              <Link to={"/samsungPage"}>
                <img className="samsung" src={samsung} alt="#" />
              </Link>
            </div>
            <div className="imgXiaomi">
              <Link to={"/xiaomiPage"}>
                <img className="xiaomi" src={xiaomi} alt="#" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
