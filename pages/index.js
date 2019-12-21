import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/index.css'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import TwoCols from '../components/TwoColumn'


const Wrap = styled.div`
    background-color: black;
`

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <Wrap>
                    <video autoPlay loop width="100%" className="text-center">
                        <source src="../static/images/banner.mp4" type="video/mp4"/>
                    </video>        
                    <div className="overlay">
                        <Navbar/>
                        <Banner/>
                    </div>
                </Wrap>   
                <TwoCols/> 
            </Fragment>
        )
    }
}
