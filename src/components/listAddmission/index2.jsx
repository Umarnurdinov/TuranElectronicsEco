import ItemAddmission from "../itemAddmission/index2";
import "./style.scss";
import product from "../../assets/phone.png";

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
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
      { name: "Гарантия", value: "14 год" },
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
    inStock: false,
  },
];

function List() {
  return (
    <div className="container">
      <h1 className="list__title">Новое поступление</h1>
      <div className="list">
        {data.map((el) => (
          <ItemAddmission data={el} />
        ))}
      </div>
    </div>
  );
}

export default List;
