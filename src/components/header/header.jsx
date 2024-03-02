import React from "react";
import bigLogo from "../../assets/bigLogo.png";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./style.scss";
import health from "../../assets/health.svg";
import basket from "../../assets/basket.svg";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
// import logomini from "../../assets/Logomini.png";
import line from "../../assets/line.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="start">
              <img src={line} alt="#" />
              <img src={search} alt="#" />
            </div>
            <div className="header__biglogo">
              <img src={bigLogo} className="biglogo" />
            </div>
            <div className="header__center">
              <img className="logo" src={Logo} alt="#" />
              <nav className="header__nav">
                <Link to={"/"} className="header__nav__link">
                  Главная
                </Link>
                <Link to={"/categories"} className="header__nav__link">
                  Категория
                </Link>
                <Link to={"/news"} className="header__nav__link">
                  Новости
                </Link>
                <Link to={"/aboutUs"} className="header__nav__link">
                  О нас
                </Link>
              </nav>
            </div>
            <div className="basket">
              <img src={basket} alt="#" />
            </div>
            <div className="header__info">
              <div className="header__btns">
                <button className="header__health__btn">
                  <img className="health" src={health} alt="#" />
                </button>
                <button className="header__basket__btn">
                  <img className="basketImg" src={basket} alt="#" />
                </button>
                <button className="header__profile__btn">
                  <img className="profile" src={profile} alt="#" />
                </button>
              </div>
              <div className="inputs">
                <input
                  placeholder="Поиск..."
                  type="text"
                  className="header__input"
                />
                <img className="header__search" src={search} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
