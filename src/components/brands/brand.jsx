import React from "react";
import "./style.scss";
import apple from "../../assets/Apple.png";
import dyson from "../../assets/Dyson.png";
import playstation from "../../assets/Playstation.png";
import samsung from "../../assets/Samsung.png";
import xiaomi from "../../assets/Xiaomi.png";

function Brands() {
    return (
        <>
            <div className="footer__brands">
                <div className="container">
                    <div className="brands__title">
                        <p className="brands__text">Бренды</p>
                    </div>
                    <div className="brands__img">
                        <div className="imgApple">
                            <img className="apple" src={apple} alt="#" />
                        </div>
                        <div className="imgDyson">
                            <img className="dyson" src={dyson} alt="#" />
                        </div>
                        <div className="imgPlaystation">
                            <img
                                className="playstation"
                                src={playstation}
                                alt="#"
                            />
                        </div>
                        <div className="imgSamsung">
                            <img className="samsung" src={samsung} alt="#" />
                        </div>
                        <div className="imgXiaomi">
                            <img className="xiaomi" src={xiaomi} alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brands;
