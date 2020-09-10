import React from 'react'


export default function HeaderNavigation() {
    return (

        <div className="bg-header d-none d-xl-block">
            <div className="container d-flex justify-content-between d-none">
                <nav className="navbar navbar-expand-lg navbar-light py-0 px-0 ">
                    <ul className="navbar-nav mr-auto border-right ">
                        <li className="nav-item dropdown d-none d-sm-block">
                            <a className="nav-link  text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ENG <i className="fas fa-angle-down"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                USD <i className="fas fa-angle-down"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white border-right px-3" href="/#">Newsletter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white border-right px-3" href="/#">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white border-right px-3" href="/#">FAQs</a>
                        </li>
                    </ul>
                    <div className="ml-2 d-none d-lg-block">
                    <a className="text-white mr-2"> <i className="fab fa-facebook-f"></i></a>
                    <a className="text-white mr-2" > <i className="fab fa-twitter"></i></a>
                    <a className="text-white mr-2" > <i className="fab fa-instagram"></i></a>
                    <a className="text-white mr-2" > <i className="fab fa-pinterest-p"></i></a>
                    <a className="text-white mr-2" > <i className="fab fa-youtube"></i></a>
                </div>
                </nav>
            </div>
        </div>


    )
}
