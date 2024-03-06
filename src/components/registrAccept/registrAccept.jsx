import React from "react";
import "./style.scss";
import { Input } from "antd";
import frame from "../../assets/Frame.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/FacebookForLogin.svg";
import google from "../../assets/GoogleForLogin.svg";
import telegram from "../../assets/TelegramForLogin.svg";

function RegistrAccept() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className="registrAccept">
        <div className="container">
          <h1 className="registrAccept__logo">Регистрация</h1>
          <div className="registrAccept__content">
            <p className="registrAccept__content__title">
              Авторизуйтесь, указав свои контактные данные, или <br />
              воспользовавшись перечисленными сервисами
            </p>
            <div className="otherloginFromRegistr">
              <img
                className="facebook"
                src={facebook}
                alt="https://www.facebook.com/?locale=ru_RU"
              />
              <img
                className="google"
                src={google}
                alt="https://www.google.ru/"
              />
              <img
                className="telegram"
                src={telegram}
                alt="https://web.telegram.org/k/"
              />
            </div>
            <img className="registrAcceptImg" src={frame} alt="#" />
            <p className="registrAcceptText">
              На номер телефона (070) 509-00-07 отправлено SMS-сообщение <br />
              для подтверждения регистрации.
            </p>
            <div className="registrAccept__inputs">
              <Input className="password" placeholder="Проверочный код " />
            </div>
            <p className="registrAcceptRestart">
              Вы можете запросить код через 00:28.
            </p>
            <div className="registrAcceptButton">
              <button className="registrAccept__btn">Потвердить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrAccept;
