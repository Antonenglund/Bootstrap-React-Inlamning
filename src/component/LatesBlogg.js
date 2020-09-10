import React from 'react'
import ZikeZake from '../../src/images/ZickZack.png'
import BgBlogg from '../images/BgBlogg.png'
import CardBlogg from './CardBlogg'

export default function LatesBlogg() {
    return (
        <div>
            <div className="container">
           
                <div className="text-center pt-5">
                    <h1>LATEST <span className="text__theme">BLOG</span></h1>
                    <img src={ZikeZake}></img>
                    <p className="mt-3"> We always try to give u the best product within a fast and reliable way</p>
                    <button className=" d-block d-sm-none mt-4 btn px-5 pt-3 pb-2 bg__btn__blue mx-auto btn__radius__header text__theme text-uppercase font-weight-bold btn-sm"><h6>Read the blogs</h6></button>
                </div>
               
                    
                   

                <div id="carouselExampleIndicators" className="carousel d-none d-sm-block slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                       
                        <CardBlogg />
                                

                        </div>
                        <div className="carousel-item ">
                        <CardBlogg />
                        </div>
                        <div className="carousel-item ">
                        <CardBlogg />
                        </div>
                        
                           
                    </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x  mt-2 mr-1 fas fa-chevron-left"></i></span>
                            <span className="sr-only">Previous</span>
                        </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 ml-1 fas fa-chevron-right"></i></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>






                    </div>
                    )
                }
