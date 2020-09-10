import React from 'react'
import HeaderNavigation from '../component/HeaderNavigation'
import HeaderLogoNavigation from '../component/HeaderLogoNavigation';
import Navigation from '../component/Navigation';
import HeaderCarousel from '../component/HeaderCarousel';
import ShipingCards from '../component/ShipingCards';
import BigImageGridCategory from '../component/BigImageGridCategory';
import Arrivals from '../component/Arrivals';
import Banner30off from '../component/Banner30off';
import LoggoBanner from '../component/LoggoBanner';
import FlashSale from '../component/FlashSale'
import LatesBlogg from '../component/LatesBlogg';
import Subscribe from '../component/reusable-components/Subscribe';
import FeatureProducts from '../component/FeatureProducts';
import Quotes from '../component/Quotes';
import TopSellers from '../component/TopSellers';

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
