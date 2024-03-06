import React from "react";
import Header from "../components/header/header";
import Facilities from "../components/facilities/facilities"
import Mainslider from "../components/mainSlider/mainSlider"
import Brands from "../components/brands/brands";
import Accessories from "../components/accessories/accessories";

function Home() {
  return (
    <>
      <Header />
      <Facilities />
      <Mainslider />
      <Brands />
      <Accessories />
    </>
  );
}

export default Home;
