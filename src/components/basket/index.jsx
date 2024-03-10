import React, { useEffect, useState } from "react";
import "./style.scss";
import iphone from "../../assets/iphone14.png";
import fullStar from "../../assets/fullStar.svg";
import emptyStar from "../../assets/emptyStar.svg";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import maestro from "../../assets/maestro.png";
import mbank from "../../assets/mbank.png";
import elcom from "../../assets/elcom.png";
import optima from "../../assets/optima.png";
import qrcode from "../../assets/qrcode.png";
import done from "../../assets/Done.png";
import { Link } from "react-router-dom";
import { Button, Checkbox, Dropdown, Input, Space, message } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

function BasketPage() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", console.log(e));
  };
  const items = [
    {
      label: "Чуй",
      key: "1",
    },
    {
      label: "Ош",
      key: "2",
    },
    {
      label: "Джалал-Абад",
      key: "3",
    },
    {
      label: "Баткен",
      key: "4",
    },
    {
      label: "Ыссык-Куль",
      key: "5",
    },
    {
      label: "Нарын",
      key: "6",
    },
    {
      label: "Талас",
      key: "7",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const menuProps2 = {
    items,
    onClick: handleMenuClick,
  };

  function minusFunc() {
    return setCount(count - 1);
  }
  function plusFunc() {
    return setCount(count + 1);
  }
  console.log(count);
  let obj = null;
  useEffect(() => {
    obj = {
      name: `Смартфон Apple Iphone 14 Pro max 256GB`,
      img: iphone,
      newprice: "74500с",
      oldprice: "81000с",
      rating: 3,
    };
    if (obj.name) {
      setData([...data, obj]);
    } else {
    }
  }, []);

  console.log(data);
  return (
    <div className="basket__hero">
      <div className="container">
        <div className="basket__content">
          <div className="basket__navlinks">
            <Link to={"/"} className="homelinkFrombasket">
              Главная
            </Link>
            <Link to={"/categories"} className="categoriesFrombasket">
              | Каталог
            </Link>
            <Link to={"/basket"} className="basketFromBasket">
              | Корзина
            </Link>
          </div>
          <div className="basket__delete">
            <p className="basket__logo">Корзина</p>
            <p className="deleteAll">удалить все</p>
          </div>
          {data.length !== 0 ? (
            <div className="basket__info">
              {data.map((item, index) => (
                <div key={index} className="basket__info__box">
                  <div className="basket__info__img">
                    <img src={item.img} alt="#" className="iphone14" />
                  </div>
                  <div className="basket__info__title">
                    <p className="basket__title__name">{item.name}</p>
                    <div className="basket__buttons">
                      <button onClick={minusFunc} className="minus">
                        -
                      </button>
                      <p className="count">{count}</p>
                      <button onClick={plusFunc} className="plus">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="basket__prices">
                    <p className="basket__new__price">{item.newprice}</p>
                    <p className="basket__old__price">{item.oldprice}</p>
                  </div>
                  <div className="basket__rating">
                    <img src={fullStar} alt="#" className="basket__star1" />
                    <img src={fullStar} alt="#" className="basket__star2" />
                    <img src={emptyStar} alt="#" className="basket__star3" />
                    <img src={emptyStar} alt="#" className="basket__star4" />
                    <img src={emptyStar} alt="#" className="basket__star5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="basket__info">
              <div className="basket__info__box">
                <h1 className="basket__info__title">Ваша корзина пуста</h1>
              </div>
            </div>
          )}
          <div className="basket__buy">
            <button className="buyFromBasket">Оформить заказ</button>
          </div>
        </div>
        <div className="basket__get">
          <p className="basket__getLogo">Способ получения</p>
          <Link className="basketToLogin" to={"/login"}>
            У меня есть аккаунт
          </Link>
        </div>
        <div className="basket__inputs">
          <Input className="nameFromBasket" placeholder="Фамилия и имя *" />
          <div className="basket__phoneAndEmail">
            <Input className="phoneFromBasket" placeholder="Телефон *" />
            <Input className="emailFromBasket" placeholder="Email" />
          </div>
        </div>
        <div className="basket__checkbox">
          <Checkbox className="checkFromBasket">Зарегистрироваться</Checkbox>
        </div>
        <div className="delivery">
          <div className="self__call">
            <p className="self__call__text">Самовывоз</p>
            <div className="self__call__location">
              <p className="self__call__location__name">
                г.Бишкек ул.Ахунбаева 132
              </p>
              <p className="self__call__graphik">пн-вс 09:00-20:00</p>
            </div>
            <p className="self__call__free">Бесплатно</p>
          </div>
          <div className="delivery__content">
            <p className="delivery__text">Доставка</p>
            <div className="delivery__district">
              <Dropdown className="districtChoose" menu={menuProps}>
                <Button>
                  <Space className="districtSpace">
                    Область
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <Dropdown className="cityChoose" menu={menuProps2}>
                <Button>
                  <Space className="citySpace">
                    Город
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
            <div className="delivery__street">
              <Input className="street" placeholder="Улица" />
              <Input className="home" placeholder="Дом/кв" />
            </div>
            <div className="delivery__price">
              <p className="delivery__price">от 200 сом (1-3 дня)</p>
            </div>
          </div>
        </div>
        <div className="paymentMethod">
          <div className="paymentMethod__title">
            <h1 className="paymentMethod__text">Способ оплаты</h1>
            <div className="bankCard">
              <p className="bankCard__text">Банковская карта</p>
              <div className="bankCard__images">
                <img src={visa} alt="#" />
                <img src={mastercard} alt="#" />
                <img src={maestro} alt="#" />
              </div>
            </div>
          </div>
          <div className="onlineWallet">
            <p className="onlineWallet__text">Электронный кошелек</p>
            <div className="onlineWallet__images">
              <img src={mbank} alt="#" />
              <img src={elcom} alt="#" />
              <img src={optima} alt="#" />
            </div>
          </div>
          <div className="cashPayment">
            <p className="cashPayment__text">
              Оплата наличными <br /> при получении
            </p>
          </div>
          <div className="installments">
            <p className="installments__text">
              Оформить <br /> рассрочку
            </p>
          </div>
        </div>
        <div className="qrcode">
          <h1 className="qrcode__text">
            Отсканируйте QR код с вашего электронного кошелька
          </h1>
          <img src={qrcode} alt="#" className="qrcode__img" />
          <div className="qrcode__button__title">
            <button className="qrcode__button">Заказ оплачен</button>
          </div>
        </div>
        <div className="accept">
          <div className="testPay">
            <h1 className="ThanksForPay">Спасибо за покупку!</h1>
            <img src={done} alt="#" className="checkmarkAccept" />
            <p className="resultPay">
              Наш менеджер свяжится с Вами в ближайшее время
            </p>
          </div>
          <div className="details">
            <p className="details__text">Детали заказа</p>
            <p className="detail__name">Iphone 14 Pro max 256gb Gold</p>
            <p className="detail__price">74500 сом</p>
            <p className="detail__typeDelivery">Самовывоз</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
