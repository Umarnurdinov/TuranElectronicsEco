import React, { useEffect } from "react";
import "./accessories.scss";
import arrowalac from "../../assets/arrowRight.svg";
import arrowarac from "../../assets/arrowLeft.svg";
import adapter from "../../assets/image17.png";
import { Link } from "react-router-dom";
import AccessoriesCard from "../accessoriesCard";
import AOS from "aos";
import "aos/dist/aos.css";

export const data = [
  {
    img: { adapter },
    price: 200,
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
    img: { adapter },
    price: 700,
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
    img: { adapter },
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
    img: { adapter },
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
  {
    img: { adapter },
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
  {
    img: { adapter },
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
  {
    img: { adapter },
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
function Accessories() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="accessories">
      <div className="container">
        <div className="accessories">
          <div className="accessories__titlemain">
            <div className="accessories__title">
              <h1 data-aos="zoom-in" className="accessoriesText">
                Аксессуары
              </h1>
            </div>
            <div className="accessories__btns">
              <p data-aos="zoom-in-up" className="lookAll">
                Смотреть все
              </p>
              <button className="btnLeft">
                <img
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                  className="leftArrow"
                  src={arrowarac}
                  alt="Левая-Стрелка-Аксессуары"
                />
              </button>
              <button className="btnRight">
                <img
                  data-aos="zoom-in-right"
                  data-aos-duration="1500"
                  className="rightArrow"
                  src={arrowalac}
                  alt="Правая-Стрелка-Аксессуары"
                />
              </button>
            </div>
          </div>
          <div className="accessories__blockmain">
            {data.map((el, index) => (
              <AccessoriesCard data={el} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
