import React, { Component } from "react"
import Styled from "styled-components"
import {Route} from 'react-router-dom'
import Home from '../pages/home.jsx'
import World from '../pages/world.jsx'
import Content from '../pages/content.jsx'
import About from '../pages/about.jsx'
// import './style/navbar.css'

const Nav = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f3d0d4;
`;

const List = Styled.li`
  display: inline;
  margin: 10px;
  &:hover {
    background-color: white;
    width: 100%;
    height: 100%;
  }
`

class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <List><a href="/">Home</a></List>
          <List><a href="/world">World</a></List>
          <List><a href="/content">Content</a></List>
          <List><a href="/about">About Us</a></List>
        </Nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/world" component={World} />
          <Route path="/content" component={Content} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default Navbar;
