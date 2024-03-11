import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";
import Recomends from "../components/recomends";

function Favorite() {
    const dataLike = useSelector((state) => state.like.products);
    console.log(dataLike);
    return (
        <>
            <Header />
            {dataLike.map((el)=>(

            <Recomends   />
            ))}
            <Footer />
        </>
    );
}

export default Favorite;
