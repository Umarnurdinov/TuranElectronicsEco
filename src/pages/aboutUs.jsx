import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Facilities from "../components/facilities/facilities";
import Brands from "../components/brands/brand";
import AboutUsPage from "../components/aboutUs";

function AboutUs() {
  return (
    <>
      <Header />
      <Facilities />
      <AboutUsPage />
      <Brands />
      <Footer />
    </>
  );
}

export default AboutUs;
