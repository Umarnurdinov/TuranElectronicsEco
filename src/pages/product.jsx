import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Facilities from "../components/facilities/facilities";
import InfoProduct from "../components/infoProduct";
import Review from "../components/review";

function Product() {
  return (
    <>
      <Header />
      <Facilities />
      <InfoProduct />
      <Review />
      <Footer />
    </>
  );
}

export default Product;
