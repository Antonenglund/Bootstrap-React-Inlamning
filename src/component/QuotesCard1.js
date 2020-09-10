import React from 'react'
import ImageQ from '../../src/images/Quotes/Quoteimg.png'


export default function QuotesCard1() {
    return (
        
            <div className="container mt-1">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <i class="fa-5x fas fa-quote-right text__theme"></i>
                    </div>
                    <div className=" col-lg-12 text-center mt-4">
                        <img src={ImageQ}/>
                    </div>
                    <div className=" col-lg-12 text-center mt-3">
                        <i class=" stars-active fas fa-star"></i>
                        <i class=" stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class=" text__theme far fa-star"></i>
                    </div>
                    <div className="col-lg-12 text-center mt-3">
                        <span className="text__theme pb-1 text-uppercase">Johhny WessMullar</span> <br></br>
                        <small className="text-white ">CEO, Biotech Inc.</small>
                    </div>
                    <div className="col-lg-10 offset-lg-1 text-center text-white pb-5 mt-2 text-wrap">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                    </div>
                </div>
            </div>
        
    )
}
