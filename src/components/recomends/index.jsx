import React, { useState } from "react";
import watch from "../../assets/watch.png";
import filledStar from "../../assets/fullStar.svg";
import Star from "../../assets/emptyStar.svg";
import heart from "../../assets/heart.png";
import basket from "../../assets/basket.svg";
import checkmark from "../../assets/checkmark.svg";
import basketForAdaptive from "../../assets/basketForAdaptive.svg";
import "./style.scss";
import { useDispatch } from "react-redux";

function Recomends() {
    return (
        <div className="card">
            <div className="reviewStar">
                <p className="new">Новое</p>
                <div className="stars">
                    <img src={filledStar} alt="" />
                    <img src={filledStar} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
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
                <p className="newPrice">1 449 сом</p>
                <p className="oldPrice">3 099 сом</p>
            </div>
            <div className="saleAndPercent">
                <p className="purcent">-5%</p>
                <p className="econom"> экономия 5 285 сом</p>
            </div>
            <div className="nameAndCharacter">
                <p className="nameProduct">Xiaomi Mi band (Replica)</p>
                <p className="character">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Alias veritatis quam, consectetur repudiandae eligendi
                    <br />
                    voluptate perferendis at ut reprehenderit, sint ab <br />
                    accusantium quisquam. Ab officiis rerum tempore deleniti
                    режим: сенсорная кнопка......
                </p>
            </div>
            <div className="buttonAndBasket">
                <button className="order">Быстрый заказ</button>
                <img src={basket} alt="#" />
            </div>
            <div className="colorProduct">
                <p className="colorText">Цвет</p>
                <div className="card__content__black color "></div>
                <div className="colorGold"></div>
                <div className="colorWhite">a</div>
            </div>
            <div className="card__footer">
                <p className="card__footer__text">1 449 сом</p>
                <img
                    className="basketForAdaptive"
                    src={basketForAdaptive}
                    alt="#"
                />
            </div>
        </div>
    );
}

export default Recomends;
