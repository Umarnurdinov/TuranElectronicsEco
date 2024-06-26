import React, { useEffect, useState } from "react";
import product from "../../assets/phone.png";
import watch from "../../assets/watch.png";
import deleteicon from "../../assets/deleteicon.svg";
import StarRating from "../starRating";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function OrderCard({ order }) {
  useEffect(() => {
    axios("https://turaneletronic.onrender.com/basket/").then((res) => {
      console.log(res);
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const [count, setCount] = useState(0);

  const [price, setPrice] = useState(order.price);
  const amount = useSelector((state) => state.basket.amount);
  const colorProduct = useSelector((state) => state.basket.color);
  const dispatch = useDispatch();

  function minusFunc() {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count) {
      setPrice(price - order.price);
      dispatch({ type: "AMOUNTMINUS", payload: order.price });
    }
  }
  function plusFunc() {
    setCount(count + 1);
    setPrice(price + order.price);
    dispatch({ type: "AMOUNTPLUS", payload: order.price });
  }
  function deleteProduct(id) {
    dispatch({ type: "DELETEPRODUCT", payload: id });
    dispatch({ type: "AMOUNTMINUS", payload: order.price });
  }
  return (
    <>
      <div data-aos="zoom-in-up" className="basket__info__box">
        <div className="basket__info__img">
          <img src={product} alt="#" className="product__photo" />
        </div>
        <div className="basket__info__content">
          <div className="content__text__title">
            <h4 className="content__title">{order.name}</h4>
            <div className="stars">
              <StarRating rating={order.raiting} />
            </div>
          </div>
          <div className="basket__info__center">
            <p className="content__text">
              {order.description && order.description.length > 100
                ? `${order.description.slice(0, 100)}...`
                : order.description}
            </p>
            <span className="real__price">{price} $ </span>
            <s className="basket__old__price__1" style={{ display: "none" }}>
              81000 сом
            </s>
          </div>
          <div className="content__footer">
            <h4 className="content__color">
              Цвет:
              <div
                className="color "
                style={{ background: order.colors }}
              ></div>
            </h4>
            <div className="basket__footer__end">
              <div className="basket__buttons">
                <button onClick={minusFunc} className="minus">
                  -
                </button>
                <p className="count">{count + 1}</p>
                <button onClick={plusFunc} className="plus">
                  +
                </button>
              </div>
              <div
                className="basket__info__delete"
                onClick={() => deleteProduct(order.id)}
              >
                <img src={deleteicon} alt="#" className="deleteicon" />
                <p className="basket__info__delete__text">Удалить</p>
              </div>
              <s className="basket__old__price">81000 сом </s>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
