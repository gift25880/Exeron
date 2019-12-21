import React, { Component } from 'react'

const LineHeight = {
    lineHeight: '20px'
}
export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-text text-white text-center">
                    <h3 style={{paddingTop: '12%', paddingBottom: '15%'}}>I am EXERON</h3>
                    <p>The beginning of the</p>
                    <img src="../static/images/off-grid.png"/>
                    <h5 style={{fontWeight: 'bold'}} className="mt-2">REVOLUTION</h5>
                </div>
                <br/>
                <div className="pr-5 text-right" style={LineHeight}>
                    <a className="text-white font-weight-light video-link" style={{fontSize: "30px"}}>Videos <span className="text-primary video-link">➜</span></a>
                    <br/>
                    <a className="text-primary" style={{paddingRight: '2.5%'}}><span className="video-link"><b>Meet the EXERON</b> technology</span></a>
                </div>
            </div>
        )
    }
}
