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

import "swiper/css";
import "./style.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function InfoProduct() {
  const [selectImg, setSelected] = useState(null);
  const handleImageClick = (image) => {
    setSelected(image);
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
              <div className="info__content__title__img">
                <Slider {...settings}>
                  {selectImg && (
                    <div className="img">
                      <img src={selectImg} alt="#" className="bigImg" />
                    </div>
                  )}
                  <div className="img">
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
                <div className="image1Background">
                  <img
                    src={iphone14camera}
                    alt="#"
                    className="image1"
                    onClick={() => handleImageClick(iphone14)}
                  />
                </div>
                <div className="image2Background">
                  <img
                    src={iphone14width}
                    alt="#"
                    className="image2"
                    onClick={() => handleImageClick(iphone14width)}
                  />
                </div>
                <div className="image3Background">
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
                  Смартфон iPhone 14 в корпусе цвета Gold со <br /> встроенной
                  памятью 128 Гб оснащен экраном <br /> диагональю 6,1 дюйма,
                  выполненным по технологии <br /> OLED. Дисплей типа Super
                  Retina XDR обладает <br /> разрешением 2532x1170 пикселей. В
                  этой модели <br />
                  установлен шестиядерный процессор А15 Bionic. В
                  <button className="readMore">развёрнуть</button>
                </p>
              </div>
            </div>
            <div className="info__content__pretitle">
              <div className="info__content__pretitle__raiting">
                <div className="card__star">
                  <img src={fullStar} alt="#" />
                  <img src={fullStar} alt="#" />
                  <img src={star} alt="#" />
                  <img src={star} alt="#" />
                  <img src={star} alt="#" />
                </div>
              </div>
              <h1 className="info__content__pretitle__nameProduct">
                Apple IPhone 14 Pro Max
              </h1>
              <div className="info__content__pretitle__memory">
                <p className="info__content__pretitle__memory__text">Память</p>
                <p className="info__content__pretitle__memory__mini">256 gb</p>
                <p className="info__content__pretitle__memory__middle">
                  512 gb
                </p>
                <p className="info__content__pretitle__memory__big">1 tb</p>
              </div>
              <h1 className="info__content__pretitle__price">74500 сом</h1>
              <div className="info__content__pretitle__btns">
                <button className="toBasket">В корзину</button>
                <img src={like} alt="#" className="toFavorite" />
              </div>
              <div className="info__content__pretitle__charactery">
                <p className="info__content__pretitle__charactery__text">
                  Характеристики:
                </p>
                <p className="info__content__pretitle__charactery__varanty">
                  Гарантия.............................1 год
                </p>
                <p className="info__content__pretitle__charactery__display">
                  Экран................................6,1*/2532*1170Пикс
                </p>
                <p className="info__content__pretitle__charactery__settingsDisplay">
                  Технология экрана....................OLED
                </p>
                <p className="info__content__pretitle__charactery__processor">
                  Тип процессора.......................A15 Bionic
                </p>
                <p className="info__content__pretitle__charactery__memory">
                  Встроенная память (ROM)..............256gb
                </p>
                <p className="info__content__pretitle__charactery__mainCamera">
                  Основная камера......................12/12 Мпикс
                </p>
                <p className="info__content__pretitle__charactery__cores">
                  Количество ядер......................6
                </p>
                <p className="info__content__pretitle__charactery__resolution">
                  Разрешение видеосъемки...............3840/2160 Пикс(4K)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProduct;
