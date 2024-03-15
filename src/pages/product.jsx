import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useParams } from "react-router-dom";
// import { data as arrayProduct } from "../components/listAddmission";

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
            <Footer />
        </>
    );
}

export default Product;
