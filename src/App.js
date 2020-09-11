import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from '../src/component/Footer'
import LandingPage from './views/LandingPage';
import NavigationView from './views/NavigationView';
import Shop from './views/Shop';
import SmallHeader from './component/SmallHeader';
import WishList from '../src/views/WishList'




function App() {
  return (
    <div>
      <BrowserRouter> 
      <NavigationView />
      
    

      
        
          <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/wishlist" component={WishList} />
            

          </Switch>
          <Footer />
         
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
