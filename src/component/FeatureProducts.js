import React from 'react'
import ZikeZake from '../../src/images/ZickZack.png'
import FeatureCards from './FeatureCards'

export default function FeatureProducts() {
    return (
        <div className="container">
             <div className="text-center pt-5">
                <h1>FEATURED <span className="text__theme">PRODUCTS</span></h1>
                <img src={ZikeZake}></img>
                <p className="mt-3"> We always try to give u the best product within a fast and reliable way</p>
            </div>

            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                       
                        <FeatureCards />
                        </div>
                        <div className="carousel-item ">
                        
                        <FeatureCards />
                        </div>
                        <div className="carousel-item ">
                        <FeatureCards />
                        </div>
                        
                           
                    </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"> <i className=" fa-2x  mt-2 fas fa-chevron-left"></i></span>
                            <span className="sr-only">Previous</span>
                        </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon " aria-hidden="true"><i className=" fa-2x mt-2 fas fa-chevron-right"></i></span>
                                    <span className="sr-only">Next</span>
                                </a>
                </div>

        </div>
    )
}
