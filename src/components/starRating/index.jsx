import { useRef } from "react";
import fullStar from "../../assets/fullStar.png";
import star from "../../assets/star.png";

function StarRating({ rating }) {
    const stars = useRef(new Array(5).fill(1));
    console.log(stars);

    return (
        <>
            {stars.current.map((el, idx) => (
                <img
                    key={idx}
                    src={idx + 1 > rating ? star : fullStar}
                    alt=""
                />
            ))}
        </>
    );
}

export default StarRating