import React from 'react'

export default function Banner30off() {
    return (
        <div className="container-fluid bg__dark__gray mb-5 mt-5">
            <div className="container">
                <div className="row">
                <div className=" col-lg-7 text-white">
                   <div className="col-lg-5 theme text-center py-custom bg__theme">
                    <span className="extra__h1 font-weight-bold"> 30%</span>
                    <span className="extra__h3 font-weight-bold"> OFF</span>
                    <p className="text-uppercase">for new customers </p>
                    <button className=" px-5 py-3 btn btn__radius__header bg__btn__blue text-uppercase text-white font-weight-bold">shop now</button>
                   </div>
                
                </div>
                <div className="col-lg-5 text-white align-self-center py-5 text-sm-center text-lg-left center__element__sm">
                    <small>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</small>
                   <div className="mt-4 text-sm-center  text-lg-left">
                   <button className="btn px-5 py-3 btn-light btn__radius__header text__theme text-uppercase font-weight-bold btn-sm"> Learn more</button>
                   </div>
                   
                </div>
                </div>
                
            </div>
        </div>
    )
}
