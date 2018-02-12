import React, { Component } from 'react';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Projects'

class App extends Component {
  render() {
    return (
      <div>  
          <Navbar/>
          < Home />
          <About />
          <Project/>
      </div>
    );
  }
}

export default App;
