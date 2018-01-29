import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled, {keyframes} from  'styled-components';

const Outer = styled.div`
   text-align: center;
   > h2{
   color: red;
   }
`
const Header = styled.div`
    background-color: Red;
    ${ props => props.dark && 'color:black;'}
`
const spin = keyframes`
    from {transform: rotate(360deg);}
    to {transform: rotate(0deg);}
`
const Logo = styled.img`
     animation: ${ spin } infinite 20s linear;
     // magic string
     ${ props => props.one && 'animation-direction: reverse;' } 
     height: 120px;
     width: 120px;
`
const Intro = styled.p`
    color: green;
`


class App extends Component {
  render() {
    return (
      <Outer>
          <p> krishna </p>
          <h2>Hacker</h2>

          <Header dark styles={{textAlign: 'right', fontWeight: 400}}>Helo world </Header>


          <Logo src={logo} className="App-logo" alt="logo" />
          <Logo one src={logo} className="App-logo" alt="logo" />

          <Intro><p>Helo world</p></Intro>
      </Outer>
    );
  }
}

export default App;
