import { Link } from "react-router-dom";
import "./style.scss";
import bigLogo from "../../assets/bigLogo.png";
import Logo from "../../assets/Logo.png";
import health from "../../assets/health.svg";
import basket from "../../assets/basket.svg";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import line from "../../assets/line.svg";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

function Header({ handleFilterInputChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const basketCounter = useSelector((state) => state.basket.counter);
  const likeCounter = useSelector((state) => state.like.counter);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__content">
            <div className="icon__and__menu">
              <div className="start">
                {isMenuOpen ? null : (
                  <img onClick={toggleMenu} src={line} alt="#" />
                )}
                <img src={search} alt="#" />
              </div>
            </div>
            <div className="header__biglogo">
              <img src={bigLogo} className="biglogo" />
            </div>
            <div className="header__center">
              <Link to={"/"} className="header__nav__linkHome">
                <img className="logo" src={Logo} alt="#" />
              </Link>
              <nav className="header__nav">
                <Link to={"/"} className="header__nav__link">
                  Главная
                </Link>
                <Link to={"/categoryPage"} className="header__nav__link">
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
              <Link to={"/basket"}>
                <img src={basket} alt="#" />
                <span className="basket__counter">{basketCounter}</span>
              </Link>
            </div>
            <div className="header__info">
              <div className="header__btns">
                <button className="header__health__btn">
                  <Link to={"/favorite"}>
                    <img className="health" src={health} alt="#" />
                    <span className="basket__counter">{likeCounter}</span>
                  </Link>
                </button>
                <button className="header__basket__btn">
                  <Link to={"/basket"}>
                    <img className="basketImg" src={basket} alt="#" />
                    <span className="basket__counter">{basketCounter}</span>
                  </Link>
                </button>
                <button className="header__profile__btn">
                  <Link to={"/registration"}>
                    <img className="profile" src={profile} alt="#" />
                  </Link>
                </button>
              </div>
              <div className="inputs">
                <input
                  placeholder="Поиск..."
                  type="text"
                  className="header__input"
                  onChange={handleFilterInputChange}
                />
                <img className="header__search" src={search} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container">
          <div data-aos="fade-right" className="menu">
            <div data-aos="fade-right" className="menu__nav">
              <IoMdClose className="close" onClick={toggleMenu} />
              <Link to={"/"} className="menu__nav__links">
                Главная
              </Link>
              <Link to={"/categoryPage"} className="menu__nav__links">
                Категория
              </Link>
              <Link to={"/news"} className="menu__nav__links">
                Новости
              </Link>
              <Link to={"/aboutUs"} className="menu__nav__links">
                О нас
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
