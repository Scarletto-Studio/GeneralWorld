import React, { Component } from "react";
import Styled from "styled-components";
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
          <List><a href="#">Home</a></List>
          <List><a href="#">World</a></List>
          <List><a href="#">Content</a></List>
          <List><a href="#">About Us</a></List>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
