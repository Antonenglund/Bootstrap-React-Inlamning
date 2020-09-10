import React from 'react'
import HeaderNavigation from '../component/HeaderNavigation'
import HeaderLogoNavigation from '../component/HeaderLogoNavigation';
import Navigation from '../component/Navigation';

export default function NavigationView() {
    return (
        <div>
            <HeaderNavigation />
            <HeaderLogoNavigation/>
             <Navigation />
        </div>
    )
}
