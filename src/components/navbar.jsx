import React, { Component } from "react";
import Styled from "styled-components";
import {Route} from 'react-router-dom'
import World from '../pages/world.jsx'
import Content from '../components/content.jsx'
// import './style/navbar.css'

const Nav = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
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
          <Route path="/" />
          <Route path="/world" component={World} />
          <Route path="/content" component={Content} />
          <Route path="/about" />
        </div>
      </div>
    );
  }
}

export default Navbar;
