import React, { useEffect, useState } from "react";
import "./style.scss";
import editIcon from "../../assets/editIcon.png";
import fullStar from "../../assets/fullStar.svg";
import star from "../../assets/emptyStar.svg";
import axios from "axios";

function Review({ id }) {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(true);
  const [valueInput, setValueInput] = useState("");
  const [addComent, setAddComent] = useState(false);
  const [rating, setRating] = useState(0);

  function addComment() {
    setAddComent(!addComent);
  }

  function addText() {
    let obj = {
      email: "rahimovizzatbek28@gmail.com",
      product: id,
      text: valueInput,
      grade: rating,
    };
    axios
      .post("https://turaneletronic.onrender.com/review/", obj)
      .then((res) => {
        setIndex(!index);
      });
  }
  useEffect(() => {
    axios.get("https://turaneletronic.onrender.com/review/").then((res) => {
      setData(res.data);
    });
  }, []);
  function handleStarClick(newRating) {
    setRating(newRating);
  }
  const filterData = data.filter((el) => el.product == id);

  function renderStarRating() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starImg = i <= rating ? fullStar : star;
      stars.push(
        <img
          key={i}
          src={starImg}
          className="starRaiting"
          alt=""
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  }
  return (
    <>
      <div className="review">
        <div className="container">
          <div className="review__content">
            <div className="review__content__add">
              <button onClick={addComment} className="reviewAddBtn">
                <img src={editIcon} alt="#" /> Написать отзыв
              </button>
            </div>
            {addComent ? (
              <>
                <div className="review__content__title">
                  {index ? (
                    <>
                      <div className="review__content__title__text">
                        <div className="box__stars">{renderStarRating()}</div>
                        <div className="inputAreaContent">
                          <textarea
                            placeholder="Напишите отзыв!"
                            className="textArea"
                            onChange={(e) => setValueInput(e.target.value)}
                          ></textarea>
                          <button className="add" onClick={addText}>
                            Save
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="review__content__header">
                        <div className="review__content__pretitle">
                          <p className="review__content__title__name">
                            Umar Nuridinov
                          </p>
                          <div className="card__star">{renderStarRating()}</div>
                        </div>
                        <div className="review__content__title__date">
                          {`${new Date().getDate()}.${
                            new Date().getMonth() + 1
                          }.${new Date().getFullYear()}`}
                        </div>
                      </div>
                      <p className="review__content__title__text__title">
                        {valueInput}
                      </p>
                    </>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
