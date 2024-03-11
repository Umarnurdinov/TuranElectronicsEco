import React, { useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

import Header from "../header/header";

function BasketPage() {
    const [haveContent,setHaveData]=useState(false)
    const basketData = useSelector((state) => state.basket.products);

    console.log(basketData);
    return (
        <>
            <div className="basket__hero">
                <div className="container">
                    <div className="basket__info">
                        <div className="basket__info__box">
                            <h1 className="basket__info__title">
                                Ваша корзина пуста
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasketPage;
