import React from 'react'
import { Col } from 'reactstrap'

import loginImg from 'images/login/wine.png'
import logo from 'images/logos/logoWhite.png'

function ScoutImage() {
    return (
        <Col
        sm="6"
        className="p-0 imgCol"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          opacity: '0.92',
          backgroundColor: '#423b3c',
        }}>
            <div className="d-lg-flex flex-column h-75 align-items-center justify-content-center d-none">
            <img width="54%" src={logo} className="mb-5" />
            <span className="h3 font-weight-bold mt-5" style={{color: '#fcfaf9'}}>
                Staging
            </span>
            <span className="h4 mt-2" style={{color: '#fcfaf9'}}>
                Login
            </span>
            </div>
        </Col>
    )
}

export default ScoutImage
