import React from 'react';
import Header from './Component/Header';
import {Route, Switch} from 'react-router-dom';
import Home from './Component/Pages/Home';
import AboutUs from './Component/Pages/AboutUs';
import ExploreFoods from './Component/Pages/ExploreFoods';
import Reviews from './Component/Pages/Reviews';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Header/>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about'  component={AboutUs}/>
          <Route path='/explore'  component={ExploreFoods}/>
          <Route path='/testimonials'  component={Reviews}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

//npm install react-router-dom@5.2.0
