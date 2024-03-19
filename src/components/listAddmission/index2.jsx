import ItemAddmission from "../itemAddmission/index2";
import "./style.scss";
import product from "../../assets/phone.png";
import Recomends from "../recomends";

export const data = [
    {
        img: { product },
        price: 200,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 3,
        date: new Date().getTime(),
        colors: ["#00ffff", "#fff", "#f2e4c9"],
        id: 1,
        ch: [
            { garant: "Гарантия", value: "1 год" },
            { screen: "Экран", value: "3840/2160 Пикс(4K)" },
            { technologyScreen: "Технология экрана", value: "OLED" },
            { typeProcessor: "Тип процессора", value: "A15 Bionic" },
            { memory: "Встроенная память (ROM)", value: "256 gb" },
            { camera: "Основная камера", value: "12/12 Мпикс" },
            { amountCore: "Количество ядер", value: "6" },
            {
                videoShooting: "Разрешение видеосъемки",
                value: "3840/2160 Пикс(4K)",
            },
        ],
        inStock: true,
    },
    {
        img: { product },
        price: 700,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 1,
        date: 1706762854 * 1000,
        colors: ["#181f27", "#00ffff", "#fff"],
        id: 2,
        ch: [
            { garant: "Гарантия", value: "1 год" },
            { screen: "Экран", value: "3840/2160 Пикс(4K)" },
            { technologyScreen: "Технология экрана", value: "OLED" },
            { typeProcessor: "Тип процессора", value: "A15 Bionic" },
            { memory: "Встроенная память (ROM)", value: "256 gb" },
            { camera: "Основная камера", value: "12/12 Мпикс" },
            { amountCore: "Количество ядер", value: "6" },
            {
                videoShooting: "Разрешение видеосъемки",
                value: "3840/2160 Пикс(4K)",
            },
        ],
        inStock: false,
    },
    {
        img: { product },
        price: 3000,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 3,
        date: new Date().getTime(),
        colors: ["#604d4d", "#f2e4c9", "black"],
        id: 3,
        ch: [
            { garant: "Гарантия", value: "1 год" },
            { screen: "Экран", value: "3840/2160 Пикс(4K)" },
            { technologyScreen: "Технология экрана", value: "OLED" },
            { typeProcessor: "Тип процессора", value: "A15 Bionic" },
            { memory: "Встроенная память (ROM)", value: "256 gb" },
            { camera: "Основная камера", value: "12/12 Мпикс" },
            { amountCore: "Количество ядер", value: "6" },
            {
                videoShooting: "Разрешение видеосъемки",
                value: "3840/2160 Пикс(4K)",
            },
        ],
        inStock: true,
    },
    {
        img: { product },
        price: 3000,
        title: "  Смартфон Apple iPhone 14 Pro Max 256GB EU",
        description:
            "iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone. .....",
        raiting: 2,
        date: 1706762854 * 1000,
        colors: ["#604d4d", "#00ffff", "#fff"],
        id: 4,
        ch: [
            { garant: "Гарантия", value: "1 год" },
            { screen: "Экран", value: "3840/2160 Пикс(4K)" },
            { technologyScreen: "Технология экрана", value: "OLED" },
            { typeProcessor: "Тип процессора", value: "A15 Bionic" },
            { memory: "Встроенная память (ROM)", value: "256 gb" },
            { camera: "Основная камера", value: "12/12 Мпикс" },
            { amountCore: "Количество ядер", value: "6" },
            {
                videoShooting: "Разрешение видеосъемки",
                value: "3840/2160 Пикс(4K)",
            },
        ],
        inStock: false,
    },
];

function List() {
    return (
        <div className="container">
            <h1 className="list__title">Новое поступление</h1>
            <div className="list">
                {data.map((el) => (
                    <>
                        <ItemAddmission data={el} />
                    </>
                ))}
            </div>
        </div>
    );
}

export default List;
/*
 https://api.telegram.org/bot7143137540:AAFr22yndG2P3Zx8bkAqwr0Hpyd_6EgYzkg/getUpdates


  https://api.telegram.org/bot7143137540:AAFr22yndG2P3Zx8bkAqwr0Hpyd_6EgYzkg/sendMessage?chat_id=1440461447&text=hi_i_am_a_bot

 */
