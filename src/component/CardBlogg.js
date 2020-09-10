import React from 'react'
import BgBlogg from '../images/BgBlogg.png'

export default function CardBlogg() {
    return (
        <div>
             <div className="row">
                    <div className="col-lg-3 rounded d-none d-lg-block">
                        <img src={BgBlogg}></img>

                    </div>
                    


                    <div className="bg__card col-sm-12 col-md-6  col-lg-3  rounded height__card">
                        <div className="bg__theme col-3 text-white pb-3  ">
                            <h1 className=" h1__blog font-weight-bold pt-2">29</h1>
                            <span className="">MAR</span>
                        </div>

                        <div className="text-white mt-3 col-10">
                            <small>By Adam Moore</small>
                            <p className="mt-2 mb-3 text__theme font-weight-bold">A Beutiful Scenery in the world we are missing</p>
                            <div>
                                <span className=" border px-2 mr-2">Travel</span>
                                <span className="border px-2">Fashion</span>
                            </div>
                            <button className=" mt-3 btn px-3 py-1  btn-light btn__radius__header text__theme   btn-sm"> Read More</button>
                        </div>


                    </div>
                    <div className="col-lg-3 rounded d-none d-lg-block">
                        <img src={BgBlogg}></img>
                    </div>


                    <div className="bg__card col-sm-12 col-md-6  col-lg-3  rounded height__card">
                        <div className="bg__theme col-3 text-white pb-3  ">
                            <h1 className=" h1__blog font-weight-bold pt-2">29</h1>
                            <span className="">MAR</span>
                        </div>

                        <div className="text-white mt-3 col-10">
                            <small>By Adam Moore</small>
                            <p className="mt-2 mb-3 text__theme font-weight-bold">A Beutiful Scenery in the world we are missing</p>
                            <div>
                                <span className=" border px-2 mr-2">Travel</span>
                                <span className="border px-2">Fashion</span>
                            </div>
                            <button className=" mt-3 btn px-3 py-1  btn-light btn__radius__header text__theme   btn-sm"> Read More</button>
                        </div>


                    </div>

                    

                </div>
        </div>
    )
}
