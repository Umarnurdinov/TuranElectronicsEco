import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Facilities from "../components/facilities/facilities";
import InfoProduct from "../components/infoProduct";
import Review from "../components/review";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const product = arrayProduct.find((el) => el.id == id);
    if (product) {
      setData(product);
    }
  }, [id]);
  return (
    <>
      <Header />
      <p>{data.description}</p>
      <Facilities />
      <InfoProduct />
      <Review />
      <Footer />
    </>
  );
}

export default Product;
