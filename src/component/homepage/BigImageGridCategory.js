import React from 'react'
import ZikeZake from '../../../src/images/ZickZack.png'

export default function BigImageGridCategory() {
    return (
        <div className="container my-5 d-none d-sm-block">
            <div className="text-center pt-5">
                <h1>SHOP BY <span className="text__theme">CATEGORY</span></h1>
                <img src={ZikeZake}></img>
                <p className="mt-3"> We always try to give u the best product within a fast and reliable way</p>
            </div>

            <div className="container d-none d-sm-block">
                <div className="grid-layout">
                    <div className="grid-item grid-item-1 d-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Men</p>
                        </div>

                    </div>
                    <div className="grid-item span-4 grid-item-2 d-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Women</p>
                        </div>
                    </div>
                    <div className="grid-item span-2 grid-item-3 d-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Kids</p>
                        </div>
                    </div>
                    <div className="grid-item span-2 grid-item-3 d-none d-lg-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Shoes</p>
                        </div>
                    </div>
                    <div className="grid-item grid-item-1 d-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Hats</p>
                        </div>
                    </div>
                    <div className="grid-item span-4 grid-item-2 d-none d-lg-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Sunglasses</p>
                            <p className="my-auto text-white font-weight-light">18 products</p>
                        </div>
                    </div>
                    <div className="grid-item grid-item-1 d-flex">
                        <div className="bg-blue align-self-end col-6 py-2 inline__radius">
                            <p className="my-auto">Watches</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
