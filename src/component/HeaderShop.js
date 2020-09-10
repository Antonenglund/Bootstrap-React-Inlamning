import React from 'react'
import Image1 from '../../src/images/Shop/Group 1158.png'

export default function HeaderShop() {
    return (
        <div>
            <div className="bg-blue mb-5">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-5 col-lg-6 text-white font-weight-bold mt-5 align-self-center  text-sm-center text-md-left">
                            <h1>New Customer</h1>
                            <h1>Can Get <span className="text__theme">30% Off</span></h1>
                            <button className=" mt-3 mb-5  btn px-4 py-2  btn-light btn__radius__header text__theme   btn-sm"> LEARN MORE</button>
                        </div>
                        <div className=" col-md-7 col-lg-6  mt-5 mb-5 ">
                            <img className="img-fluid float-right" src={Image1}></img>
                            <div className="circle-new-shop">NEW</div>
                            <div className="circle-sale-shop">NEW</div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
