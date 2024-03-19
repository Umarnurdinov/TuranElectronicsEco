import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../../assets/phone.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "swiper/css";
import "./style.scss";
import InfoProductCard from "../infoProductCard";

export const data = [
  {
    img: { product },
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
    img: { product },
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
    img: { product },
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
    img: { product },
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
function InfoProduct({ dataProduct }) {
  return (
    <>
      <div className="info">
        <div className="container">
          <div className="info__pages">
            <Link className="toHome" to={"/"}>
              Главная
            </Link>
            <Link className="toCatalog" to={"/catalog"}>
              / Каталог
            </Link>
            <Link className="toIphonePage" to={"iphonPage"}>
              / Iphone
            </Link>
            <Link className="toIphone14Page">/ Iphone 14 Pro max</Link>
          </div>
          <InfoProductCard data={data} />
        </div>
      </div>
    </>
  );
}

export default InfoProduct;
