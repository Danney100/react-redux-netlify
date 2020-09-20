import React from 'react'
import {Card, CardBody} from 'reactstrap'
import AddressCard from './components/AddressCard'
import ButtonsRow from './components/ButtonsRow'

function ShippingAddressCard() {
  return (
    <Card className="my-3">
      <CardBody>
        <span className="sub-title sc-oswald-semibold">Choose a Shipping Address</span>
        <hr />
        <div className="sub-heading sc-avenir-heavy">Where is this order shipping?</div>
        <ButtonsRow />
        <AddressCard />
      </CardBody>
    </Card>
  )
}

export default ShippingAddressCard
