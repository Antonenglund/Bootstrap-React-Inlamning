import React from 'react'
import Image1 from '../../src/images/TopSellers/Image1.png'
import Image2 from '../../src/images/TopSellers/Image2.png'
import Image3 from '../../src/images/TopSellers/Image3.png'

export default function TopSellersCard() {
    return (
        <div className=" row mt-5 ">
            <div className="col-lg-6 col-md-12">
            <div className="text-center position-relative">
                <img className="img-fluid img-overlay" src={Image1} alt="Product" />
                <div className="position-absolute bg-blue text-white py-2 rounded-bottom box-hover d-none d-xl-block">
                    <span className="hide-hover ml-4 text-left">Men's denim shirts full</span>
                    <div className="hover-content hover-show-bexim d-none">
                                <p>Men's denim shirts full</p>
                                <div className="mr-extra">
                                 <span className="border px-2">Fashion</span>
                                 <p className="mt-2 mb-1">$220.00</p>
                                </div>
                                <div className="position-absolute">
                                    <h4 className="text__theme">$190.00</h4>
                                </div>

                                <div className="hover-show-2-bexim">
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme far fa-star"></i>
                                </div>

                                <div className="hover-show-3-bexim ml-3 py-3 bg-white">
                                    <div><i className="text-danger fas fa-circle"></i></div>
                                    <div><i className="text-secondary far fa-heart"></i></div>
                                    <div><i className="text-secondary fas fa-random"></i></div>
                                    <div><i className="text-secondary fas fa-search"></i></div>
                                    <div><i className="text__theme fas fa-shopping-cart"></i></div>
                                </div>
                            </div>
                </div>
            </div>
            </div>
            
            <div className="col-lg-6 d-none d-xl-block">
                <div className="position-relative mb-4">
                    <img className="img-fluid img-overlay" src={Image2} alt="Product" />
                    <div className="bg-blue text-white py-2 rounded-bottom position-absolute box-hover">
                        <p className="hide-hover ml-4">Women's leather bag and shoe</p>
                        <div className="hover-content hover-show-rosimo d-none">
                                <p>Women's leather bag and shoe</p>
                                <span className="border px-2">Fashion</span>
                                <p className="mt-2 mb-1">$220.00</p>
                                <div className="position-absolute">
                                    <h4 className="text__theme">$190.00</h4>
                                </div>

                                <div className="hover-show-2-rosimo">
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme far fa-star"></i>
                                </div>

                                <div className="hover-show-3-rosimo ml-3 py-3 bg-white">
                                    <div><i className="text-danger fas fa-circle"></i></div>
                                    <div><i className="text-secondary far fa-heart"></i></div>
                                    <div><i className="text-secondary fas fa-random"></i></div>
                                    <div><i className="text-secondary fas fa-search"></i></div>
                                    <div><i className="text__theme fas fa-shopping-cart"></i></div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="position-relative">
                    <img className="img-fluid img-overlay" src={Image3} alt="Product" />
                    <div className="bg-blue text-white py-2 rounded-bottom position-absolute box-hover">
                        <p className="hide-hover ml-4">New look men's sneakers</p>
                        <div className="hover-content hover-show d-none">
                                <p>New look men's sneakers</p>
                                <span className="border px-2">Fashion</span>
                                <p className="mt-2 mb-1">$220.00</p>
                                <div className="position-absolute">
                                    <h4 className="text__theme">$190.00</h4>
                                </div>

                                <div className="hover-show-2-lighton">
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme far fa-star"></i>
                                </div>

                                <div className="hover-show-3-lighton ml-3 py-3 bg-white">
                                    <div><i className="text-danger fas fa-circle"></i></div>
                                    <div><i className="text-secondary far fa-heart"></i></div>
                                    <div><i className="text-secondary fas fa-random"></i></div>
                                    <div><i className="text-secondary fas fa-search"></i></div>
                                    <div><i className="text__theme fas fa-shopping-cart"></i></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
