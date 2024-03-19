import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Facilities from "../components/facilities/facilities";
import InfoProduct from "../components/infoProduct";
import Review from "../components/review";
import { useParams } from "react-router-dom";
import { data } from "../components/listAddmission/index2";

function Product() {
    const { id } = useParams();
    const [dataProduct, setDataProduct] = useState({});
    useEffect(() => {
        const product = data.find((el) => el.id == id);
        if (product) {
            setDataProduct(product);
        }
    }, []);

    return (
        <>
            <Header />
            <Facilities />
            <InfoProduct infoProd={dataProduct} />
            <Review />
            <Footer />
        </>
    );
}

export default Product;
