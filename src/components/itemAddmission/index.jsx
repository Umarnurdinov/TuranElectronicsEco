import React from "react";
import "./style.scss";
import product from "../../assets/phone.png";
import fullStar from "../../assets/fullStar.png";
import star from "../../assets/star.png";
import check from "../../assets/check.png";
import like from "../../assets/likeHeart.png";
import basket from "../../assets/basket.png";

function ItemAddmission({ data }) {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__content__first">
                    <div className="card__header">
                        <span className="content__new">Новое</span>
                        <div className="card__star">
                            <img src={fullStar} alt="" />
                            <img src={fullStar} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="card__product">
                        <div className="card__product__image">
                            <img
                                src={product}
                                alt=""
                                className="card__product__img"
                            />
                        </div>
                        <div className="card__product__likeImg">
                            <img
                                src={like}
                                alt=""
                                className="card__product__like"
                            />
                        </div>

                        <div className="card__infos__prices">
                            <img
                                src={check}
                                alt=""
                                className="card__infos__check"
                            />
                            <span className="card__infos__sale__title">
                                В наличии
                            </span>
                            <div className="card__infos__sale">
                                <span className="card__info__price">
                                    100 415{" "}
                                </span>
                                <div className=" card__infos__basket  content__basket__adap">
                                    <img
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
                        <img src={fullStar} alt="" />
                        <img src={fullStar} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>

                    <div className="card__infos">
                        <div className="card__info">
                            <h4 className="card__info__title">
                                Смартфон Apple iPhone 14 <br /> Pro Max 256GB EU
                            </h4>
                            <p className="card__info__text">
                                iPhone 14 Pro <br /> MaxВолшебный новый <br />{" "}
                                способ взаимодействия с br iPhone. .....
                            </p>
                        </div>
                    </div>
                    <div className="card__content__btns">
                        <button className="card__content__btn">
                            Быстрый заказ
                        </button>
                        <div className="card__content__basket">
                            <img
                                src={basket}
                                alt=""
                                className="card__content__basket__img"
                            />
                            {/* <span className="card__info__price">
                                    100 415{" "}
                                </span> */}
                        </div>
                    </div>
                    <div className="card__content__footer">
                        <span className="card__content__title">Цвет </span>
                        <div className="card__content__colors">
                            <div className="card__content__black color"></div>
                            <div className="card__content__white color"></div>
                            <div className="card__content__pink color"></div>
                        </div>
                    </div>
                    <div className=" card__infos__basket">
                        <span className="card__info__price">100 415 </span>

                        <img
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
