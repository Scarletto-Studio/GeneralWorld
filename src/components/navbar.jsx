import React, { Component } from "react";
import Styled from "styled-components";

const Nav = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>World</li>
          <li>Content</li>
          <li>About Us</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
