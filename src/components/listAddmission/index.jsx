import React from "react";
import ItemAddmission from "../itemAddmission";
import "./style.scss";
import product from "../../assets/phone.png";

const data = [
    {
        img: { product },
        price: 100415,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
    },
];

function List() {
    return (
        <div className="container">
                <h1 className="list_title">Новое поступление</h1>
            <div className="list">
                <ItemAddmission data={data} />
                <ItemAddmission />
                <ItemAddmission />
                <ItemAddmission />
            </div>
        </div>
    );
}

export default List;
