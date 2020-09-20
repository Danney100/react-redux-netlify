import React from 'react'
import {Card, CardBody} from 'reactstrap'
import ButtonsRow from './components/ButtonsRow'
import CreditCard from './components/CreditCard'

const BillingMethodCard = () =>{
  return (
    <Card className="my-3">
      <CardBody>
        <span className="sub-title sc-oswald-semibold">Choose a billing method</span>
        <hr />
        <div className="sub-heading sc-avenir-heavy mb-3">Who is Paying?</div>
        <ButtonsRow />
        <CreditCard />
      </CardBody>
    </Card>
  )
}

export default BillingMethodCard
