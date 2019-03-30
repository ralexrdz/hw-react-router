import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Perfil from './components/Perfil';

import logo from './logo.svg';


import './App.css';

class App extends Component {

  constructPosts (arr) {
    return arr.map(post => {
      return <div className="post">
        <div><img src={post.image} alt=""/></div>
        <div><h2>post.title</h2><button>Compartir</button></div>
      </div>
    })
  } 

  render() {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/perfil/:id" component={Perfil}/>
          {/* /perfil/1  o /perfil/2 */}
        </Switch>
      </>
    )
  }
}

export default App;
