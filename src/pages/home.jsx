import React from "react";
import Header from "../components/header/header";
import Cards from "../components/cards";
import Footer from "../components/footer/footer";
import Brands from "../components/brands/brand";
import List from "../components/listAddmission";

function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Brands />
      <Footer />
    </>
  );
}
export default Home;
