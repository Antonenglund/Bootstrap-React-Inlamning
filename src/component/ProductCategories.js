import React from 'react'
import PriceFilter from '../../src/images/Price slider.png'
import BeximShop from '../../src/images/Shop/BeximShop.png'
import LightonShop from '../../src/images/Shop/LightonShop.png'
import ConcordShop from '../../src/images/Shop/ConcordShop.png'
import DallasShop from '../../src/images/Shop/DallasShop.png'
import RosimoShop from '../../src/images/Shop/RosimoShop.png'
import DismisShop from '../../src/images/Shop/DismisShop.png'
import Rated1 from '../../src/images/Shop/Rated1.png'
import ShopCard from './ShopCard'
import Pagination from './Pagination'



export default function ProductCategories() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3">
                    <p className="text__theme">Product Categories</p>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>Men's</p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p>Women's</p>
                        <span className=" ">23</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p>Kid's</p>
                        <span className=" ">32</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p>Hat's</p>
                        <span className=" ">12</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p>Sunclasess</p>
                        <span className=" ">15</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p>Shoes</p>
                        <span className=" ">12</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p>Watches</p>
                        <span className=" ">15</span>
                    </div>

                    <div>
                        <p className="text__theme mt-3">Filter by Price</p>
                        <img src={PriceFilter} />
                    </div>
                    <div className=" mt-2 d-flex hover__categories justify-content-between">
                        <p>Price: $0 - $10,000</p>
                        <button className="btn  btn__radius__header text-white bg__theme "> Read More</button>
                    </div>

                    <p className="text__theme mt-3">Filer By Color</p>
                    <div className="d-flex hover__categories justify-content-between">
                        <p> <i class="fas fa-square mr-2"></i>
                            Black
                          </p>
                        <span className=" ">12</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p> <i class="fas fa-square mr-2 text-secondary"></i>
                            Gray
                          </p>
                        <span className=" ">20</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p> <i class="fas fa-square mr-2 text-danger"></i>
                            Red
                          </p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p> <i class="fas fa-square mr-2 text-success"></i>
                            Gren
                          </p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex hover__categories justify-content-between">
                        <p> <i class="fas fa-square mr-2 text-warning"></i>
                            Orange
                          </p>
                        <span className=" ">18</span>
                    </div>
                    <p className="text__theme mt-3">Filter by Size</p>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>XS</p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>S</p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>M</p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>L</p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>XL</p>
                        <span className=" ">18</span>
                    </div>
                    <div className="d-flex justify-content-between hover__categories">
                        <p>XXL</p>
                        <span className=" ">18</span>
                    </div>
                    <p className="text__theme mt-3">Filter by Brand</p>
                    <div className=" d-flex justify-content-between">
                        <img className="img-fluid  rounded" src={BeximShop} />
                        <img className="img-fluid  rounded" src={LightonShop} />
                    </div>
                    <div className=" d-flex justify-content-between mt-3">
                        <img className="img-fluid  rounded" src={ConcordShop} />
                        <img className="img-fluid  rounded" src={DallasShop} />
                    </div>
                    <div className=" d-flex justify-content-between mt-3">
                        <img className="img-fluid  rounded" src={RosimoShop} />
                        <img className="img-fluid  rounded" src={DismisShop} />
                    </div>
                    <p className="text__theme mt-4">Product Status</p>
                    <div className="d-flex hover__categories">
                        <div class="form-check mr-2">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="... "/>
                        </div>
                            <p> On Sale</p>
                        </div>
                    <div className="d-flex hover__categories">
                        <div class="form-check mr-2">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="... "/>
                        </div>
                            <p>In Stock</p>
                        </div>
                    <p className="text__theme mt-4">Top Rated Products</p>
                    <div className="d-flex hover__categories">
                    <img className="img-fluid  rounded" src={Rated1} />
                          <div className="ml-3">
                            <small className="mb-1">Circle pattern girls...</small>
                            <p>
                            <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme far fa-star"></i>
                            </p>
                            
                            
                          </div>       
                        </div>
                    <div className="d-flex hover__categories mt-3">
                    <img className="img-fluid  rounded" src={Rated1} />
                          <div className="ml-3">
                            <small className="mb-1">Circle pattern girls...</small>
                            <p>
                            <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme far fa-star"></i>
                            </p>
                          </div>       
                        </div>
                    <div className="d-flex hover__categories mt-3 mb-5">
                    <img className="img-fluid  rounded" src={Rated1} />
                          <div className="ml-3">
                            <small className="mb-1">Circle pattern girls...</small>
                            <p>
                            <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme fas fa-star"></i>
                                    <i className="text__theme far fa-star"></i>
                            </p>
                          </div>       
                        </div>
                    </div>

                    <div className="col-9">
                       <div className="container">
                           <div className="row">
                               <div className="col-lg-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4">
                                   <ShopCard />
                               </div>


                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>


                               <div className="col-lg-4  mt-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               <div className="col-lg-4 mt-4">
                                   <ShopCard />
                               </div>
                               
                               <Pagination />
                           </div>
                       </div>
                    </div>
                </div>
            </div>
            )
        }
