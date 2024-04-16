import React, { useState } from "react";
import "./style.scss";
import { Input } from "antd";
import frame from "../../assets/Frame.png";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../assets/FacebookForLogin.svg";
import google from "../../assets/GoogleForLogin.svg";
import telegram from "../../assets/TelegramForLogin.svg";
import axios from "axios";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();

  const nav = useNavigate();

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  function signinHandler() {
    axios
      .post("https://turaneletronic.onrender.com/login/", authData)
      .then((res) => {
        dispatch({ type: "EmailData", payload: res.data.email });
        nav("/");
      });
  }

  return (
    <>
      <div className="login">
        <div className="container">
          <h1 className="login__logo">Авторизация</h1>
          <div className="login__content">
            <p className="logincontenttitle">
              Авторизуйтесь, указав свои контактные данные, или <br />
              воспользовавшись перечисленными сервисами
            </p>
            <div className="login__inputs">
              <Input
                value={authData.email}
                onChange={(e) =>
                  setAuthData({
                    ...authData,
                    email: e.target.value,
                  })
                }
                className="email"
                placeholder="Email или телефон ..."
              />
              <Input.Password
                className="password"
                placeholder="Пароль"
                value={authData.password}
                onChange={(e) =>
                  setAuthData({
                    ...authData,
                    password: e.target.value,
                  })
                }
              />
              <div className="forgotPassword">
                <Link className="forgotPasswordLink" to={"/forgot"}>
                  Забыли пароль?
                </Link>
              </div>
            </div>
            <div className="loginButton">
              <button className="registr__btn" onClick={signinHandler}>
                Войти
              </button>
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
