import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from '../src/component/Footer'
import LandingPage from './views/LandingPage';
import NavigationView from './views/NavigationView';
import Shop from './views/Shop';




function App() {
  return (
    <div>
      <BrowserRouter> 
      <NavigationView />
      
    

      
        
          <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/shop" component={Shop} />
            

          </Switch>
          <Footer />
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
