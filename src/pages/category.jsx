import React from "react";
import Header from "../components/header/header";
import Facilities from "../components/facilities/facilities";
import BrandsContent from "../components/brandsFromAmantur/brandsContent";
import Footer from "../components/footer/footer";
import MainSlider from "../components/mainslider/mainSlider";
import Recomends from "../components/recomends";

function CategoryPage() {
  return (
    <>
      <Header />
      <Facilities />
      <MainSlider />
      <BrandsContent />
      <Footer />
    </>
  );
}

export default CategoryPage;
