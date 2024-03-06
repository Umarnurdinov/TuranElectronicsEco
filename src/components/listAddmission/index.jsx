import React from "react";
import ItemAddmission from "../itemAddmission";
import "./style.scss";
import product from "../../assets/phone.png";

const data = [
    {
        img: { product },
        price: 200500,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 5,
    },
    {
        img: { product },
        price: 200500,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 5,
    },
    {
        img: { product },
        price: 200500,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 5,
    },
    {
        img: { product },
        price: 200500,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 5,
    },
];

function List() {
    return (
        <div className="container">
            <h1 className="list__title">Новое поступление</h1>
            <div className="list">
                <ItemAddmission data={data} />
                {/* <ItemAddmission data={data} />
        <ItemAddmission data={data}/>
        <ItemAddmission data={data}/> */}
            </div>
        </div>
    );
}

export default List;
