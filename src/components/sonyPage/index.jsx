import React from "react";
import Header from "../header/header";
import Facilities from "../facilities/facilities";
import { Link } from "react-router-dom";
import Filter from "../dropdown";
import List from "../listAddmission/index2";
import MainSlider from "../mainslider/mainSlider";
import Brands from "../brands/brand";
import sonymini from "../../assets/playstationmini.png";
let data = {
  img: `${sonymini}`,
  name: "Playstation",
};
function SonyPage() {
  return (
    <>
      <Header />
      <Facilities />
      <div className="container">
        <div className="link__content">
          <Link className="toHome" to={"/"}>
            Главная /
          </Link>
          <Link className="toApplePage">Sony</Link>
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

export default SonyPage;
