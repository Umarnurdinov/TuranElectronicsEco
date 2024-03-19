import React, { useState } from "react";
import "./style.scss";
import editIcon from "../../assets/editIcon.png";
import fullStar from "../../assets/fullStar.svg";
import star from "../../assets/emptyStar.svg";

function Review() {
  const [index, setIndex] = useState(true);
  const [valueInput, setValueInput] = useState("");
  function addComment() {
    setIndex(!index);
  }
  function addText() {
    setIndex(!index);
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
            <div className="review__content__title">
              {index ? (
                <>
                  <div className="review__content__title__text">
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
                        Айгерим Атамбекова
                      </p>
                      <div className="card__star">
                        <img src={fullStar} alt="#" />
                        <img src={fullStar} alt="#" />
                        <img src={star} alt="#" />
                        <img src={star} alt="#" />
                        <img src={star} alt="#" />
                      </div>
                    </div>
                    <div className="review__content__title__date">
                      02.02.2024
                    </div>
                  </div>
                  <p className="review__content__title__text__title">
                    {valueInput}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
