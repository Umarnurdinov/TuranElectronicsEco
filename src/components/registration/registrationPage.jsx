// import React, { useEffect, useState } from "react";
// import frame from "../../assets/Frame.png";
// import facebook from "../../assets/FacebookForLogin.svg";
// import google from "../../assets/GoogleForLogin.svg";
// import telegram from "../../assets/TelegramForLogin.svg";
// import { Checkbox, Input } from "antd";
// import { Link } from "react-router-dom";
// import "./style.scss";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// function Registr() {
//   const [password2, setPassword2] = useState("");
//   const [acceptRule, setAcceptRule] = useState(false);
//   const [data, setData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();

//   const onChange = (e) => {
//     console.log(`checked = ${e.target.checked}`);
//   };
//   const registerHandler = () => {
//     if (acceptRule) {
//       axios
//         .post("https://turaneletronic.onrender.com/signup/", data)
//         .then((res) => {
//           console.log(res);
//           dispatch({ type: "EmailData", payload: res.data.email });
//         });
//     }
//   };

//   function clickCheckBox() {
//     setAcceptRule(!acceptRule);
//   }

//   return (
//     <>
//       <div className="registr">
//         <div className="container">
//           <h1 className="registr__logo">Регистрация</h1>
//           <div className="registr__content">
//             <p className="registr__content__title">
//               Авторизуйтесь, указав свои контактные данные, или <br />
//               воспользовавшись перечисленными сервисами
//             </p>
//             <div className="registr__inputs">
//               <Input
//                 className="name"
//                 placeholder="Имя"
//                 value={data.username}
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     username: e.target.value,
//                   })
//                 }
//               />
//               <Input
//                 className="name"
//                 placeholder="email"
//                 value={data.email}
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     email: e.target.value,
//                   })
//                 }
//               />
//               <Input.Password
//                 className="password"
//                 placeholder="Пароль"
//                 value={data.password}
//                 onChange={(e) =>
//                   setData({
//                     ...data,
//                     password: e.target.value,
//                   })
//                 }
//               />
//               <Input.Password
//                 className="passwordAccept"
//                 placeholder="Потвердить пароль"
//                 value={password2}
//                 onChange={(e) => {
//                   setPassword2(e.target.value);
//                 }}
//               />
//               <Checkbox
//                 onClick={clickCheckBox}
//                 className="check"
//                 onChange={onChange}
//               >
//                 Я согласен с у͟с͟л͟о͟в͟и͟я͟м͟и͟ ͟о͟б͟р͟а͟б͟о͟т͟к͟и͟ <br /> персональных данных
//               </Checkbox>
//             </div>
//             <div className="registrButton">
//               <button
//                 className="registr__btn"
//                 onClick={registerHandler}
//                 // disabled={!acceptRule}
//               >
//                 <Link className="registrBtn" to={"/registration/accept"}>
//                   Регистрация
//                 </Link>
//               </button>

//               {/* </Link> */}
//               <img className="registrImg" src={frame} alt="#" />
//               <div className="login">
//                 <p className="registr__text">Уже регистрировались?</p>
//                 <Link className="login__link" to={"/login"}>
//                   Войти
//                 </Link>
//               </div>
//             </div>
//             <p className="otherlogintext">Войти через</p>
//             <div className="otherlogin">
//               <img
//                 className="facebook"
//                 src={facebook}
//                 alt="https://www.facebook.com/?locale=ru_RU"
//               />
//               <img
//                 className="google"
//                 src={google}
//                 alt="https://www.google.ru/"
//               />
//               <img
//                 className="telegram"
//                 src={telegram}
//                 alt="https://web.telegram.org/k/"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Registr;
import React, { useEffect, useState } from "react";
import frame from "../../assets/Frame.png";
import facebook from "../../assets/FacebookForLogin.svg";
import google from "../../assets/GoogleForLogin.svg";
import telegram from "../../assets/TelegramForLogin.svg";
import { Checkbox, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import { useDispatch } from "react-redux";

function Registr() {
  const [password2, setPassword2] = useState("");
  const [acceptRule, setAcceptRule] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const registerHandler = () => {
    if (acceptRule) {
      console.log(data);
      axios
        .post("https://turaneletronic.onrender.com/signup/", data)
        .then((res) => {
          console.log(res);
          dispatch({ type: "EmailData", payload: res.data.email });
          nav("/");
        });
    }
  };

  function clickCheckBox() {
    setAcceptRule(!acceptRule);
  }

  return (
    <>
      <div className="registr">
        <div className="container">
          <h1 className="registr__logo">Регистрация</h1>
          <div className="registr__content">
            <p className="registrcontenttitle">
              Авторизуйтесь, указав свои контактные данные, или <br />
              воспользовавшись перечисленными сервисами
            </p>
            <div className="registr__inputs">
              <Input
                className="name"
                placeholder="Имя"
                value={data.username}
                onChange={(e) =>
                  setData({
                    ...data,
                    username: e.target.value,
                  })
                }
              />
              <Input
                className="name"
                placeholder="email"
                value={data.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
              <Input.Password
                className="password"
                placeholder="Пароль"
                value={data.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
              />
              <Input.Password
                className="passwordAccept"
                placeholder="Потвердить пароль"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              />
              <Checkbox
                onClick={clickCheckBox}
                className="check"
                onChange={onChange}
              >
                Я согласен с у͟с͟л͟о͟в͟и͟я͟м͟и͟ ͟о͟б͟р͟а͟б͟о͟т͟к͟и͟ <br /> персональных данных
              </Checkbox>
            </div>
            <div className="registrButton">
              <button
                className="registr__btn"
                onClick={registerHandler}
                // disabled={!acceptRule}
              >
                Регистрация
              </button>

              {/* </Link> */}
              <img className="registrImg" src={frame} alt="#" />
              <div className="login">
                <p className="registr__text">Уже регистрировались?</p>
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
