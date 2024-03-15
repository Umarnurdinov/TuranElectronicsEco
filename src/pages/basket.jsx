import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import BasketPage from "../components/basket";
import Brands from "../components/brands/brand";

function Basket() {
    return (
        <>
            <Header />
            <BasketPage />
            <Brands />
            <Footer />
        </>
    );
}

export default Basket;
