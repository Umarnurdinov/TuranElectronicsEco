import { useEffect, useState } from "react";
import ItemAddmission from "../itemAddmission";
import "./style.scss";
import btnnext from "../../assets/btnNext.svg";
import btndown from "../../assets/btnDown.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function List({ products }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);
  const [viewAll, setViewAll] = useState(false);
  const [slicedProducts, setSlicedProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setSlicedProducts(products.slice(0, 4));
    }
  }, [products]);

  function lookAll() {
    setViewAll(!viewAll);
  }
  function selected(e) {
    const selected = e.target.classList.contains("selected");
    if (selected) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1 data-aos="zoom-in" className="list__title">
          Новое поступление
        </h1>
        <div className="recomended__lookAll">
          <a onClick={lookAll} data-aos="zoom-in" className="lookAll__text">
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
          ? slicedProducts.map((el) => (
              <ItemAddmission key={el.id} Newdata={el} />
            ))
          : products.map((el) => <ItemAddmission key={el.id} Newdata={el} />)}
      </div>
    </div>
  );
}

export default List;
