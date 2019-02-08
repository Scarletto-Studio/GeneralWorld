import React , {Component} from 'react'
import Styled from 'styled-components'
import '../App.css'

const Nav = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f3d0d4;
    &:hover {
        background: #f3d0e6;
    }
`
class World extends Component {
    render() {
        return(
            <div className="App-header">
                <ul>
                    <Nav>World Tour</Nav>
                    <Nav>World Illust</Nav>
                    <Nav>World Sanctuary</Nav>
                </ul>
            </div>
        )
    }
}

export default World