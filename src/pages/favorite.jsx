import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";
import ItemAddmission from "../components/itemAddmission/index";
import Brands from "../components/brands/brand";

function Favorite() {
  const dataLike = useSelector((state) => state.like.products);
  return (
    <>
      <Header />
      <div className="container">
        <div
          className="favorite__list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "40px",
            marginTop: "45px",
          }}
        >
          {dataLike.map((el, idx) => (
            <ItemAddmission key={idx} Newdata={el} />
          ))}
        </div>
      </div>
      <Brands />
      <Footer />
    </>
  );
}

export default Favorite;
