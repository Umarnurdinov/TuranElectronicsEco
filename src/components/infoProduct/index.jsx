import React, { useState } from "react";
import { Link } from "react-router-dom";
import iphone14 from "../../assets/iphone14.png";
import iphone14camera from "../../assets/iphone14Camera.png";
import iphone14width from "../../assets/iphone14width.png";
import iphone14back from "../../assets/iphone14back.png";
import iphone14allcamera from "../../assets/iphone14allcamera.png";
import fullStar from "../../assets/fullStar.svg";
import star from "../../assets/emptyStar.svg";
import like from "../../assets/like.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import likeFull from "../../assets/likeFull.png";



import "swiper/css";
import "./style.scss";
import StarRating from "../starRating";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function InfoProduct({ infoProd }) {
  const [selectImg, setSelected] = useState(null);
  const [counter, setCounter] = useState(0);
  const [liked, setLiked] = useState(false);
  const dispatch =useDispatch()


  function likeHandler(e) {
    e.stopPropagation();
    setLiked(!liked);
    dispatch({ type: "LIKEPRODUCT", payload: infoProd });
}

    const handleImageClick = (image) => {
        setSelected(image);
    };
    function basketHandler(e) {
      e.stopPropagation();
      setCounter(counter + 1);
      dispatch({ type: "ADDPRODUCT", payload: infoProd });
      dispatch({ type: "AMOUNTPLUS", payload: infoProd.price });
    }
    
    return (
        <>
            <div className="info">
                <div className="container">
                    <div className="info__pages">
                        <Link className="toHome" to={"/"}>
                            Главная
                        </Link>
                        <Link className="toCatalog" to={"/catalog"}>
                            / Каталог
                        </Link>
                        <Link className="toIphonePage" to={"iphonPage"}>
                            / Iphone
                        </Link>
                        <Link className="toIphone14Page">
                            / Iphone 14 Pro max
                        </Link>
                    </div>
                    <div className="info__content">
                        <div className="info__content__title">
                            <div className="info__content__title__img">
                                <Slider {...settings}>
                                    {selectImg && (
                                        <div className="img">
                                            <img
                                                src={selectImg}
                                                alt="#"
                                                className="bigImg"
                                            />
                                        </div>
                                    )}
                                    <div className="img">
                                        <img
                                            src={iphone14}
                                            alt="#"
                                            className="bigImg"
                                        />
                                    </div>
                                    <div className="img">
                                        <img
                                            src={iphone14}
                                            alt="#"
                                            className="bigImg"
                                        />
                                    </div>
                                    <div className="img">
                                        <img
                                            src={iphone14}
                                            alt="#"
                                            className="bigImg"
                                        />
                                    </div>
                                    <div className="img">
                                        <img
                                            src={iphone14}
                                            alt="#"
                                            className="bigImg"
                                        />
                                    </div>
                                </Slider>
                            </div>
                            <div className="info__content__title__images">
                                <div className="image1Background">
                                    <img
                                        src={iphone14camera}
                                        alt="#"
                                        className="image1"
                                        onClick={() =>
                                            handleImageClick(iphone14)
                                        }
                                    />
                                </div>
                                <div className="image2Background">
                                    <img
                                        src={iphone14width}
                                        alt="#"
                                        className="image2"
                                        onClick={() =>
                                            handleImageClick(iphone14width)
                                        }
                                    />
                                </div>
                                <div className="image3Background">
                                    <img
                                        src={iphone14back}
                                        alt="#"
                                        className="image3"
                                        onClick={() =>
                                            handleImageClick(iphone14back)
                                        }
                                    />
                                </div>
                                <div className="image4Background">
                                    <img
                                        src={iphone14allcamera}
                                        alt="#"
                                        className="image4"
                                        onClick={() =>
                                            handleImageClick(iphone14allcamera)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="info__content__title__colors">
                                <p className="info__content__title__colors__text">
                                    Выбрать цвет
                                </p>
                                <p className="info__content__title__colors1"></p>
                                <p className="info__content__title__colors2"></p>
                                <p className="info__content__title__colors3"></p>
                            </div>
                            <div className="info__content__title__description">
                                <p className="info__content__title__description__logo">
                                    Описание
                                </p>
                                <p className="info__content__title__description__texts">
                                    Смартфон iPhone 14 в корпусе цвета Gold со{" "}
                                    <br /> встроенной памятью 128 Гб оснащен
                                    экраном <br /> диагональю 6,1 дюйма,
                                    выполненным по технологии <br /> OLED.
                                    Дисплей типа Super Retina XDR обладает{" "}
                                    <br /> разрешением 2532x1170 пикселей. В
                                    этой модели <br />
                                    установлен шестиядерный процессор А15
                                    Bionic. В
                                    <button className="readMore">
                                        развёрнуть
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className="info__content__pretitle">
                            <div className="info__content__pretitle__raiting">
                                <div className="card__star">
                                    <StarRating rating={infoProd.raiting} />
                                </div>
                            </div>
                            <h1 className="info__content__pretitle__nameProduct">
                                {infoProd.title}
                            </h1>
                            <div className="info__content__pretitle__memory">
                                <p className="info__content__pretitle__memory__text">
                                    Память
                                </p>
                                <p className="info__content__pretitle__memory__mini">
                                    256 gb
                                </p>
                                <p className="info__content__pretitle__memory__middle">
                                    512 gb
                                </p>
                                <p className="info__content__pretitle__memory__big">
                                    1 tb
                                </p>
                            </div>
                            <h1 className="info__content__pretitle__price">
                                {infoProd.price} сом
                            </h1>
                            <div className="info__content__pretitle__btns">
                                <button onClick={basketHandler} className="toBasket">В корзину</button>
                                <img
                                    src={liked ? likeFull : like}
                                    onClick={(e) => likeHandler(e)}

                                    alt="#"
                                    className="toFavorite"
                                />
                            </div>
                            <div className="info__content__pretitle__charactery">
                                <p className="info__content__pretitle__charactery__text">
                                    Характеристики:
                                </p>
                                {infoProd.ch &&
                                    infoProd.ch.map((item, index) => (
                                        <p
                                            key={index}
                                            className="info__content__pretitle__charactery__item"
                                        >
                                            {item.garant
                                                ? `${item.garant}........................... ${item.value}`
                                                : ""}
                                            {item.screen
                                                ? `${item.screen}........................... ${item.value}`
                                                : ""}
                                            {item.technologyScreen
                                                ? `${item.technologyScreen}........................... ${item.value}`
                                                : ""}
                                            {item.typeProcessor
                                                ? `${item.typeProcessor}........................... ${item.value}`
                                                : ""}
                                            {item.memory
                                                ? `${item.memory}........................... ${item.value}`
                                                : ""}
                                            {item.camera
                                                ? `${item.camera}........................... ${item.value}`
                                                : ""}
                                            {item.amountCore
                                                ? `${item.amountCore}...........................${item.value}`
                                                : ""}
                                            {item.videoShooting
                                                ? `${item.videoShooting}........................... ${item.value}`
                                                : ""}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoProduct;
