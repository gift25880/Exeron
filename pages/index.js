import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'


const Wrap = styled.div`
    background-color: black;
`

const BackgroundNavAndBg = styled.div`
    background-image: url('/static/images/home-intro-bg.jpg');
    background-repeat: no-repeat;
    background-size: 52%;
    background-position: center;
`

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <Wrap>
                    <BackgroundNavAndBg>
                        <Navbar/>
                        <Banner/>
                    </BackgroundNavAndBg>
                </Wrap>
            </Fragment>
        )
    }
}
