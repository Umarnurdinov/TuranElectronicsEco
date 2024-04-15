import React, { useEffect, useState } from "react";
import "./style.scss";
import product from "../../assets/phone.png";
import check from "../../assets/check.svg";
import like from "../../assets/like.svg";
import basket from "../../assets/basket.svg";
import StarRating from "../starRating";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import likeFull from "../../assets/likeFull.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ItemAddmission({ Newdata }) {
  console.log(Newdata);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [date, setDate] = useState(true);
  const [counter, setCounter] = useState(0);
  const [colorSelected, setColorSelected] = useState("");
  const [colorChangeData, setColorChangeData] = useState(Newdata);
  const email = useSelector((state) => state.email.email);

  //choose color
  const [liked, setLiked] = useState(false);
  const colorProduct = useSelector((state) => state.basket.color);
  const arrayProduct = useSelector((state) => state.basket.products);

  const dispatch = useDispatch();

  const nav = useNavigate();
  useEffect(() => {
    if (Newdata.favorite) {
      setLiked(Newdata.favorite);
    }
    const currentDate = new Date().getTime();

    const millysecondDiff = currentDate - Newdata.create_date;

    const daysMinus = Math.floor(millysecondDiff / 1000 / 60 / 60 / 24);

    if (daysMinus > 4) {
      setDate(false);
    }
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
  // function basketHandler(e) {
  //   e.stopPropagation();
  //   setCounter(counter + 1);
  //   dispatch({ type: "ADDPRODUCT", payload: colorChangeData });
  //   dispatch({ type: "AMOUNTPLUS", payload: Newdata.price });
  // }

  function basketHandler(e) {
    e.stopPropagation();
    if (email) {
      const products = arrayProduct.map((el) => el.id);
      products.push(Newdata.id);
      console.log(products);

      const basketOrderSend = {
        email: email,
        products: products,
      };

      console.log(basketOrderSend);
      axios
        .post("https://turaneletronic.onrender.com/basket/", basketOrderSend)
        .then((res) => {
          console.log(res);
          setCounter(counter + 1);
          dispatch({ type: "ADDPRODUCT", payload: Newdata });
          dispatch({ type: "AMOUNTPLUS", payload: Newdata.price });
        });
    } else {
      nav("/registration");
    }
  }
  function likeHandler(e) {
    e.stopPropagation();
    setLiked(!liked);
    Newdata.favorite = !Newdata.favorite;
    dispatch({ type: "LIKEPRODUCT", payload: Newdata });
  }
  function selectedColor(e, color) {
    setColorSelected(color);
    e.stopPropagation();
    dispatch({
      type: "CHOOSECOLOR",
      payload: color,
    });
    setColorChangeData({ ...colorChangeData, colors: color });
  }

  return (
    <SkeletonTheme baseColor="#c6d7eb" highlightColor="#ebf2f9">
      {loading ? (
        <Skeleton
          count={1}
          width={"275px"}
          height={"552px"}
          borderRadius={"25px"}
        />
      ) : (
        <div
          data-aos="zoom-in-up"
          className="card"
          onClick={() => cardHandler(Newdata.id)}
        >
          <div className="card__content">
            <div className="card__content__first">
              <div className="card__header">
                {date ? <span className="content__new">Новое</span> : null}
                <div className="card__star">
                  <StarRating rating={Newdata.raiting} />
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
                  {Newdata.inStock ? (
                    <>
                      <img src={check} alt="" className="card__infos__check" />
                      <span className="card__infos__sale__title">
                        В наличии
                      </span>
                    </>
                  ) : null}

                  <div className="card__infos__sale">
                    <span className="card__info__price">{`${Newdata.price} $`}</span>
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
                <StarRating rating={Newdata.rating} />
              </div>

              <div className="card__infos">
                <div className="card__info">
                  <h4 className="card__info__title">{Newdata.name}</h4>
                  <p className="card__info__text">
                    {Newdata.description && Newdata.description.length > 70
                      ? `${Newdata.description.slice(0, 70)}...`
                      : Newdata.description}
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
                  {Newdata.colors &&
                    Newdata.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`card__content__black color ${
                          color === colorSelected ? "active" : ""
                        }`}
                        style={{ background: color }}
                        onClick={(e) => selectedColor(e, color)}
                      ></div>
                    ))}
                </div>
              </div>
              <div className=" card__infos__basket">
                <span className="card__info__price">
                  {`${Newdata.price} $`}
                </span>
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
      )}
    </SkeletonTheme>
  );
}

export default ItemAddmission;
