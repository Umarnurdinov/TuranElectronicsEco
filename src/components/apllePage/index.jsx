import React from "react";
import Header from "../header/header";
import Facilities from "../facilities/facilities";
import { Link } from "react-router-dom";
import Filter from "../dropdown";
import ItemAddmission from "../itemAddmission/index2";
import List from "../listAddmission/index2";
import MainSlider from "../mainslider/mainSlider";
import Brands from "../brands/brand";
import "./style.scss";
import applemini from "../../assets/applemini.png";
let data = {
  img: `${applemini}`,
  name: "Apple",
};
function ApplePage() {
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
      <Filter data={data} />
      <List />
      <MainSlider />
      <List />
      <Brands />
    </>
  );
}

export default ApplePage;
