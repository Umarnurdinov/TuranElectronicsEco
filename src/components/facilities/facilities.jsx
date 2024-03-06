import React from 'react';
import "./facilities.scss"
import { Link } from 'react-router-dom';
import car from "../../assets/Vector.png"
import tools from "../../assets/toools.png"
import check from "../../assets/check_orange.png"
import procent from "../../assets/ph_percent-fill.png"

const facilities = () => {
    return (
        <div id='facilities'>
            <div className="container">
                <div className="facilities">
                    <div className="factilities__nav">
                        <div className='factilities__navs'>
                        <Link to={"/delivery"} className='delivery__nav'>
                            <button className='carButton'>
                            <img className='carimg' src={car}/>
                            <span className='carSpan'>Удобная Доставка</span>
                            </button>
                        </Link>
                        <Link to={"/service"} className='service__nav'>
                            <button className='carButton'>
                            <img className='toolsimg' src={tools}/>
                            <span>Быстросервис</span>
                            </button>
                        </Link>
                        <Link to={"/guarantee"} className='guarantee__nav'>
                            <button className='carButton'>
                            <img className='guaranteeimg' src={check}/>
                            <span>Гарантия лучшей цены</span>
                            </button>
                        </Link>
                        <Link to={"/credit"} className='credit__nav'>
                            <button className='carButton'>
                            <img className='creditimg' src={procent}/>
                            <span>Рассрочка и кредит</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default facilities;