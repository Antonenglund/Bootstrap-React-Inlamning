import React from 'react'
import {Link} from 'react-router-dom'

import Hamburgare from '../../src/images/Hamburger menu.png'

export default function Navigation() {
    return (
        <div className="border-top mt-4">
            <div className="container">
                <nav className=" navbar-expand-lg navbar-light pt-0 pb-0">
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto topnav ">
                            <li className="nav-item dropdown bg-btn-theme mr-3 px-2 py-1 d-none d-lg-block">
                                <a className="nav-link text-white " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <img className="mr-1 mb-1" src={Hamburgare}></img> <span className="mr-2">Browse Categories</span>  <i className=" ml-4 fas fa-angle-down"></i></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                </div>
                            </li>
                            <li className="nav-item active ml-4 mt-1">
                                <Link className="nav-link text__primary active" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown ml-4 mt-1">
                                <a className="nav-link text__primary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop <i className=" font-theme ml-1 fas fa-angle-down"></i>  </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/shop">Shop</Link>
                                   
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-4 mt-1">
                                <a className="nav-link text__primary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products <i className=" font-theme ml-1 fas fa-angle-down"></i></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-4 mt-1">
                                <a className="nav-link text__primary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories <i className=" font-theme ml-1 fas fa-angle-down"></i></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-4 mt-1">
                                <a className="nav-link text__primary" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages <i className=" font-theme ml-1 fas fa-angle-down"></i> </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/wishlist">Wishlist</Link>
                                </div>
                            </li>
                            <li className="nav-item mt-1 ml-4">
                                <a className="nav-link text__primary" href="#">Blog</a>
                            </li>
                            <div className="mt-2 p-0 mb-3 col-12 d-sm-none d-lg-none d-xl-none">
                                <i className=" fa-lg ml-2 mr-2 far fa-user"></i>
                                <span className="mr-4">My Account</span>
                                <i className=" fa-lg ml-3 fas fa-shopping-bag"></i>
                                <span className="ml-2">$.0.00</span>
                            </div>
                        </ul>
                        <div className="my-2 my-lg-0">
                            <button className="btn bg-btn-theme text-white px-3  btn__radius" type="submit"> SPECIAL OFFER</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}
