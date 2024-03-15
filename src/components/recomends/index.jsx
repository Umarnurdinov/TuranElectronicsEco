import React from "react";
import watch from "../../assets/watch.png";
import filledStar from "../../assets/fullStar.svg";
import Star from "../../assets/emptyStar.svg";
import heart from "../../assets/heart.png";
import basket from "../../assets/basket.svg";
import checkmark from "../../assets/checkmark.svg";
import basketForAdaptive from "../../assets/basketForAdaptive.svg";
import "./style.scss";

function Recomends() {
  return (
    <div className="card">
      <div className="reviewStar">
        <p className="new">Новое</p>
        <div className="stars">
          <img src={filledStar} alt="#" />
          <img src={filledStar} alt="#" />
          <img src={Star} alt="#" />
          <img src={Star} alt="#" />
          <img src={Star} alt="#" />
        </div>
      </div>
      <div className="productAndLike">
        <img className="watchImg" src={watch} alt="#" />
        <img className="heartImg" src={heart} alt="#" />
      </div>
      <div className="adaptive">
        <div className="adaptiveForCheckmark">
          <img className="checkmark" src={checkmark} alt="#" />
          <span className="checkmark__text">В наличии</span>
        </div>
        <div className="adaptiveForHeart">
          <img className="heartImgForAdaptive" src={heart} alt="#" />
        </div>
      </div>
      <div className="newPriceAndOldPrice">
        <p className="newPrice">1 399 сом</p>
        <p className="oldPrice">3 099 сом</p>
      </div>
      <div className="saleAndPercent">
        <p className="purcent">-5%</p>
        <p className="econom"> экономия 5 285 сом</p>
      </div>
      <div className="nameAndCharacter">
        <p className="nameProduct">Xiaomi MiBand 5 (Replica)</p>
        <p className="character">
          Mi Band 5 (реплика)Bluetooth <br /> 4.0.Тип экрана: TFTРабочий
          <br />
          режим: сенсорная кнопка......
        </p>
      </div>
      <div className="buttonAndBasket">
        <button className="order">Быстрый заказ</button>
        <img src={basket} alt="#" />
      </div>
      <div className="colorProduct">
        <p className="colorText">Цвет</p>
        <div className="colorBlack"></div>
        <p className="colorGold"></p>
        <p className="colorWhite"></p>
      </div>
      <div className="card__footer">
        <p className="card__footer__text">100 415 сом</p>
        <img className="basketForAdaptive" src={basketForAdaptive} alt="#" />
      </div>
    </div>
  );
}

export default Recomends;
