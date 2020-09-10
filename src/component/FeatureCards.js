import React from 'react'
import Image1 from '../../src/images/Featured/Image1.png'
import Image2 from '../../src/images/Featured/Image2.png'
import Image3 from '../../src/images/Featured/Image3.png'

export default function FeatureCards() {
    return (
        <div className="container mt-5">
        <div className="card-deck position-realtive">
                <div className="card border-0 container-hover ">
                    <img className="position-relative img-overlay" src={Image1} alt="Card cap" />
                    <div className="circle-hot">HOT</div>
                    <div className="bg-blue text-white py-2 rounded-bottom position-absolute box-hover">
                        <p className="_card-text ml-4 hide-hover">Blue silk flare sleeved top</p>
                        
                        <div className="position-aboslute hover-content hover-show d-none ">
                        <p>Blue silk flare sleeved top</p>
                        <span className="border px-2">Fashion</span>
                        <p className="mt-2 mb-1">€220.00</p>
                        <div className="position-absolute">
                        <h4 className="text__theme">€190.00</h4>
                        </div>

                        <div className="hover-show-2">
                        <i class=" stars-active fas fa-star"></i>
                        <i class=" stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class=" text__theme far fa-star"></i>
                        </div>

                        <div className="hover-show-3 ml-3 py-3 bg-white">
                          <div><i class="text-danger fas fa-circle"></i></div>
                          <div><i class=" text-secondary far fa-heart"></i></div>
                          <div><i class=" text-secondary fas fa-random"></i></div>
                          <div><i class=" text-secondary fas fa-search"></i></div>
                          <div><i class=" text__theme fas fa-shopping-cart"></i></div>
                     
                        </div>
                        </div>
                    </div>
                    
                </div>  
                    
            <div className="card border-0 container-hover d-none d-lg-block ">
                <img className="position-relative img-overlay" src={Image2} alt="Card cap" />
                <div className="circle-new">NEW</div>
                <div className="bg-blue text-white py-2 rounded-bottom position-absolute box-hover">
                    <p className="ml-4 hide-hover">New look men's coat</p>
                    <div className="position-aboslute hover-content hover-show d-none ">
                        <p>Blue silk flare sleeved top</p>
                        <span className="border px-2">Fashion</span>
                        <p className="mt-2 mb-1">€220.00</p>
                        <div className="position-absolute">
                        <h4 className="text__theme">€190.00</h4>
                        </div>

                        <div className="hover-show-2">
                        <i class=" stars-active fas fa-star"></i>
                        <i class=" stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class=" text__theme far fa-star"></i>
                        </div>

                        <div className="hover-show-3 ml-3 py-3 bg-white">
                          <div><i class="text-danger fas fa-circle"></i></div>
                          <div><i class=" text-secondary far fa-heart"></i></div>
                          <div><i class=" text-secondary fas fa-random"></i></div>
                          <div><i class=" text-secondary fas fa-search"></i></div>
                          <div><i class=" text__theme fas fa-shopping-cart"></i></div>
                     
                        </div>
                        </div>
                </div>
            </div>
            <div className="card border-0 container-hover  d-none d-sm-block ">
                <img className="position-relative img-overlay" src={Image3} alt="Card cap" />
                <div className="circle-sale">-30%</div>
                <div className="bg-blue text-white py-2 rounded-bottom position-absolute box-hover">
                    <p className="ml-4 hide-hover">Circle patterns girls shirt</p>
                    <div className="position-aboslute hover-content hover-show d-none ">
                        <p>Blue silk flare sleeved top</p>
                        <span className="border px-2">Fashion</span>
                        <p className="mt-2 mb-1">€220.00</p>
                        <div className="position-absolute">
                        <h4 className="text__theme">€190.00</h4>
                        </div>

                        <div className="hover-show-2">
                        <i class=" stars-active fas fa-star"></i>
                        <i class=" stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class="stars-active fas fa-star"></i>
                        <i class=" text__theme far fa-star"></i>
                        </div>

                        <div className="hover-show-3 ml-3 py-3 bg-white">
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
