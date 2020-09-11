import React from 'react'

export default function ShopHeaderBread() {
    return (
        <div className="bg__shop__header">
            <div className="container">
                <div className="row">
                <div className=" col-4 pt-4 mb-2">
                    <span className="text__theme">Shop</span>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg__shop__header px-0">
                            <li class="breadcrumb-item"><a className="color-a" href="#">Home</a></li>
                            <li class="breadcrumb-item active " aria-current="page">Shop</li>
                        </ol>
                    </nav>
                </div>
                <div className=" col-8  align-self-center d-flex  justify-content-end ">
                    <span className="bg-blue rounded py-2 px-3 justify-content-center mr-3">
                        <small className="text-white">Show: 9/<span className="text__theme">12</span>/18/24</small>
                    </span>
                    <span className="bg-blue rounded py-2 px-3 mr-3">
                        <i className="fas text-white fa-bars"></i>
                        <i className="fas fa-th-large text-white mr-2"></i>
                        <i className="fas fa-th text-white mr-2"></i>
                    </span>
                    <div classNameName="dropdown bg-blue px-3">
                        <small className="btn  text-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link <i className=" font-theme ml-1 fas fa-angle-down"></i>
                        </small>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                          
                        </div>
                    </div>
                </div>
                </div>
                


            </div>
        </div>
    )
}
