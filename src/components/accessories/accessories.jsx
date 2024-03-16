import React from "react";
import "./accessories.scss";
import arrowalac from "../../assets/arrowRight.png";
import arrowarac from "../../assets/arrowLeft.png";
import { Link } from "react-router-dom";
import AccessoriesCard from "../accessoriesCard";

const Accessories = () => {
  return (
    <div className="accessories">
      <div className="container">
        <div className="accessories">
          <div className="accessories__titlemain">
            <div className="accessories__title">
              <h1 className="accessoriesText">Аксессуары</h1>
            </div>
            <div className="accessories__btns">
              <p className="lookAll">Смотреть все</p>
              <button className="btnLeft">
                <img
                  className="leftArrow"
                  src={arrowarac}
                  alt="Левая-Стрелка-Аксессуары"
                />
              </button>
              <button className="btnRight">
                <img
                  className="rightArrow"
                  src={arrowalac}
                  alt="Правая-Стрелка-Аксессуары"
                />
              </button>
            </div>
          </div>
          <div className="accessories__blockmain">
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
            <AccessoriesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
