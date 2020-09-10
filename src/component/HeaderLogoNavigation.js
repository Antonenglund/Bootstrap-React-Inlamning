import React from 'react'
import Logo from '../../src/images/LogoKentaka.png'

export default function HeaderLogoNavigation() {
    return (
      
        <div className="container">
        <div className=" row mt-4 d-flex  ">
            
            <div className="mt-2 mr-5 ml-4 ">
                <img className="element-center-sm" src={Logo}></img>
            </div>

            
            <div className="input-group col-6 d-none d-xl-flex mr-3">
                 <input className="input__header form-control" />
                    <div className="input-group-append ">
                        <button className="btn border dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                        </div>
                        <div className="input-group-append">
                        <button className="btn border btn__round__right bg-btn-theme text-white" type="button"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
            </div>
            
            <div className="mt-2  d-none d-sm-block">
                <i className=" fa-lg mr-2 far fa-user"></i>
                <span className="mr-4">My Account</span>
                <i className=" fa-lg ml-3 far fa-heart"></i>
                <i className="fa-lg ml-3 fas fa-random position-relative"><span className="badge rounded-pill badge-primary position-absolute badge__">0</span></i>
                <i className=" fa-lg ml-3 fas fa-shopping-bag position-relative"><span className="badge rounded-pill badge-primary position-absolute badge__">0</span></i>
                <span className="ml-2">$.0.00</span>
            </div>
            
          
            
         
           
        
        </div>
        </div>
    
    )
}
