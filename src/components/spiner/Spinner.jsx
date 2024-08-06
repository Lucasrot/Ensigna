/* eslint-disable no-unused-vars */
import React from 'react'
import spiner from './homero.gif'

export const Spinner = () => {
    return (
        <div>
            <h6>Loading...</h6>
            <img src={spiner} alt="Loading..." style={{ width: "400px", height: "400px", display: "block", margin: "auto" }} />
        </div>
    )
}
