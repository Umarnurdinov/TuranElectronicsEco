import React, { useEffect, useState } from "react";
import StarRating from "../starRating";
import like from "../../assets/likeHeart.png";
import likeFull from "../../assets/likeFull.png";
import iphone14 from "../../assets/iphone14.png";
import iphone14camera from "../../assets/iphone14Camera.png";
import iphone14width from "../../assets/iphone14width.png";
import iphone14back from "../../assets/iphone14back.png";
import iphone14allcamera from "../../assets/iphone14allcamera.png";
import fullStar from "../../assets/fullStar.svg";
import star from "../../assets/emptyStar.svg";
// import like from "../../assets/like.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function InfoProductCard({ data }) {
  const [selectImg, setSelected] = useState(null);
  const handleImageClick = (image) => {
    setSelected(image);
  };
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
    <>
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
            <p className="info__content__title__colors__text">Выбрать цвет</p>
            <p className="info__content__title__colors1"></p>
            <p className="info__content__title__colors2"></p>
            <p className="info__content__title__colors3"></p>
          </div>
          <div className="info__content__title__description">
            <p className="info__content__title__description__logo">Описание</p>
            <p className="info__content__title__description__texts">
              Смартфон iPhone 14 в корпусе цвета Gold со <br /> встроенной
              памятью 128 Гб оснащен экраном <br /> диагональю 6,1 дюйма,
              выполненным по технологии <br /> OLED. Дисплей типа Super Retina
              XDR обладает <br /> разрешением 2532x1170 пикселей. В этой модели
              <br />
              установлен шестиядерный процессор А15 Bionic. В
              <button className="readMore">развёрнуть</button>
            </p>
          </div>
        </div>
        <div className="info__content__pretitle">
          <div className="info__content__pretitle__raiting">
            <div className="card__star">
              <StarRating rating={data.rating} />
            </div>
          </div>
          <h1 className="info__content__pretitle__nameProduct">{data.title}</h1>
          <div className="info__content__pretitle__memory">
            <p className="info__content__pretitle__memory__text">Память</p>
            <p className="info__content__pretitle__memory__mini">
              {data.memory[0]} gb
            </p>
            <p className="info__content__pretitle__memory__middle">
              {data.memory[1]} gb
            </p>
            <p className="info__content__pretitle__memory__big">
              {data.memory[2]} gb
            </p>
          </div>
          <h1 className="info__content__pretitle__price">{`${data.price} сом`}</h1>
          <div className="info__content__pretitle__btns">
            <button onClick={(e) => basketHandler(e)} className="toBasket">
              В корзину
            </button>

            <img src={liked ? likeFull : like} alt="#" className="toFavorite" />
          </div>
          {data.ch.map((el) => (
            <div className="info__content__pretitle__charactery">
              <p className="info__content__pretitle__charactery__text">
                Характеристики:
              </p>
              <p className="info__content__pretitle__charactery__varanty">
                {`Гарантия.............................${data}`}
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
          ))}
        </div>
      </div>
    </>
  );
}

export default InfoProductCard;
