import React, { Component } from "react";
import Styled from "styled-components";
import { Route } from "react-router-dom";
import {Navbar , Nav} from 'react-bootstrap'
import Home from "../pages/home.jsx";
import World from "../pages/world.jsx";
import Content from "../pages/content.jsx";
import About from "../pages/about.jsx";
// import './style/navbar.css'

// const Nav = Styled.ul`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     background-color: #f3d0d4;
// `;

// const List = Styled.li`
//   display: inline;
//   margin: 10px;
//   &:hover {
//     background-color: white;
//     width: 100%;
//     height: 100%;
//     text-decoration: none;
//   }
// `;

class Navibar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="danger" variant="light">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/world">World</Nav.Link>
            <Nav.Link href="/content">Content</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Navbar>
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

export default Navibar;
