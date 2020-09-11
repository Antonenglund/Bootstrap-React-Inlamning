import React from 'react'
import HeaderImage from '../../../src/images/Header-girls.png'

export default function HeaderCarousel() {
    return (

        <div className="container-fluid bg__header__carousel">
    <div className="container">
    <div className="row mx-auto my-auto">
        <div id="myCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-lg-5 align-self-center mb-5">
                                <h1 className="font__size__header mt-5 font-weight-normal">Shopping is </h1>
                                <h1 className="text__theme font__size__header__second font-weight-bold">MORE FUN </h1>
                                <p className="">Some make up the bulk of the card's content.Some make up the bulk of the card's content. contentlarrson</p>
                                <button href="#" className=" mt-4 btn btn-light py-2 px-4 btn__radius__header text__theme">SHOP NOW</button>
                        </div>
                        <div className="col-lg-7">   
                            <img className="img-fluid" src={HeaderImage}alt="" />      
                        </div>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                                <h1 className="font__size__header mt-5 font-weight-normal">Shopping is </h1>
                                <h1 className="text__theme font__size__header__second font-weight-bold">MORE FUN </h1>
                                <p className="">Some make up the bulk of the card's content.Some make up the bulk of the card's content. contentlarrson</p>
                                <button href="#" className=" mt-4 btn btn-light py-2 px-4 btn__radius__header text__theme">SHOP NOW</button>
                        </div>
                        <div className="col-lg-7">   
                            <img className="img-fluid" src={HeaderImage}alt="" />      
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>


   
    ) 
}
