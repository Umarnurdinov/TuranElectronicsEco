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
             <h1>{el.title}</h1>
              ))}
            <Footer />
              // <Recomends   />
        </>
    );
}

export default Favorite;
