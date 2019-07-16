import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import landingbg from './assets/landing-bg.png';
import { Route } from 'react-router-dom'
import {Link, animateScroll as scroll} from 'react-scroll';
// luloclean font needed RAPID FIX H1 and h2

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      landing: true
    }
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Route path="/" exact component={Landing} /> 
          <Route path="/services" exact component={Home} /> 
        </main>
        <Footer />
      </div>
    )
  }
}
