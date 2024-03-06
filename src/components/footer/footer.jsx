import React from "react";
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

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__info">
              <div className="footer__info__logo">
                <img src={logo} alt="#" />
              </div>
              <div className="footer__info__texts">
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
                <img src={facebook} alt="#" className="facebook" />
              </div>
              <div className="background__twitter">
                <img src={twitter} alt="#" className="twitter" />
              </div>
              <div className="background__instagram">
                <img src={instagram} alt="#" className="instagram" />
              </div>
            </div>
            <div className="footer__title">
              <div className="contacts">
                <h1 className="contacts__logo">КОНТАКТЫ</h1>
                <h1 className="line"></h1>
                <div className="contacts__text">
                  <div className="footer__geo">
                    <img src={geo} alt="#" />
                    <p className="footer__geo__text">
                      Кыргызстан г. Бишкек <br /> ул.Киевская 168, 720001
                    </p>
                  </div>
                  <div className="footer__map">
                    <img src={map} alt="#" />
                    <p className="footer__map__text">
                      Работаем каждый день с 10:00 <br /> до 20:00
                    </p>
                  </div>
                  <div className="footer__phone">
                    <img src={phone} alt="#" />
                    <p className="footer__phone__text">
                      Тел: +99600000000 Смартфоны
                    </p>
                  </div>
                  <div className="footer__gmail">
                    <img src={gmail} alt="#" />
                    <p className="footer__gmail__text">
                      Email: info@turanelectronic.kg
                    </p>
                  </div>
                </div>
              </div>
              <div className="information">
                <h1 className="information__logo">ИНФОРМАЦИЯ</h1>
                <h1 className="line"></h1>

                <div className="information__texts">
                  <p className="information__cashback">
                    Система начислений КЭШБЕК
                  </p>
                  <p className="information__aboutUs">О Нас</p>
                  <p className="information__varanty">Условия гарантии</p>
                  <p className="information__credit">Условия кредитования</p>
                  <p className="information__delivery">Доставка</p>
                  <p className="information__privacy">
                    Политика конфиденциальности
                  </p>
                  <p className="information__public">Публичная оферта</p>
                  <p className="information__contacts">Контакты</p>
                </div>
              </div>
              <div className="personalArea">
                <h1 className="personalArea__logo">Личный Кабинет</h1>
                <h1 className="line"></h1>
                <div className="peronalArea__texts">
                  <p className="personalArea__personal">Личный Кабинет</p>
                  <p className="personalArea__history">История заказов</p>
                  <p className="personalArea__bookmarks">Закладки</p>
                  <p className="personalArea__compare">Сравнить</p>
                  <p className="personalArea__newsletter">Рассылка</p>
                  <p className="personalArea__siteMap">Карта сайта</p>
                  <p className="personalArea__manufacturers">Производители</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__adaptive">
        <Link to={"/"}>
          <img src={home} alt="#" />
        </Link>
        <Link to={"/categories"}>
          <img src={settings} alt="#" />
        </Link>
        <Link to={"/favorite"}>
          <img src={health} alt="#" />
        </Link>
        <Link to={"/registration"}>
          <img src={profile} alt="#" />
        </Link>
      </div>
    </>
  );
}

export default Footer;
