import React from "react";
import Header from "../components/header/header";
import Facilities from "../components/facilities/facilities"
import Mainslider from "../components/mainSlider/mainSlider"
import Brands from "../components/brands/brands";
import Accessories from "../components/accessories/accessories";
import Cards from "../components/cards";
import Footer from "../components/footer/footer";
import Brands from "../components/brands/brand";
import List from "../components/listAddmission";

function Home() {
  return (
    <>
      <Header />
      <Facilities />
      <Mainslider />
      <Brands />
      <Accessories />
      <List />
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
