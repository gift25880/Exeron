import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components'

const ColBg = styled.div`
    background-image: url(${props => props.bg});
    color: white;
`


const TwoCols = (props) => {
    return(
        <Row>
            <Col lg="6">
                <ColBg bg="../static/images/how_it_works.jpg">
                    <h1 className="font-weight-light">How It works</h1>
                    <p>X can simultaneously control different power sources and battery storage</p>
                    <br/>
                    <p>
                        Uninterrupted output power through intelligent control of various energy sources: 
                        <br/>    
                        PV, wind, diesel genset and grid (if available).
                    </p>
                    <p>
                        A battery is used to store energy for later use at night time, for peak shaving 
                        <br/>
                        during day time or to provide resilient energy to the load during grid outages.
                    </p>
                    <p>
                        Advanced diesel genset control guarantees maximize OPEX reduction.
                    </p>
                </ColBg>
            </Col>
            <Col lg="6"></Col>
        </Row>
    );
}

export default TwoCols;

