import React from 'react'
import ShopCard from './ShopCard'
import ZickZack from '../../src/images/ZickZack.png'

import WishlistCard from './WishlistCard'
import LoggoBanner from './homepage/LoggoBanner'


export default function WishProducts() {
    return (
      
            <div className="container">
             <div className="text-center pt-5">
                <h1>YOUR PRODUCTS <span className="text__theme">WISHLIST</span></h1>
                <img src={ZickZack} />
            </div>

        <div className="row mt-5">
            <div className="col-12">
                
                <WishlistCard />   
            </div>
                <div className="col-12 mt-5">
                <WishlistCard />
                </div>
            
        </div>
            <LoggoBanner />
        </div>
       
    )
}
