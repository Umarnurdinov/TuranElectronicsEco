import React, { useEffect } from "react";
import "./style.scss";
import card5 from "../../assets/card5.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function CardNews2() {
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
            Главная
          </Link>
          <Link className="toNews" to={"/news"}>
            / Новости
          </Link>
          <Link className="toAboutUs" to={"/newsUs"}>
            / Объявляем о сотрудничестве с крупным мировыми брендами
          </Link>
        </div>
        <div className="news__content">
          <img
            data-aos="zoom-in-down"
            src={card5}
            alt="#"
            className="newsImg"
          />
          <h1 data-aos="zoom-out-down" className="news__title">
            Представляем Новую Линейку Продукции
          </h1>
          <p data-aos="zoom-out-down" className="news__text">
            Важное Объявление: Новое Стратегическое Партнерство Для Улучшения
            Вашего Опыта! <br />
            <br />
            Мы рады сообщить о заключении ключевого стратегического партнерства,
            направленного на улучшение вашего опыта на нашем маркетплейсе. Наша
            компания продолжает стремиться к обеспечению высочайшего уровня
            сервиса и разнообразия для наших уважаемых клиентов, и это
            партнерство является еще одним шагом к достижению этой цели. <br />
            <br />
            Мы рады объявить о сотрудничестве с крупным мировым брендом, который
            признан своим качеством и инновациями в своей области. Это
            сотрудничество открывает для наших пользователей новые возможности и
            преимущества: <br />
            <br />
            1. Расширенный Ассортимент: Благодаря партнерству с этим брендом мы
            расширяем наш <br />
            {"⠀"}ассортимент товаров, предоставляя вам еще больше выбора и
            вариантов для <br /> {"⠀"}удовлетворения ваших потребностей. <br />
            2. Эксклюзивные Предложения: Партнерство позволяет нам предложить
            вам эксклюзивные <br /> {"⠀"}скидки, акции и специальные
            маркетплейсе.
            <br />
            3. Высокое Качество и Надежность: Бренд, с которым мы сотрудничаем,
            известен своим <br /> {"⠀"}высоким качеством продукции и
            надежностью. Это означает, что вы можете быть уверены в <br /> {"⠀"}
            качестве товаров, которые приобретаете на нашем маркетплейсе. <br />
            <br />
            Мы уверены, что это партнерство принесет значительные преимущества
            для всех наших пользователей и поможет нам продолжить строить
            платформу, которая соответствует вашим ожиданиям и потребностям.
            Следите за обновлениями, чтобы быть в курсе всех новостей и
            предложений, доступных благодаря нашему новому стратегическому
            партнерству!
          </p>
          <button data-aos="zoom-in-down" className="newsBtn">
            Оформить заявку
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNews2;
