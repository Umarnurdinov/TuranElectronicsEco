import React, { useEffect, useState } from "react";
import watch from "../../assets/watch.png";
import filledStar from "../../assets/fullStar.svg";
import Star from "../../assets/emptyStar.svg";
import like from "../../assets/likeHeart.png";
import likeFull from "../../assets/likeFull.png";
import basket from "../../assets/basket.svg";
import checkmark from "../../assets/checkmark.svg";
import basketForAdaptive from "../../assets/basketForAdaptive.svg";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StarRating from "../starRating";

function Recomends({ Newdata }) {
  const [date, setDate] = useState(true);
  const [colors, setColors] = useState([]);
  const [counter, setCounter] = useState(0);

  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(() => {
    setLiked(Newdata.favorite);
    const currentDate = new Date().getTime();

    const millysecondDiff = currentDate - Newdata.date;

    const daysMinus = Math.floor(millysecondDiff / 1000 / 60 / 60 / 24);

    if (daysMinus > 4) {
      setDate(false);
    }
  }, []);
  useEffect(() => {
    setColors(Newdata.colors);
  }, []);

  function favoritePage() {
    nav(`/about/product/${id}`);
  }
  function cardHandler(id) {
    nav(`/about/product/${id}`);
  }
  function orderHarry(e) {
    e.stopPropagation();
    dispatch({ type: "ADDPRODUCT", payload: Newdata });
    nav(`/basket`);
    dispatch({ type: "AMOUNTPLUS", payload: Newdata.price });
  }
  function basketHandler(e) {
    e.stopPropagation();
    setCounter(counter + 1);
    dispatch({ type: "ADDPRODUCT", payload: Newdata });
    dispatch({ type: "AMOUNTPLUS", payload: Newdata.price });
  }
  function likeHandler(e) {
    e.stopPropagation();
    setLiked(!liked);
    Newdata.favorite = !Newdata.favorite;
    dispatch({ type: "LIKEPRODUCT", payload: Newdata });
  }
  return (
    <div className="card" onClick={() => cardHandler(Newdata.id)}>
      <div className="reviewStar">
        <p></p>
        <div className="stars">
          <StarRating rating={Newdata.raiting} />
        </div>
      </div>
      <div className="productAndLike">
        <img className="watchImg" src={watch} alt="#" />
        <img
          onClick={(e) => likeHandler(e)}
          className="heartImg"
          src={liked ? likeFull : like}
          alt="#"
        />
      </div>
      <div className="adaptive">
        <div className="adaptiveForCheckmark">
          {Newdata.inStock ? (
            <>
              <img src={checkmark} alt="" className="checkmark" />
              <span className="checkmark__text">В наличии</span>
            </>
          ) : null}
        </div>
        <div className="adaptiveForHeart">
          <img className="heartImgForAdaptive" src={like} alt="#" />
        </div>
      </div>
      <div className="newPriceAndOldPrice">
        <p className="newPrice">1 399 сом</p>
        <p className="oldPrice">{`${Newdata.price} сом`}</p>
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
        <button onClick={(e) => orderHarry(e)} className="order">
          Быстрый заказ
        </button>
        <img onClick={(e) => basketHandler(e)} src={basket} alt="#" />
      </div>
      <div className="colorProduct">
        <p className="colorText">Цвет</p>
        {colors.map((color, index) => (
          <div
            key={index}
            className="card__content__black color "
            style={{ background: color }}
          ></div>
        ))}
      </div>
      <div className="card__footer">
        <p className="card__footer__text">{`${Newdata.price} сом`}</p>
        <img
          onClick={(e) => basketHandler(e)}
          className="basketForAdaptive"
          src={basketForAdaptive}
          alt="#"
        />
      </div>
    </div>
  );
}

export default Recomends;
