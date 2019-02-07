import React , {Component} from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    background: #a1a8b0;
    display: flex;
    justify-content: center;
    color: white;
    height: 100%;
    weight: 100%;
    top: 0;
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