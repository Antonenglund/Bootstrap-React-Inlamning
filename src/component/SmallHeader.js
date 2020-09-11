import React from 'react'

export default function SmallHeader() {
    return (
        <div>
            <div className="bg-blue mb-4">
                <div className="container">
                    <div className="row d-flex">
                        <div className=" col-md-5 col-lg-6 text-white font-weight-bold mt-2 align-self-center  text-sm-center text-md-left">
                            <p className="text__theme">Wishlist</p>
                        </div>
                        <div className=" col-md-7 col-lg-6  mt-3 mb-3 ">

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb bg-blue px-0 justify-content-end mx-auto">
                                    <li class="breadcrumb-item "><a className="text__theme" href="#">Home</a></li>
                                    <li class="breadcrumb-item active text-white " aria-current="page">Shop</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
