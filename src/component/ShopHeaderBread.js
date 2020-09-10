import React from 'react'

export default function ShopHeaderBread() {
    return (
        <div className="bg__shop__header">
            <div className="container">
                <div className="row">
                <div className=" col-7 pt-4 mb-2">
                    <span className="text__theme">Shop</span>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg__shop__header px-0">
                            <li class="breadcrumb-item"><a className="color-a" href="#">Home</a></li>
                            <li class="breadcrumb-item active " aria-current="page">Shop</li>
                        </ol>
                    </nav>
                </div>
                <div className=" col-5 align-self-center d-flex justify-content-around">
                    <span className="bg-blue rounded py-2 px-3 justify-content-center ml-3">
                        <small className="text-white">Show: 9/12/18/24</small>
                    </span>
                    <span className="bg-blue rounded py-2 px-3">
                        <i class="fas text-white fa-bars ml-2 mr-2"></i>
                        <i class="fas fa-th-large text-white mr-2"></i>
                        <i class="fas fa-th text-white mr-2"></i>
                    </span>
                    <div className="dropdown bg-blue px-3">
                        <small class="btn  text-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link <i className=" font-theme ml-1 fas fa-angle-down"></i>
                        </small>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                          
                        </div>
                    </div>
                </div>
                </div>
                


            </div>
        </div>
    )
}
