import React from 'react'
import TopSellersCard from './TopSellersCard'
import ZikeZake from '../../../src/images/ZickZack.png'


export default function TopSellers() {
    return (
        <div className="container">
                <div className="text-center pt-5">
                <h1>TOP <span className="text__theme">SELLERS</span></h1>
                <img src={ZikeZake}></img>
                <p className="mt-3"> We always try to give u the best product within a fast and reliable way</p>
            </div> 
            <TopSellersCard />           
        </div>
    )
}
