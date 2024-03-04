import React from "react";
import Header from "../components/header/header";
import Cards from "../components/cards";
import Footer from "../components/footer/footer";
import Brands from "../components/brands/brand";

function Home() {
  return (
    <>
      <Header />
      <List />
      <Cards />
      <Brands />
      <Footer />
    </>
  );
}
export default Home;
