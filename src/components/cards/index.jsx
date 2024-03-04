import React from "react";
import Recomends from "../recomends";
import btnnext from "../../assets/btnNext.svg";
import "./style.scss";

function Cards() {
  return (
    <>
      <div className="container">
        <div className="recomended__title">
          <h1 className="recomended__text">Рекомендуемые</h1>
          <div className="recomended__lookAll">
            <a className="lookAll__text">Смотреть все</a>
            <a className="lookAll__btn">
              <img src={btnnext} alt="#" />
            </a>
          </div>
        </div>
        <div className="cards">
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
          <Recomends />
        </div>
        <div className="recomends__footer">
          <div className="recomends__footer__title"></div>
          <div className="recomends__footer__title2">
            <button className="firstPage">1</button>
            <button className="secondPage">2</button>
            <button className="thirdPage">3</button>
            <button className="nextPage">
              <img src={btnnext} alt="#" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
