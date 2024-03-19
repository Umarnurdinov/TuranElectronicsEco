import React from "react";
import Header from "../header/header";
import Facilities from "../facilities/facilities";
import { Link } from "react-router-dom";
import Filter from "../dropdown";
import MainSlider from "../mainslider/mainSlider";
import Brands from "../brands/brand";
import List from "../listAddmission/index2";
import dysonmini from "../../assets/dysonmini.png";
let data = {
  img: `${dysonmini}`,
  name: "Dyson",
};
function DysonPage() {
  return (
    <>
      <Header />
      <Facilities />
      <div className="container">
        <div className="link__content">
          <Link className="toHome" to={"/"}>
            Главная /
          </Link>
          <Link className="toApplePage">Dyson</Link>
        </div>
      </div>
      <Filter data={data} />
      <List />
      <MainSlider />
      <List />
      <Brands />
    </>
  );
}

export default DysonPage;
