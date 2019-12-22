import React, { Component, Fragment } from 'react'

export const Header = ({ headerText }) => {
    return (
        <h2 className="font-weight-light">
            { headerText }
        </h2>
    )
}
 

export const Content = ({ content }) => {
    return (
        <p>
            { content }
        </p>
    )
}