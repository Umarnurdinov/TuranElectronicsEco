import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BasketPage from "../components/basket";
import Recomends from "../components/recomends";
import Cards from "../components/cards";
import Brands from "../components/brands/brand";

function Basket() {
  return (
    <>
      <Header />
      <BasketPage />
      <Brands />
      <Footer />
    </>
  );
}

export default Basket;
