import React from "react";
import "./style.scss";
import editIcon from "../../assets/editIcon.png";
import fullStar from "../../assets/fullStar.svg";
import star from "../../assets/emptyStar.svg";

function Review() {
  return (
    <>
      <div className="review">
        <div className="container">
          <div className="review__content">
            <div className="review__content__add">
              <button className="reviewAddBtn">
                <img src={editIcon} alt="#" /> Написать отзыв
              </button>
            </div>
            <div className="review__content__title">
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
                <div className="review__content__title__date">02.02.2024</div>
              </div>
              <div className="review__content__title__text">
                <p className="review__content__title__text__title">
                  Заказала долгожданный свой Iphone на этом сайте, спасибо
                  большое у вас цены всегда ниже, чем в других местах. <br />
                  Заказ пришел вовремя, Успехов Вам всегда!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
