import React from "react";
import Recomends from "../recomends";
import btnnext from "../../assets/btnNext.svg";
import "./style.scss";
import watch from "../../assets/watch.png";

export const data = [
  {
    img: { watch },
    price: 3000,
    title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
    description:
      "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
    raiting: 3,
    date: new Date().getTime(),
    colors: ["#00ffff", "#fff", "#f2e4c9"],
    id: 1,
    ch: [
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
    ],
    inStock: true,
  },
  {
    img: { watch },
    price: 3000,
    title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
    description:
      "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
    raiting: 1,
    date: 1706762854 * 1000,
    colors: ["#181f27", "#00ffff", "#fff"],
    id: 2,
    inStock: false,
  },
  {
    img: { watch },
    price: 3000,
    title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
    description:
      "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
    raiting: 3,
    date: new Date().getTime(),
    colors: ["#604d4d", "#f2e4c9", "black"],
    id: 3,
    inStock: true,
  },
  {
    img: { watch },
    price: 3000,
    title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
    description:
      "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
    raiting: 2,
    date: 1706762854 * 1000,
    colors: ["#604d4d", "#00ffff", "#fff"],
    id: 4,
    inStock: false,
  },
];

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
          {data.map((el) => (
            <Recomends Newdata={el} />
          ))}
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
