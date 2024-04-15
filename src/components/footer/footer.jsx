import React, { useEffect } from "react";
import "./style.scss";
import logo from "../../assets/Logo.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import geo from "../../assets/geo.svg";
import map from "../../assets/map.svg";
import phone from "../../assets/phone.svg";
import gmail from "../../assets/gmail.svg";
import home from "../../assets/home.svg";
import settings from "../../assets/settings.svg";
import health from "../../assets/health.svg";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
  const likeCounter = useSelector((state) => state.like.counter);

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__info">
              <div data-aos="fade-left" className="footer__info__logo">
                <Link to={"/"}>
                  <img src={logo} alt="#" />
                </Link>
              </div>
              <div data-aos="fade-left" className="footer__info__texts">
                <p className="footer__info__text">
                  Turan Electronics - ваш идеальный магазин для шопинга.
                  Обнаружьте <br /> последние тренды, выбирайте изысканные
                  товары, оформляйте заказы с <br /> легкостью. Элегантный
                  дизайн, безопасные платежи и быстрая доставка - <br /> все,
                  что вам нужно для приятного онлайн-шопинга. <br /> <br />
                  Превратите свои желания в реальность с нами!
                </p>
              </div>
            </div>
            <div className="footer__social">
              <div className="background__facebook">
                <img
                  data-aos="zoom-in-down"
                  data-aos-duration="1000"
                  src={facebook}
                  alt="#"
                  className="facebook"
                />
              </div>
              <div className="background__twitter">
                <img
                  data-aos="zoom-in-down"
                  data-aos-duration="1300"
                  src={twitter}
                  alt="#"
                  className="twitter"
                />
              </div>
              <div className="background__instagram">
                <img
                  data-aos="zoom-in-down"
                  data-aos-duration="1600"
                  src={instagram}
                  alt="#"
                  className="instagram"
                />
              </div>
            </div>
            <div className="footer__title">
              <div className="contacts">
                <h1 data-aos="zoom-out" className="contacts__logo">
                  КОНТАКТЫ
                </h1>
                <h1 className="line"></h1>
                <div data-aos="zoom-out" className="contacts__text">
                  <div data-aos="zoom-out" className="footer__geo">
                    <img src={geo} alt="#" />
                    <p data-aos="zoom-out" className="footer__geo__text">
                      Кыргызстан г. Бишкек <br /> ул.Киевская 168, 720001
                    </p>
                  </div>
                  <div data-aos="zoom-out" className="footer__map">
                    <img src={map} alt="#" />
                    <p data-aos="zoom-out" className="footer__map__text">
                      Работаем каждый день с 10:00 <br /> до 20:00
                    </p>
                  </div>
                  <div data-aos="zoom-out" className="footer__phone">
                    <img src={phone} alt="#" />
                    <p data-aos="zoom-out" className="footer__phone__text">
                      Тел: +99600000000 Смартфоны
                    </p>
                  </div>
                  <div data-aos="zoom-out" className="footer__gmail">
                    <img src={gmail} alt="#" />
                    <p data-aos="zoom-out" className="footer__gmail__text">
                      Email: info@turanelectronic.kg
                    </p>
                  </div>
                </div>
              </div>
              <div className="information">
                <h1 data-aos="zoom-out" className="information__logo">
                  ИНФОРМАЦИЯ
                </h1>
                <h1 data-aos="zoom-out" className="line"></h1>

                <div className="information__texts">
                  <p data-aos="zoom-out" className="information__cashback">
                    Система начислений КЭШБЕК
                  </p>
                  <p data-aos="zoom-out" className="information__aboutUs">
                    О Нас
                  </p>
                  <p data-aos="zoom-out" className="information__varanty">
                    Условия гарантии
                  </p>
                  <p data-aos="zoom-out" className="information__credit">
                    Условия кредитования
                  </p>
                  <p data-aos="zoom-out" className="information__delivery">
                    Доставка
                  </p>
                  <p data-aos="zoom-out" className="information__privacy">
                    Политика конфиденциальности
                  </p>
                  <p data-aos="zoom-out" className="information__public">
                    Публичная оферта
                  </p>
                  <p data-aos="zoom-out" className="information__contacts">
                    Контакты
                  </p>
                </div>
              </div>
              <div className="personalArea">
                <h1 data-aos="zoom-out" className="personalArea__logo">
                  Личный Кабинет
                </h1>
                <h1 data-aos="zoom-out" className="line"></h1>
                <div className="peronalArea__texts">
                  <p data-aos="zoom-out" className="personalArea__personal">
                    Личный Кабинет
                  </p>
                  <p data-aos="zoom-out" className="personalArea__history">
                    История заказов
                  </p>
                  <p data-aos="zoom-out" className="personalArea__bookmarks">
                    Закладки
                  </p>
                  <p data-aos="zoom-out" className="personalArea__compare">
                    Сравнить
                  </p>
                  <p data-aos="zoom-out" className="personalArea__newsletter">
                    Рассылка
                  </p>
                  <p data-aos="zoom-out" className="personalArea__siteMap">
                    Карта сайта
                  </p>
                  <p
                    data-aos="zoom-out"
                    className="personalArea__manufacturers"
                  >
                    Производители
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__adaptive">
        <Link data-aos="zoom-out" to={"/"}>
          <img src={home} alt="#" />
        </Link>
        <Link data-aos="zoom-out" to={"/categories"}>
          <img src={settings} alt="#" />
        </Link>
        <Link data-aos="zoom-out" to={"/favorite"}>
          <img src={health} alt="#" />
          <span className="basket__counter">{likeCounter}</span>
        </Link>
        <Link data-aos="zoom-out" to={"/registration"}>
          <img src={profile} alt="#" />
        </Link>
      </div>
    </>
  );
}

export default Footer;
