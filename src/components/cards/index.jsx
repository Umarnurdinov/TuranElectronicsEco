import React, { useEffect, useRef, useState } from "react";
import Recomends from "../recomends";
import btnnext from "../../assets/btnNext.svg";
import "./style.scss";
import btndown from "../../assets/btnDown.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards({ products }) {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
  const [viewAll, setViewAll] = useState(false);
  const [slicedProducts, setSlicedProducts] = useState([]);
  const [slicedProducts2, setSlicedProducts2] = useState([]);
  const [slicedProducts3, setSlicedProducts3] = useState([]);
  const [filterProducts, setFilterProducts] = useState(slicedProducts);
  const newProduct = [...products];
  console.log(newProduct);
  console.log(filterProducts);
  console.log(slicedProducts);
  useEffect(() => {
    if (products.length > 4) {
      setSlicedProducts(newProduct.slice(0, 4));
      setSlicedProducts(newProduct.slice(0, 4));
    }
    if (slicedProducts.length != products.length) {
      setSlicedProducts2(newProduct.slice(4, 8));
    }
    if (slicedProducts2.length != products.length) {
      setSlicedProducts3(newProduct.slice(8, products.length));
    }
  }, [products]);
  useEffect(() => {
    setFilterProducts(slicedProducts);
  }, [slicedProducts]);
  function lookAll() {
    setViewAll(!viewAll);
  }
  function nextFunc() {
    if (filterProducts == slicedProducts) {
      selectedPage2();
    } else if (filterProducts == slicedProducts2) {
      selectedPage3();
    } else {
      selectedPage1();
    }
  }
  function selectedPage1(e) {
    setFilterProducts(slicedProducts);
    setPage1(!page1);
    setPage2(false);
    setPage3(false);
  }
  function selectedPage2(e) {
    setFilterProducts(slicedProducts2);
    setPage1(false);
    setPage2(!page2);
    setPage3(false);
  }
  function selectedPage3(e) {
    setFilterProducts(slicedProducts3);
    setPage1(false);
    setPage2(false);
    setPage3(!page3);
  }
  return (
    <>
      <div className="container">
        <div className="recomended__title">
          <h1 data-aos="zoom-in" className="recomended__text">
            Рекомендуемые
          </h1>
          <div className="recomended__lookAll">
            <a data-aos="zoom-in" className="lookAll__text">
              {viewAll ? "Скрыть" : "Смотреть все"}
            </a>
            <a className="lookAll__btn">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                className="imgArrow"
                onClick={lookAll}
                src={viewAll ? btndown : btnnext}
                alt="#"
              />
            </a>
          </div>
        </div>
        <div className="cards">
          {!viewAll
            ? filterProducts.map((el) => <Recomends key={el.id} Newdata={el} />)
            : products.map((el) => <Recomends key={el.id} Newdata={el} />)}
        </div>
        <div className="recomends__footer">
          <div className="recomends__footer__title"></div>
          <div className="recomends__footer__title2">
            <div
              className="btn1"
              data-aos="zoom-in-down"
              data-aos-duration="800"
            >
              <button
                className={page1 ? "firstPageActive" : "firstPage"}
                onClick={(e) => selectedPage1(e)}
              >
                1
              </button>
            </div>
            <div
              className="btn2"
              data-aos="zoom-in-down"
              data-aos-duration="1200"
            >
              <button
                className={page2 ? "secondPageActive" : "secondPage"}
                onClick={(e) => selectedPage2(e)}
              >
                2
              </button>
            </div>
            <div
              className="btn3"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <button
                className={page3 ? "thirdPageActive" : "thirdPage"}
                onClick={(e) => selectedPage3(e)}
              >
                3
              </button>
            </div>
            <button onClick={nextFunc} className="nextPage">
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1800"
                src={btnnext}
                alt="#"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
