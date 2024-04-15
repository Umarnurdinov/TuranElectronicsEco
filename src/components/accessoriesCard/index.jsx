import adapter from "../../assets/image17.png";
import basket from "../../assets/basket.svg";
import React, { useEffect, useState } from "react";
import "./style.scss";
import StarRating from "../starRating";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function AccessoriesCard({ data }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <SkeletonTheme baseColor="#c6d7eb" highlightColor="#e3edf7">
        {loading ? (
          <Skeleton
            count={1}
            width={"240px"}
            height={"278px"}
            borderRadius={"24px"}
          />
        ) : (
          <div data-aos="zoom-in" className="accessories__block">
            <div className="accessories__block__stars">
              <StarRating rating={data.raiting} />
            </div>
            <div className="accessories__block__img">
              <img src={adapter} alt="" />
              <h3 className="tovar__block">Адаптер Apple</h3>
              <h3 className="price__tovar__block">5700 Сом</h3>
            </div>
            <div className="accessories__block__btn">
              <button className="fast__delivery">Быстрый заказ</button>
              <h3 className="price__tovar__blockAdaptive">5700 Сом</h3>
              <img className="accessories__block__basket" src={basket} alt="" />
            </div>
          </div>
        )}
      </SkeletonTheme>
    </>
  );
}

export default AccessoriesCard;
