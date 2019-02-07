import React , {Component} from 'react'
import styled from 'styled-components'
import './style/content.css'

const Topic = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
`

class HeadContent extends Component {
    render() {
        return(
            <div>
                <Topic>General World</Topic>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return(
            <div>
                <HeadContent />
            </div>
        )
    }
}

export default Content