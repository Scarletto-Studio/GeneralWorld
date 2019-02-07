import React , {Component} from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    background: black;
    color: white;
    height: 100%;
`

class Footer extends Component {
    render() {
        return(
            <Foot>
                <p> Copyright© 2019 Scarletto Studio, All Rights Reserved </p>
            </Foot>
        )
    }
}

export default Footer