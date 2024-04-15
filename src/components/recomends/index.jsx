import React, { useEffect, useState } from "react";
import iphone from "../../assets/iphone14.png";
import filledStar from "../../assets/fullStar.svg";
import Star from "../../assets/emptyStar.svg";
import like from "../../assets/like.svg";
import likeFull from "../../assets/likeFull.svg";
import basket from "../../assets/basket.svg";
import checkmark from "../../assets/checkmark.svg";
import basketForAdaptive from "../../assets/basketForAdaptive.svg";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../starRating";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Axios } from "axios";

function Recomends({ Newdata }) {
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
  const [colors, setColors] = useState([]);
  const [counter, setCounter] = useState(0);
  const [colorSelected, setColorSelected] = useState("");
  const [colorChangeData, setColorChangeData] = useState(Newdata);
  const email = useSelector((state) => state.email.email);
  function basketHandler(e) {
    e.stopPropagation();
    if (email) {
      const products = arrayData.map((el) => el.id);
      products.push(data.id);
      console.log(products);

      const basketOrderSend = {
        email: email,
        products: products,
      };

      Axios.post(
        "https://turaneletronic.onrender.com/basket/",
        basketOrderSend
      ).then((res) => {
        console.log(res);
        setCounter(counter + 1);
        dispatch({ type: "ADDPRODUCT", payload: data });
        dispatch({ type: "AMOUNTPLUS", payload: data.price });
      });
    } else {
      nav("/registration");
    }
  }

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
  // function basketHandler(e) {
  //   e.stopPropagation();
  //   setCounter(counter + 1);
  //   dispatch({ type: "ADDPRODUCT", payload: Newdata });
  //   dispatch({ type: "AMOUNTPLUS", payload: Newdata.price });
  // }
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
      payload: color ? color : Newdata.colors[0],
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
          borderRadius={"24px"}
        />
      ) : (
        <div
          data-aos="zoom-in-up"
          className="card"
          onClick={() => cardHandler(Newdata.id)}
        >
          <div className="reviewStar">
            <p></p>
            <div className="stars">
              <StarRating rating={Newdata.raiting} />
            </div>
          </div>
          <div className="productAndLike">
            <img className="watchImg" src={iphone} alt="#" />
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
            <p className="oldPrice">{`${Newdata.price} $`}</p>
          </div>
          <div className="saleAndPercent">
            <p className="purcent">-5%</p>
            <p className="econom"> экономия 5 285 сом</p>
          </div>
          <div className="nameAndCharacter">
            <p className="nameProduct">{Newdata.name}</p>
            <p className="character">
              {Newdata.description && Newdata.description.length > 70
                ? `${Newdata.description.slice(0, 70)}...`
                : Newdata.description}
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
          <div className="card__footer">
            <p className="card__footer__text">{`${Newdata.price} $`}</p>
            <img
              onClick={(e) => basketHandler(e)}
              className="basketForAdaptive"
              src={basketForAdaptive}
              alt="#"
            />
          </div>
        </div>
      )}
    </SkeletonTheme>
  );
}

export default Recomends;
