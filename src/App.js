import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import './App.css';
 
import Home from './Pages/Home';
import Category from './Pages/Category';
import Detail from './Pages/Detail';
import Error from './Pages/Error';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';



class App extends Component { 
  //  constructor(props) {
  //   super(props); 
  // }; 
 

 
  render() {
    return (
      <div> 
        <Router>
        <Header/> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:section1/:section2/:year/:month/:day/:titleUrl" component={Detail} />
            <Route path="/:section1/:year/:month/:day/:titleUrl" component={Detail} />
            <Route path="/:category" component={Category}/>  
            <Route component={Error}/>
          </Switch>
          <Footer/>   
        </Router>
     
      </div>
    );
  }c
}

export default App;

