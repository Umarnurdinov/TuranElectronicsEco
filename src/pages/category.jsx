import React from "react";
import Header from "../components/header/header";
import Facilities from "../components/facilities/facilities";
import BrandsContent from "../components/brandsFromAmantur/brandsContent";
import Footer from "../components/footer/footer";

function CategoryPage() {
  return (
    <>
      <Header />
      <Facilities />
      <BrandsContent />
      <Footer />
    </>
  );
}

export default CategoryPage;
