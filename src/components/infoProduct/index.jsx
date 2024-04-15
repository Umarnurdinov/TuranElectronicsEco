import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch } from "react-redux";

import iphone14 from "../../assets/iphone14.png";
import iphone14camera from "../../assets/iphone14Camera.png";
import iphone14width from "../../assets/iphone14width.png";
import iphone14back from "../../assets/iphone14back.png";
import iphone14allcamera from "../../assets/iphone14allcamera.png";
import like from "../../assets/like.svg";
import likeFull from "../../assets/likeFull.svg";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  const [memorySelected, setMemorySelected] = useState(false);
  const [selectImg, setSelected] = useState(null);
  const [counter, setCounter] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const dispatch = useDispatch();

  function memorySelect(e) {
    setMemorySelected(e.target.innerText);
    e.stopPropagation();
    console.log(e.target.innerText);
  }
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
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
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
            <Link className="toIphone14Page">/ Iphone 14 Pro max</Link>
          </div>
          <div className="info__content">
            <div className="info__content__title">
              <div data-aos="zoom-in" className="info__content__title__img">
                <Slider {...settings}>
                  {selectImg && (
                    <div className="img">
                      <img src={selectImg} alt="#" className="bigImg" />
                    </div>
                  )}
                  <div data-aos="zoom-in" className="img">
                    <img src={iphone14} alt="#" className="bigImg" />
                  </div>
                  <div className="img">
                    <img src={iphone14} alt="#" className="bigImg" />
                  </div>
                  <div className="img">
                    <img src={iphone14} alt="#" className="bigImg" />
                  </div>
                  <div className="img">
                    <img src={iphone14} alt="#" className="bigImg" />
                  </div>
                </Slider>
              </div>
              <div className="info__content__title__images">
                <div data-aos="zoom-in" className="image1Background">
                  <img
                    src={iphone14camera}
                    alt="#"
                    className="image1"
                    onClick={() => handleImageClick(iphone14)}
                  />
                </div>
                <div data-aos="zoom-in" className="image2Background">
                  <img
                    src={iphone14width}
                    alt="#"
                    className="image2"
                    onClick={() => handleImageClick(iphone14width)}
                  />
                </div>
                <div data-aos="zoom-in" className="image3Background">
                  <img
                    src={iphone14back}
                    alt="#"
                    className="image3"
                    onClick={() => handleImageClick(iphone14back)}
                  />
                </div>
                <div className="image4Background">
                  <img
                    src={iphone14allcamera}
                    alt="#"
                    className="image4"
                    onClick={() => handleImageClick(iphone14allcamera)}
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
                  {infoProd.description &&
                  infoProd.description.length > 100 &&
                  !showFullDescription
                    ? `${infoProd.description.slice(0, 100)}...`
                    : infoProd.description}
                  {infoProd.description &&
                    infoProd.description.length > 100 && (
                      <button className="readMore" onClick={toggleDescription}>
                        {showFullDescription ? "Свернуть" : "Развернуть"}
                      </button>
                    )}
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
                {infoProd.name}
              </h1>
              <div className="info__content__pretitle__memory">
                {infoProd &&
                  infoProd.memories &&
                  infoProd.memories.map((el, idx) => (
                    <>
                      <p
                        key={idx}
                        onClick={(e) => memorySelect(e)}
                        className={`info__content__pretitle__memory__content ${
                          el == memorySelected ? "active" : ""
                        }`}
                      >
                        {el}
                      </p>
                    </>
                  ))}
              </div>
              <h1 className="info__content__pretitle__price">
                {infoProd.price} $
              </h1>
              <div className="info__content__pretitle__btns">
                <button onClick={basketHandler} className="toBasket">
                  В корзину
                </button>
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
                {infoProd.characteristics &&
                  infoProd.characteristics?.map((item, index) => (
                    <p
                      key={index}
                      className="info__content__pretitle__charactery__item"
                    >
                      {item.key
                        ? `${item.key}........................... ${item.value}`
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
