import React, { Component } from 'react'


export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-text text-white text-center">
                    <h3 style={{paddingTop: '12%', paddingBottom: '15%'}}>I am EXERON</h3>
                    <p>The beginning of the</p>
                    <img src="../static/images/off-grid.png"/>
                    <h6 style={{fontWeight: 'bold'}}>REVOLUTION</h6>
                </div>
            </div>
        )
    }
}
