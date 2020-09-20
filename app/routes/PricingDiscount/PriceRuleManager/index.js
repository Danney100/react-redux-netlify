import React, {useEffect, useContext, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardBody, Row, Col, Input} from 'reactstrap'

import AppContext from 'components/App/AppContext'
import Heading from './components/Heading'
import PriceRuleTable from './components/PriceRuleTable'

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
    },
    '& .table-title': {
      fontFamily: 'DINCondensed-Bold',
      fontSize: '22px',
      fontWeight: 'bold',
      fontStretch: 'condensed',
      color: '#403839',
    },
  },
})

const PriceRuleManager = () => {
  const classes = useStyles()

  const [isExpired, setIsExpired] = useState(false)

  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Pricing & Discounts > Price Rule Manager')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0`}>
      <Heading />
      <Card className="mt-3">
        <CardBody className="mb-0">
          <Row>
            <Col sm="5" md="5" lg="3" className="table-title">
              Price Rules
            </Col>
            <Col sm="7" lg="9" className="mt-3 mt-sm-2 text-sm-right">
              <Input type="checkbox" onChange={() => setIsExpired(!isExpired)} className="ml-0" />
              <span className={`${isExpired ? 'active' : 'inactive'} pl-4`}>Show Expired</span>
            </Col>
          </Row>
        </CardBody>
        <PriceRuleTable />
      </Card>
    </div>
  )
}

export default PriceRuleManager
