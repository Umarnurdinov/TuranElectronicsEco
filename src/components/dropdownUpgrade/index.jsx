import React, { useEffect, useState } from "react";
import DropdownBase from "../dropdownBase";
import { Button, Dropdown, Input, Space } from "antd";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import setting from "../../assets/setting.svg";
import close from "../../assets/close.svg";
import check from "../../assets/checkFilter.svg";
import checkFull from "../../assets/checkFilterFull.svg";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

let categories = null;
let model = null;
let memory = null;

function Filter({
  data,
  categoriesArray,
  setProducts,
  setCategory,
  setColor,
  setPrice,
  setPriceOriginal,
  price,
  setModel,
}) {
  const [inputs, setInputs] = useState(false);
  const [inputsForPage, setInputsForPage] = useState(false);
  const [colors, setColors] = useState(false);
  const [colorsAll, setColorsAll] = useState(false);
  const [adaptive, setAdaptive] = useState(false);
  const [filter, setFilter] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [checkBrand, setCheckBrand] = useState(false);
  const [checkModel, setCheckModel] = useState(false);
  const [checkMemory, setCheckMemory] = useState(false);
  function dropdownFunc() {
    setInputs(!inputs);
  }
  function dropdownFuncAll() {
    setInputsForPage(!inputsForPage);
  }
  function dropdownColorFunc() {
    setColors(!colors);
  }
  function dropdownColorFuncAll() {
    setColorsAll(!colorsAll);
  }
  function categoriesChange(value) {
    let currentCategory = categoriesArray.find((el) => el.name == value);
    setCategory(currentCategory.id);
  }
  function categoriesChangeAll(e) {
    if (
      e.target.innerHTML ==
      `<p><img src="/src/assets/checkFilterFull.svg" alt="">${e.target.innerText}</p>`
    ) {
      e.target.innerHTML = `<p><img src="/src/assets/checkFilter.svg" alt="">${e.target.innerText}</p>`;
    } else {
      e.target.innerHTML = `<p><img src="/src/assets/checkFilterFull.svg" alt=""/>${e.target.innerText}</p>`;
    }
    setCheckBrand(!checkBrand);
    let currentCategory = categoriesArray.find(
      (el) => el.name == e.target.innerText
    );
    setCategory(currentCategory.id);
  }
  function modelsChangeAll(e) {
    if (
      e.target.innerHTML ==
      `<p><img src="/src/assets/checkFilterFull.svg" alt="">${e.target.innerText}</p>`
    ) {
      e.target.innerHTML = `<p><img src="/src/assets/checkFilter.svg" alt="">${e.target.innerText}</p>`;
    } else {
      e.target.innerHTML = `<p><img src="/src/assets/checkFilterFull.svg" alt=""/>${e.target.innerText}</p>`;
    }
    setCheckModel(!checkModel);
    let currentCategory = setProducts.find(
      (el) => el.name == e.target.innerText
    );
    setModel(currentModel.id);
  }
  function memoryChangeAll(e) {
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    }, []);
    if (
      e.target.innerHTML ==
      `<p><img src="/src/assets/checkFilterFull.svg" alt="">${e.target.innerText}</p>`
    ) {
      e.target.innerHTML = `<p><img src="/src/assets/checkFilter.svg" alt="">${e.target.innerText}</p>`;
    } else {
      e.target.innerHTML = `<p><img src="/src/assets/checkFilterFull.svg" alt=""/>${e.target.innerText}</p>`;
    }
  }

  function chooseColor(adelina) {
    setColor(adelina);
  }
  function priceAccept() {
    setPrice((state) => !state);
    // setInputs(false);
  }
  function modelChange(value) {
    let currentModel = setProducts.find((el) => el.name == value);
    setModel(currentModel.id);
  }
  function dropdownFuncAdaptive() {
    setAdaptive(!adaptive);
  }
  function showFilterAll() {
    setFilter(!filter);
  }
  function dropdownBrandFunc() {
    setDropdown(!dropdown);
  }
  function dropdownModelFunc() {
    setDropdown2(!dropdown2);
  }
  function dropdownMemoryFunc() {
    setDropdown3(!dropdown3);
  }
  function checkFunc(e) {
    // if (
    //   e &&
    //   e.target.src == `http://localhost:5174/src/assets/checkFilterFull.svg`
    // ) {
    //   e.target.src = `${check}`;
    // } else if (
    //   e &&
    //   e.target.src == `http://localhost:5174/src/assets/checkFilter.svg`
    // ) {
    //   e.target.src = `${checkFull}`;
    // }
  }
  if (checkFunc()) {
  }
  categories = categoriesArray.map((el) => ({
    name: `${data.name}`,
    key: el.id,
    label: el.name,
  }));
  model = setProducts.map((el) => ({
    name: "Модель",
    key: el.id,
    label: el.model,
  }));
  memory = [...new Set(setProducts.flatMap((el) => el.memories))].map(
    (mem, idx) => ({ name: "Память", key: idx.toString(), label: mem })
  );

  return (
    <>
      <div className="filter">
        <div className="container">
          <div className="filter__content">
            <div className="filter__content__logo">
              <img
                src={data.img}
                alt=""
                className="filter__content__logo__img"
              />
              <DropdownBase
                onValueChange={categoriesChange}
                props={categories}
              />
            </div>
            <div className="filter__content__model">
              <DropdownBase
                data-aos="zoom-in-down"
                props={model}
                onValueChange={modelChange}
              />
            </div>
            <div className="filter__content__memory">
              <DropdownBase
                props={memory}
                onValueChange={(value) => console.log(value)}
              />
            </div>
            <div className="filter__content__price">
              <div className="inputs">
                <p className="price__text" onClick={dropdownFunc}>
                  Цена,$
                  <img
                    style={{ width: "18px" }}
                    src={inputs ? up : down}
                    alt=""
                  />
                </p>
                {inputs ? (
                  <>
                    <div className="price__inputs">
                      <Input
                        onChange={(e) =>
                          setPriceOriginal({
                            ...price,
                            minPrice: e.target.value,
                          })
                        }
                        value={price.minPrice}
                        placeholder="0"
                        className="minPrice"
                      />
                      <Input
                        onChange={(e) =>
                          setPriceOriginal({
                            ...price,
                            maxPrice: e.target.value,
                          })
                        }
                        value={price.maxPrice}
                        placeholder="9999999"
                        className="maxPrice"
                      />
                      <button className="acceptBtn" onClick={priceAccept}>
                        Применить
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="filter__content__color">
              <p className="color__text" onClick={dropdownColorFunc}>
                Цвет
                <img
                  style={{ width: "18px" }}
                  src={colors ? up : down}
                  alt="#"
                />
              </p>
              {colors ? (
                <div className="colors">
                  <p className="all">Все</p>
                  <div className="colorsFilter">
                    <p
                      onClick={() => chooseColor("black")}
                      className="black"
                    ></p>
                    <p
                      onClick={() => chooseColor("brown")}
                      className="brown"
                    ></p>
                    <p onClick={() => chooseColor("red")} className="red"></p>
                    <p onClick={() => chooseColor("pink")} className="pink"></p>
                    <p
                      onClick={() => chooseColor("white")}
                      className="white"
                    ></p>
                    <p
                      onClick={() => chooseColor("green")}
                      className="green"
                    ></p>
                    <p onClick={() => chooseColor("gold")} className="gold"></p>
                    <p
                      onClick={() => chooseColor("yellow")}
                      className="yellow"
                    ></p>
                    <p onClick={() => chooseColor("grey")} className="grey"></p>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="filterAll">
              <p onClick={showFilterAll} className="filterAll__text">
                Фильтр <img src={setting} alt="#" className="setting" />
              </p>
              {filter ? (
                <div data-aos="fade-left" className="filterAll__window">
                  <div className="filterAll__title">
                    <p data-aos="fade-left" className="filterAll__title__text">
                      Фильтр
                    </p>
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="2400"
                      onClick={showFilterAll}
                      className="close"
                      src={close}
                      alt="#"
                    />
                  </div>
                  <div
                    data-aos-duration="1000"
                    data-aos="zoom-in-down"
                    className="filterAll__content__price"
                  >
                    <div className="inputsAll">
                      <div className="inputs__text">
                        <p className="price__textAll" onClick={dropdownFuncAll}>
                          Цена,$
                        </p>
                        <img
                          onClick={dropdownFuncAll}
                          className="priceImg"
                          style={{ width: "18px" }}
                          src={inputsForPage ? up : down}
                          alt=""
                        />
                      </div>
                      {inputsForPage ? (
                        <>
                          <div className="price__inputsAll">
                            <Input
                              onChange={(e) =>
                                setPriceOriginal({
                                  ...price,
                                  minPrice: e.target.value,
                                })
                              }
                              value={price.minPrice}
                              placeholder="0"
                              className="minPrice"
                            />
                            <Input
                              onChange={(e) =>
                                setPriceOriginal({
                                  ...price,
                                  maxPrice: e.target.value,
                                })
                              }
                              value={price.maxPrice}
                              placeholder="9999999"
                              className="maxPrice"
                            />
                            <button className="acceptBtn" onClick={priceAccept}>
                              Применить
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div
                    data-aos-duration="1300"
                    data-aos="zoom-in-down"
                    className="filterAll__content__logo"
                  >
                    <div className="dropdown__brand">
                      <div className="dropdownBrand">
                        <p
                          onClick={dropdownBrandFunc}
                          className="dropdown__brand__logo"
                        >
                          Бренды
                        </p>
                        <img
                          className="imgBrand"
                          src={!dropdown ? down : up}
                          alt="#"
                        />
                      </div>
                      {dropdown
                        ? categories &&
                          categories.map((el) => (
                            <div
                              onClick={(e) => categoriesChangeAll(e)}
                              // onClick={(e) => checkFunc(e)}
                              className="brandFilter"
                            >
                              {/* <img src={check} alt="" /> */}
                              <p>
                                <img src={check} alt="" />
                                {"  "}
                                {el.label}
                              </p>
                            </div>
                          ))
                        : null}
                    </div>
                    {/* <DropdownBase
                      className={"dropdownFilterLogo"}
                      onValueChange={categoriesChange}
                      props={categories}
                    /> */}
                  </div>
                  <div
                    data-aos-duration="1600"
                    data-aos="zoom-in-down"
                    className="filterAll__content__color"
                  >
                    <p className="color__text" onClick={dropdownColorFuncAll}>
                      Цвет
                      <img
                        style={{ width: "18px" }}
                        src={colorsAll ? up : down}
                        alt="#"
                      />
                    </p>
                    {colorsAll ? (
                      <div className="colorsAll">
                        <p className="all">Все</p>
                        <div className="colorsFilter">
                          <p
                            onClick={() => chooseColor("black")}
                            className="black"
                          ></p>
                          <p
                            onClick={() => chooseColor("brown")}
                            className="brown"
                          ></p>
                          <p
                            onClick={() => chooseColor("red")}
                            className="red"
                          ></p>
                          <p
                            onClick={() => chooseColor("pink")}
                            className="pink"
                          ></p>
                          <p
                            onClick={() => chooseColor("white")}
                            className="white"
                          ></p>
                          <p
                            onClick={() => chooseColor("green")}
                            className="green"
                          ></p>
                          <p
                            onClick={() => chooseColor("gold")}
                            className="gold"
                          ></p>
                          <p
                            onClick={() => chooseColor("yellow")}
                            className="yellow"
                          ></p>
                          <p
                            onClick={() => chooseColor("grey")}
                            className="grey"
                          ></p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    data-aos-duration="1900"
                    data-aos="zoom-in-down"
                    className="filter__content__models"
                  >
                    <div className="filterAll__content__model">
                      <div className="dropdown__model">
                        <div className="dropdownBrand">
                          <p
                            onClick={dropdownModelFunc}
                            className="dropdown__model__logo"
                          >
                            Модель
                          </p>
                          <img
                            src={!dropdown2 ? down : up}
                            alt=""
                            className="imgBrand"
                          />
                        </div>
                        <div
                          className={dropdown2 ? "modelScroll" : "modelNull"}
                        >
                          {dropdown2
                            ? model &&
                              model.map((el) => (
                                <div
                                  onClick={(e) => modelsChangeAll(e)}
                                  className="modelFilter"
                                >
                                  {/* <img src={check} alt="" /> */}
                                  <p>
                                    <img src={check} alt="" />
                                    {el.label}
                                  </p>
                                </div>
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos-duration="2100"
                    data-aos="zoom-in-down"
                    className="filter__content__memorys"
                  >
                    <div className="filterAll__content__memory">
                      <div className="dropdown__memory">
                        <div className="dropdownBrand">
                          <p
                            onClick={dropdownMemoryFunc}
                            className="dropdown__memory__logo"
                          >
                            Память
                          </p>
                          <img
                            src={!dropdown3 ? down : up}
                            alt=""
                            className="imgBrand"
                          />
                        </div>
                        <div
                          className={dropdown2 ? "memoryScroll" : "memoryNull"}
                        >
                          {dropdown3
                            ? memory &&
                              memory.map((el) => (
                                <div
                                  onClick={(e) => memoryChangeAll(e)}
                                  className="memoryFilter"
                                >
                                  {/* <img src={check} alt="" /> */}
                                  <p>
                                    <img src={check} alt="" />
                                    {el.label}
                                  </p>
                                </div>
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                    {/* <DropdownBase
                      props={memory}
                      onValueChange={(value) => console.log(value)}
                    /> */}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="filterForAdaptive">
        <div className="container">
          <div className="filter__content__logo">
            <img src={data.img} alt="" className="filter__content__logo__img" />
            <p className="filterForAdaptiveText">Фильтр</p>
            <img
              onClick={dropdownFuncAdaptive}
              src={!adaptive ? down : up}
              alt="#"
              className="dropdownArrow"
            />
          </div>
          {adaptive ? (
            <>
              <div className="filter__content">
                <div className="filter__content__logos">
                  <DropdownBase
                    onValueChange={categoriesChange}
                    props={categories}
                  />
                </div>
                <div className="filter__content__model">
                  <DropdownBase props={model} onValueChange={modelChange} />
                </div>
                <div className="filter__content__memory">
                  <DropdownBase
                    props={memory}
                    onValueChange={(value) => console.log(value)}
                  />
                </div>
                <div className="filter__content__price">
                  <div className="inputs">
                    <p className="price__text" onClick={dropdownFunc}>
                      Цена,$
                      <img
                        style={{ width: "18px" }}
                        src={inputs ? up : down}
                        alt=""
                      />
                    </p>
                    {inputs ? (
                      <>
                        <div className="price__inputs">
                          <Input
                            onChange={(e) =>
                              setPriceOriginal({
                                ...price,
                                minPrice: e.target.value,
                              })
                            }
                            value={price.minPrice}
                            placeholder="0"
                            className="minPrice"
                          />
                          <Input
                            onChange={(e) =>
                              setPriceOriginal({
                                ...price,
                                maxPrice: e.target.value,
                              })
                            }
                            value={price.maxPrice}
                            placeholder="9999999"
                            className="maxPrice"
                          />
                          <button className="acceptBtn" onClick={priceAccept}>
                            Применить
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="filter__content__color">
                  <p className="color__text" onClick={dropdownColorFunc}>
                    Цвет
                    <img
                      style={{ width: "18px" }}
                      src={colors ? up : down}
                      alt="#"
                    />
                  </p>
                  {colors ? (
                    <div className="colors">
                      <p className="all">Все</p>
                      <div className="colorsFilter">
                        <p
                          onClick={() => chooseColor("black")}
                          className="black"
                        ></p>
                        <p
                          onClick={() => chooseColor("brown")}
                          className="brown"
                        ></p>
                        <p
                          onClick={() => chooseColor("red")}
                          className="red"
                        ></p>
                        <p
                          onClick={() => chooseColor("pink")}
                          className="pink"
                        ></p>
                        <p
                          onClick={() => chooseColor("white")}
                          className="white"
                        ></p>
                        <p
                          onClick={() => chooseColor("green")}
                          className="green"
                        ></p>
                        <p
                          onClick={() => chooseColor("gold")}
                          className="gold"
                        ></p>
                        <p
                          onClick={() => chooseColor("yellow")}
                          className="yellow"
                        ></p>
                        <p
                          onClick={() => chooseColor("grey")}
                          className="grey"
                        ></p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Filter;
