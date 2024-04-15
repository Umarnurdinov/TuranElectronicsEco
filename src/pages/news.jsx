import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import Facilities from "../components/facilities/facilities";
import NewsPage from "../components/news";
import Brands from "../components/brands/brand";

function News() {
  return (
    <>
      <Header />
      <Facilities />
      <NewsPage />
      <Brands />
      <Footer />
    </>
  );
}

export default News;
