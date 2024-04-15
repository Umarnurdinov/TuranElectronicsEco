import { useEffect, useRef, useState } from "react";
import fullStar from "../../assets/fullStar.svg";
import star from "../../assets/emptyStar.svg";

function StarRating({ rating }) {
  const stars = useRef(new Array(5).fill(1));
  return (
    <>
      {stars.current.map((el, idx) => (
        <img key={idx} src={idx + 1 > rating ? star : fullStar} alt="#" />
      ))}
    </>
  );
}

export default StarRating;
