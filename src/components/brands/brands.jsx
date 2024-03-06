import React from 'react';
import dysonbrand from "../../assets/image 21.png"
import "../brands/brands.scss"
import applebrand from "../../assets/image 5.png"
import xiaomi from "../../assets/image 7.png"
import samsung from "../../assets/image 10.png"
import sonyps from "../../assets/image 8.png"
import { Link } from "react-router-dom";

const brands = () => {
    return (
        <div class='brands'>
            <div className="container">
                <div className="brands__component">
                    <div className="dysonbrand">
                        <Link to={"/dysonbrand"}>
                        <img className='dysonimg' src={dysonbrand} alt="" />
                    <button>Dyson</button>
                    </Link>
                    </div>
                    <div className="apple__block">
                    <div className="apple__brand">
                        <div className="apple__img">
                        <Link to={"/applebrand"}>
                        <img src={applebrand} alt="" />
                        <button>Apple</button>
                        </Link>
                        </div>
                    </div>
                    <div className="xiaomi__brand">
                    <Link to={"/xiaomibrand"}>
                        <div className="xiaomi__img">
                        <img src={xiaomi} alt="" />
                        </div>
                        <button>Xiaomi</button>
                        </Link>
                    </div>
                    </div>
                    <div className="samsung__block">
                    <div className="samsung__brand">
                        <Link to={"/samsungbrand"}>
                        <div className="samsung__img">
                        <img src={samsung} alt="" />
                        </div>
                        <button>Samsung</button>
                        </Link>
                    </div>
                    <div className="sony__brand">
                        <Link to={"/sonybrand"}>
                        <div className="sony__img">
                        <img src={sonyps} alt="" />
                        </div>
                        <button>Sony Playstation</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default brands;