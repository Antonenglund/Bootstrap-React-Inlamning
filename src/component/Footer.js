import React from 'react'
import Logo from '../../src/images/LogoWhite.png'
import Mastercard from '../../src/images/footer/card group.png'
import Discover from '../../src/images/footer/Discover.png'
import Payoner from '../../src/images/footer/Payoner.png'
import Paypal from '../../src/images/footer/Paypal.png'
import Visa from '../../src/images/footer/Visa.png'

export default function Footer() {
    return (
        <div className="bg__footer text-white footer__border__1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mt-3 mb-3">
                        <img className="mt-5" src={Logo} />
                        <div className="mt-4">
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</small>
                            <p> Follow us</p>
                        </div>
                        <div className="">
                            <a className=" mr-2"> <i className=" font-theme fab fa-facebook-f"></i></a>
                            <a className=" mr-2" > <i className=" font-theme fab fa-twitter"></i></a>
                            <a className=" mr-2" > <i className=" font-theme fab fa-instagram"></i></a>
                            <a className=" mr-2" > <i className=" fab fa-pinterest-p"></i></a>
                            <a className=" mr-2" > <i className=" font-theme fab fa-youtube"></i></a>
                        </div>


                    </div>
                    <div className=" col-md-6 col-lg-3 contact" id="footerKenta">
                        <h5 className="text__theme text-uppercase mt-5">Contact info</h5>
                        <div className="col-10">
                            <p className="text__theme mb-0 mt-4">Adress:</p>
                            <span classNAme="mt-1">Solna Bussnies Park Feni-2500, Stockholm</span>
                        </div>
                        <div className="col-10 mt-3">
                            <p className="text__theme mb-0">Phone:</p>
                            <p classNAme="mt-1 m-0 col-6"> +08 455 555 44</p>
                            <p classNAme="col-6"> +08 455 555 44</p>


                        </div>
                        <div className="col-10 mt-3">
                            <p className="text__theme mb-0">Email :</p>
                            <span classNAme="mt-1"> Kallefisk123@gmail.com</span>
                            <span classNAme="mt-1"> Kallefisk123@gmail.com</span>
                        </div>
                    </div>


                    <div className=" col-md-6 col-lg-3" id="linksfooter">
                        <h5 className="text__theme text-uppercase pt-5">Usefull links</h5>
                        <div className="col-10 mt-4">
                            <span className="footer__hover">Privacy Policy</span>
                        </div>
                        <div className="col-10 mt-2">
                            <span className="footer__hover">Term & Conditions</span>
                        </div>
                        <div className="col-10 mt-2">
                           <span className="footer__hover">Contact Us</span>
                        </div>
                        <div className="col-10 mt-2">
                           <span className="footer__hover">Our Sitemap</span>
                        </div>
                        <div className="col-10 mt-2">
                           <span className="footer__hover">Latest News</span>
                        </div>
                        <div className="col-10 mt-2">
                           <span className="footer__hover">Returns</span>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-3">
                        <h5 className="text__theme text-uppercase pt-5">recent instagram</h5>
                        <div class="grid-layout-2">
                            <div className="grid-item-footer"></div>
                            <div className="grid-item-footer "></div>
                            <div className="grid-item-footer "></div>
                        </div>
                        <div className="grid-layout-2">
                            <div className="grid-item-footer "></div>
                            <div className="grid-item-footer grid-item-bg "> <i className=" mt-1 fa-2x fab fa-instagram text-white"></i></div>
                            <div className="grid-item-footer "></div>
                        </div>
                        <div className="grid-layout-2">
                            <div className="grid-item-footer "></div>
                            <div className="grid-item-footer "></div>
                            <div className="grid-item-footer "></div>
                        </div>
                        
                    </div>
                </div>
            </div>  
            <div className=" mt-5 bg__footer__dark ">
                <div className="container d-flex justify-content-between ">
                    <div className="pt-4 pb-3">
                        <small className="">Copyright 2020 KentaKata</small>
                    </div>
                    <div className="pt-3 pb-3 d-none d-md-block">
                        <img className="mr-2 img-fluid" src={Mastercard}></img>
                        <img className="mr-2 img-fluid" src={Paypal}></img>
                        <img className="mr-2 img-fluid" src={Visa}></img>
                        <img className="mr-2 img-fluid" src={Payoner}></img>
                        <img src={Discover}></img>
                        
                    </div>
                </div>
            </div> 
        </div>
        
    )
}
