import React from 'react'
import Subscribeimg from '../../images/subscribeimg.png'

export default function Subscribe() {
    return (
        <div className="container-fluid bg__header__carousel mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mt-5 mb-4">
                        <h1>SUBSCRIBE<span className="text__theme ml-2">NOW</span></h1>
                        <p>Signup for awesome news about our new products and
                            know our special discounts on products.
                        </p>
                        <div class="input-group mb-3">
                            <input type="text" className="form-control position-relative sub__input " placeholder="Enter email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                   <button className="btn__radius__sub position-absolute mt-1 bg__theme border-0 text-white px-4">Subscribe</button>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-5 offset-md-1 offset-lg-2">
                            <img src={Subscribeimg} className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>
            )
        }
