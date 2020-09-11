import React from 'react'

import HeaderCarousel from '../component/homepage/HeaderCarousel';
import ShipingCards from '../component/homepage/ShipingCards';
import BigImageGridCategory from '../component/homepage/BigImageGridCategory';
import Arrivals from '../component/homepage/Arrivals';
import Banner30off from '../component/homepage/Banner30off';
import LoggoBanner from '../component/homepage/LoggoBanner';
import FlashSale from '../component/homepage/FlashSale'
import LatesBlogg from '../component/homepage/LatesBlogg';
import Subscribe from '../component/homepage/Subscribe';
import FeatureProducts from '../component/homepage/FeatureProducts'
import Quotes from '../component/homepage/Quotes';
import TopSellers from '../component/homepage/TopSellers';

export default function LandingPage() {
    return (
        <div>
            
      <HeaderCarousel />
      <ShipingCards/>
      <BigImageGridCategory/>
      <Arrivals/>
      <Banner30off />
      <FeatureProducts />
      <FlashSale />
      <TopSellers />
      <Quotes  />
      <LatesBlogg />
      <Subscribe />
      <LoggoBanner />
     
        </div>
    )
}
