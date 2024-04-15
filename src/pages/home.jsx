import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Cards from "../components/cards";
import Footer from "../components/footer/footer";
import Brands from "../components/brands/brand";
import Facilities from "../components/facilities/facilities";
import BrandsContent from "../components/brandsFromAmantur/brandsContent";
import MainSlider from "../components/mainslider/mainSlider";
import Accessories from "../components/accessories/accessories";
import List from "../components/listAddmission";
import Review from "../components/review";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const data = useSelector((state) => state.data.products);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://turaneletronic.onrender.com/products/").then((res) => {
      setFilteredData(res.data);
      dispatch({ type: "DataInfo", payload: res.data });
    });
  }, []);
  function handleFilterInputChange(e) {
    setValue(e.target.value);
    const inputValue = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setFilteredData(filtered);
  }
  return (
    <>
      <Header handleFilterInputChange={handleFilterInputChange} />
      {value.length == 0 ? (
        <>
          <Facilities />
          <MainSlider />
          <BrandsContent />
          <Accessories />
        </>
      ) : null}
      <List products={filteredData} />
      <Cards products={filteredData} />
      <Brands />
      <Footer />
    </>
  );
}
export default Home;
