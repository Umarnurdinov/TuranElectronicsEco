import React from "react";
import "./style.scss";

function BasketPage() {
    return (
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
    );
}

export default BasketPage;
