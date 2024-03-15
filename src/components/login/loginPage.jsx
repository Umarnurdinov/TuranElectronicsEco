import React from "react";
import "./style.scss";
import { Input } from "antd";
import frame from "../../assets/Frame.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/FacebookForLogin.svg";
import google from "../../assets/GoogleForLogin.svg";
import telegram from "../../assets/TelegramForLogin.svg";

function LoginPage() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <div className="login">
        <div className="container">
          <h1 className="login__logo">Авторизация</h1>
          <div className="login__content">
            <p className="login__content__title">
              Авторизуйтесь, указав свои контактные данные, или <br />
              воспользовавшись перечисленными сервисами
            </p>
            <div className="login__inputs">
              <Input className="email" placeholder="Email или телефон ..." />
              <Input.Password className="password" placeholder="Пароль" />
              <div className="forgotPassword">
                <Link className="forgotPasswordLink" to={"/forgot"}>
                  Забыли пароль?
                </Link>
              </div>
            </div>
            <div className="loginButton">
              <button className="registr__btn">Войти</button>
              <div className="registr">
                <p className="login__text">Впервые у нас?</p>
                <Link className="registr__link" to={"/registration"}>
                  Регистрация
                </Link>
              </div>
              <img className="loginImg" src={frame} alt="#" />
            </div>
            <p className="otherlogintext">Войти через</p>
            <div className="otherlogin">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
