import React from "react";
import Header from "../components/header/header";
import Cards from "../components/cards";
import Footer from "../components/footer/footer";
import Brands from "../components/brands/brand";

import Facilities from "../components/facilities/facilities";
import BrandsContent from "../components/brandsFromAmantur/brandsContent";
import MainSlider from "../components/mainslider/mainSlider";
import Accessories from "../components/accessories/accessories";
import List from "../components/listAddmission/index2";

function Home() {
  return (
    <>
      <Header />
      <Facilities />
      <MainSlider />
      <BrandsContent />
      <Accessories />
      <List />
      <Cards />
      <Brands />
      <Footer />
    </>
  );
}
export default Home;
