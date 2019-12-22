import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import styled from 'styled-components'
import { Header, Content } from '../components/Text'

const ColBg = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;
    color: white;
`
const PaddingContent =  styled.div`
    padding-top: ${props => props.pt};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    padding-bottom: ${props => props.pb};
`

const TwoCols = (props) => {
    return(
        <Container fluid>
            <Row>
                <Col lg="6" className="no-gutter">
                    <ColBg bg="../static/images/how_it_works.jpg">
                        <PaddingContent pl="10%" pt="8%" pr="10%" pb="15%">
                            <Header headerText="How It works" />
                            <Content content="X can simultaneously control different power sources and battery storage" />
                            <br/>
                            <Content content="Uninterrupted output power through intelligent control of various energy sources: PV, wind, diesel genset and grid (if available)." />
                            <Content content="A battery is used to store energy for later use at night time, for peak shaving during day time or to provide resilient energy to the load during grid outages." />
                            <Content content="Advanced diesel genset control guarantees maximize OPEX reduction." />
                        </PaddingContent>
                    </ColBg>
                </Col>
                <Col lg="6" className="no-gutter">
                    <div style={{backgroundColor: '#24272A', color: 'white'}}>
                        <PaddingContent>
                            <Header headerText="Distributed Power Generation"/>
                            <Content content="EXERON or just X - the local power plant with integrated intellect</Con>"/>
                        </PaddingContent>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TwoCols;

