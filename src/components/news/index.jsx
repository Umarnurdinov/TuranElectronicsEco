import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function NewsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="news">
      <div className="container">
        <div className="news__links">
          <Link className="toHome" to={"/"}>
            Главная{" "}
          </Link>
          <Link className="toHome" to={"/"}>
            / Новости
          </Link>
        </div>
        <div className="news__content">
          <div className="news__cards">
            <Link to={"/cardNews"}>
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                className="news__card1"
              >
                <img className="card1Img" src={card1} alt="#" />
                <p className="card1__text">
                  Марафон Скидок на Нашем Маркетплейсе!
                </p>
                <div className="card1__footer">
                  <p className="card1__footer__title">
                    Новый сезон — новые возможности для выгодных покупок!
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/cardNews2"}>
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="news__card2"
              >
                <img className="card2Img" src={card2} alt="#" />
                <p className="card2__text">25 мая 2024 г.</p>
                <p className="card2__text__title">
                  Представляем Новую Линейку Продукции
                </p>
              </div>
            </Link>
            <Link to={"/cardNews3"}>
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                className="news__card3"
              >
                <img className="card3Img" src={card3} alt="#" />
                <div className="card3__title">
                  <p className="card3__text">
                    Объявляем о сотрудничестве с крупным мировыми брендами.
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/cardNews"}>
              <div
                data-aos="flip-left"
                data-aos-duration="1000"
                className="news__card1"
              >
                <img className="card1Img" src={card1} alt="#" />
                <p className="card1__text">
                  Марафон Скидок на Нашем Маркетплейсе!
                </p>
                <div className="card1__footer">
                  <p className="card1__footer__title">
                    Новый сезон — новые возможности для выгодных покупок!
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/cardNews2"}>
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                className="news__card2"
              >
                <img className="card2Img" src={card2} alt="#" />
                <p className="card2__text">25 мая 2024 г.</p>
                <p className="card2__text__title">
                  Представляем Новую Линейку Продукции
                </p>
              </div>
            </Link>
            <Link to={"/cardNews3"}>
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                className="news__card3"
              >
                <img className="card3Img" src={card3} alt="#" />
                <div className="card3__title">
                  <p className="card3__text">
                    Объявляем о сотрудничестве с крупным мировыми брендами.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
