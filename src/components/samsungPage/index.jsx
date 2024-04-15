import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Facilities from "../facilities/facilities";
import { Link } from "react-router-dom";
import ItemAddmission from "../itemAddmission/index";
import List from "../listAddmission/index";
import MainSlider from "../mainslider/mainSlider";
import Brands from "../brands/brand";
import "./style.scss";
import samsungmini from "../../assets/samsungmini.png";
import axios from "axios";
import Filter from "../dropdownUpgrade";
import Footer from "../footer/footer";
let data = {
  img: `${samsungmini}`,
  name: "Samsung",
};

function getParam(text, param) {
  return param ? `${text}=${param}` : "";
}

function ApplePage() {
  const [products, setProducts] = useState([]);

  const [color, setColor] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState({
    maxPrice: "",
    minPrice: "",
  });
  const [model, setModel] = useState(null);
  const [categories, setCategories] = useState([]);
  const [priceChanged, setPriceChanged] = useState(false);

  useEffect(() => {
    setProducts([]);
    const categoriesArray = [
      getParam("category", category),
      getParam("color", color),
      getParam("max_price", price.maxPrice),
      getParam("min_price", price.minPrice),
      getParam("model", model),
    ];

    const categories = categoriesArray.filter((el) => el).join("&");
    axios
      .get(`https://turaneletronic.onrender.com/products/?${categories}`)
      .then((res) => {
        const filterProduct = res.data.filter((el) => el.brand == data.name);
        setProducts(filterProduct);
      });
  }, [category, color, priceChanged, model]);

  useEffect(() => {
    axios.get("https://turaneletronic.onrender.com/categories/").then((res) => {
      setCategories(res.data);
    });
  }, []);
  console.log(products);
  return (
    <>
      <Header />
      <Facilities />
      <div className="container">
        <div className="link__content">
          <Link className="toHome" to={"/"}>
            Главная /
          </Link>
          <Link className="toApplePage">Apple</Link>
        </div>
      </div>
      <Filter
        data={data}
        categoriesArray={categories}
        setProducts={products}
        setCategory={setCategory}
        setColor={setColor}
        setPrice={setPriceChanged}
        setPriceOriginal={setPrice}
        price={price}
        setModel={setModel}
      />
      <List products={products} />
      <MainSlider />
      <List products={products} />
      <Brands />
      <Footer />
    </>
  );
}

export default ApplePage;
