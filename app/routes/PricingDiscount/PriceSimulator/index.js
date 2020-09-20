import React, {useEffect, useContext} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardBody, Row, Col, Input} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import PriceDetails from './components/PriceDetails'
import CommonButton from 'routes/components/CommonButton'
import SimulatedPricesTable from './components/SimulatedPricesTable'

const useStyles = makeStyles({
    root: {
      '& .title': {
        fontSize: '32px',
        color: '#403839',
        fontFamily: 'DINCondensed-Bold',
      },
      '& .sub-title': {
        fontFamily: 'DINCondensed-Bold',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#403839',
        fontStretch: 'condensed',
      },
      '& .label': {
        fontFamily: 'SFUIText-Semibold',
        fontSize: '14px',
        fontWeight: 600,
        color: '#403839',
      },
      '& .commonBtn': {
          height: '40px',
          width : '240px'
      }
    },
  })

const PriceSimulator = () => {
    const classes = useStyles()
    const context = useContext(AppContext)
    const {setTitle} = context

    useEffect(() => {
        setTitle('Pricing & Discounts > Price Simulator')
    }, [])

    return (
        <div className={`${classes.root} px-3 px-lg-0`}>
            <h2 className="title mt-3 mt-lg-0">Price Simulator</h2>
            <PriceDetails/>
            <div className="d-flex justify-content-sm-end">
                <CommonButton title="Generate Price" buttonType="addButton" wrapperClass="commonBtn"/>
            </div>
            <Card className="my-4">
                <CardBody className="pb-0">
                    <Row>
                        <Col className="sub-title">
                            Simulated Prices
                        </Col>
                    </Row>
                    <hr/>
                </CardBody>
                <SimulatedPricesTable/>
            </Card>
            <div className="d-flex justify-content-sm-end mb-4">
                <CommonButton title="Export To Excel" buttonType="addButton" wrapperClass="commonBtn"/>
            </div>
        </div>
    )
}

export default PriceSimulator
