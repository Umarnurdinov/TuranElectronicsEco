import adapter from "../../assets/image17.png";
import basket from "../../assets/basket.svg";
import React from "react";
import "./style.scss";
import StarRating from "../starRating";

function AccessoriesCard({ data }) {
  return (
    <>
      <div className="accessories__block">
        <div className="accessories__block__stars">
          <StarRating rating={data.raiting} />
        </div>
        <div className="accessories__block__img">
          <img src={adapter} alt="" />
          <h3 className="tovar__block">
            Адаптер Apple <br /> 5700
          </h3>
          {/* <h3 className='price__tovar__block'>5700</h3> */}
        </div>
        <div className="accessories__block__btn">
          <button className="fast__delivery">Быстрый заказ</button>
          <img className="accessories__block__basket" src={basket} alt="" />
        </div>
      </div>
    </>
  );
}

export default AccessoriesCard;
