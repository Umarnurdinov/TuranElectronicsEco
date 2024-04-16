import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Facilities from "../components/facilities/facilities";
import InfoProduct from "../components/infoProduct";
import Review from "../components/review";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Product() {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState({});
  const productData = useSelector((state) => state.data.products);
  useEffect(() => {
    const product = productData.find((el) => el.id == id);
    if (product) {
      setDataProduct(product);
    }
  }, []);
  return (
    <>
      <Header />
      <Facilities />
      <InfoProduct infoProd={dataProduct} />
      <Review id={dataProduct.id} />
      <Footer />
    </>
  );
}

export default Product;
