import React from "react";
import frame from "../../assets/Frame.png";
import facebook from "../../assets/FacebookForLogin.png";
import google from "../../assets/GoogleForLogin.png";
import telegram from "../../assets/TelegramForLogin.png";
import { Checkbox, Input } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

function Registr() {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <>
            <div className="registr">
                <div className="container">
                    <h1 className="register__logo">Регистрация</h1>
                    <div className="registr__content">
                        <p className="registr__content__title">
                            Авторизуйтесь, указав свои контактные данные, или{" "}
                            <br />
                            воспользовавшись перечисленными сервисами
                        </p>
                        <div className="registr__inputs">
                            <Input className="name" placeholder="Имя" />
                            <Input.Password
                                className="password"
                                placeholder="Пароль"
                            />
                            <Input.Password
                                className="passwordAccept"
                                placeholder="Потвердить пароль"
                            />
                            <Input
                                className="email"
                                placeholder="Email или телефон ..."
                            />
                            <Checkbox className="check" onChange={onChange}>
                                Я согласен с у͟с͟л͟о͟в͟и͟я͟м͟и͟ ͟о͟б͟р͟а͟б͟о͟т͟к͟и͟ <br />
                                персональных данных
                            </Checkbox>
                        </div>
                        <div className="registrButton">
                            <button className="registr__btn">
                                Регистрация
                            </button>
                            <img className="registrImg" src={frame} alt="#" />
                            <div className="login__reg">
                                <p className="registr__text">
                                    Уже регистрировались?
                                </p>
                                <Link className="login__link" to={"/login"}>
                                    Войти
                                </Link>
                            </div>
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

export default Registr;
