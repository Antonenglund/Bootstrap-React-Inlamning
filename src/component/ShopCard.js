import React from 'react'
import DressLady from '../../src/images/Shop/DressLady.png'

export default function ShopCard() {
    return (
        <div className="card-deck">
                 <div className="card border-0 container-hover ">
                        <img className="position-relative img-fluid img-overlay" src={DressLady} alt="Card cap" />
                        <div className="circle-new-shop-card">NEW</div>
                        <div className="bg-blue text-white py-2 rounded-bottom position-absolute box-hover">
                            <p className="_card-text ml-4 hide-hover">Blue silk flare sleeved top</p>
                            <div className="position-aboslute hover-content hover-show d-none ">
                        <div className="shop-font">
                        <p>Blue silk flare sleeved top</p>
                        <span className="border px-2">Fashion</span>
                        <p className="mt-2 mb-1">€220.00</p>
                        <div className="position-absolute">
                        <h4 className="text__theme">€190.00</h4>
                        </div>

                        <div className="hover-show-2-shop">
                        <i class=" stars-active fas fa-star"></i>
                        <i class=" stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class=" text__theme far fa-star"></i>
                        </div>

                        <div className="hover-show-3-shop ml-3 py-3 bg-white">
                          <div><i class="text-danger fas fa-circle"></i></div>
                          <div><i class=" text-secondary far fa-heart"></i></div>
                          <div><i class=" text-secondary fas fa-random"></i></div>
                          <div><i class=" text-secondary fas fa-search"></i></div>
                          <div><i class=" text__theme fas fa-shopping-cart"></i></div>
                     
                        </div>
                        </div>
                        
                        </div>
                        </div>
                        
                    </div>  
        </div>
    )
}
