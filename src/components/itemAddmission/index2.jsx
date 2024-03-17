// import React from 'react'

// function ItemAddmission() {
//   return (
//     <div>ItemAddmission</div>
//   )
// }

// export default ItemAddmission
import React, { useEffect, useState } from "react";
import "./style.scss";
import product from "../../assets/phone.png";
import check from "../../assets/check.png";
import like from "../../assets/likeHeart.png";
import basket from "../../assets/basket.png";
import StarRating from "../starRating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import likeFull from "../../assets/likeFull.png";

function ItemAddmission({ data }) {
  console.log(data);
  const [date, setDate] = useState(true);
  const [colors, setColors] = useState([]);
  const [counter, setCounter] = useState(0);

  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(() => {
    setLiked(data.favorite);
    const currentDate = new Date().getTime();

    const millysecondDiff = currentDate - data.date;

    const daysMinus = Math.floor(millysecondDiff / 1000 / 60 / 60 / 24);

    if (daysMinus > 4) {
      setDate(false);
    }
  }, []);
  useEffect(() => {
    setColors(data.colors);
  }, []);

  function favoritePage() {
    nav(`/about/product/${id}`);
  }
  function cardHandler(id) {
    nav(`/about/product/${id}`);
  }
  function orderHarry(e) {
    e.stopPropagation();
    dispatch({ type: "ADDPRODUCT", payload: data });
    nav(`/basket`);
    dispatch({ type: "AMOUNTPLUS", payload: data.price });
  }
  function basketHandler(e) {
    e.stopPropagation();
    setCounter(counter + 1);
    dispatch({ type: "ADDPRODUCT", payload: data });
    dispatch({ type: "AMOUNTPLUS", payload: data.price });
  }
  function likeHandler(e) {
    e.stopPropagation();
    setLiked(!liked);
    data.favorite = !data.favorite;
    dispatch({ type: "LIKEPRODUCT", payload: data });
  }
  return (
    <div className="card" onClick={() => cardHandler(data.id)}>
      <div className="card__content">
        <div className="card__content__first">
          <div className="card__header">
            {date ? <span className="content__new">Новое</span> : null}
            <div className="card__star">
              <StarRating rating={data.raiting} />
            </div>
          </div>
          <div className="card__product">
            <div className="card__product__image">
              <img src={product} alt="" className="card__product__img" />
            </div>
            <div className="card__product__likeImg">
              <img
                onClick={(e) => likeHandler(e)}
                src={liked ? likeFull : like}
                alt=""
                className="card__product__like"
              />
            </div>

            <div className="card__infos__prices">
              {data.inStock ? (
                <>
                  <img src={check} alt="" className="card__infos__check" />
                  <span className="card__infos__sale__title">В наличии</span>
                </>
              ) : null}

              <div className="card__infos__sale">
                <span className="card__info__price">{`${data.price} сом`}</span>
                <div className=" card__infos__basket  content__basket__adap">
                  <img
                    onClick={(e) => basketHandler(e)}
                    src={basket}
                    alt=""
                    className="card__content__basket__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__content__second">
          <div className="second__star">
            <StarRating rating={data.rating} />
          </div>

          <div className="card__infos">
            <div className="card__info">
              <h4 className="card__info__title">
                Смартфон Apple iPhone 14 <br /> Pro Max 256GB EU
              </h4>
              <p className="card__info__text">
                iPhone 14 Pro <br /> MaxВолшебный новый <br /> способ
                взаимодействия с br iPhone. .....
              </p>
            </div>
          </div>
          <div className="card__content__btns">
            <button
              onClick={(e) => orderHarry(e)}
              className="card__content__btn"
            >
              Быстрый заказ
            </button>
            <div className="card__content__basket">
              <img
                onClick={(e) => basketHandler(e)}
                src={basket}
                alt=""
                className="card__content__basket__img"
              />
            </div>
          </div>
          <div className="card__content__footer">
            <span className="card__content__title">Цвет </span>
            <div className="card__content__colors">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="card__content__black color "
                  style={{ background: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className=" card__infos__basket">
            <span className="card__info__price"> {`${data.price} сом`}</span>

            <img
              onClick={(e) => basketHandler(e)}
              src={basket}
              alt=""
              className="card__content__basket__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemAddmission;
