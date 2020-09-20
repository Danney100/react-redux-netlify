import React from 'react'
import {Row, Col} from 'reactstrap'
import {useHistory} from 'react-router-dom'

import CommonButton from 'routes/components/CommonButton'

const Heading = () => {
  const history = useHistory()

  const changeRoute = () => {
    history.push('/compensation/sky-wallet-payouts/new-sky-wallet-payout-method')
  }

  return (
    <Row className="pt-3 pt-lg-0">
      <Col sm="auto">
        <span className="title">Process Sky Wallet Payouts</span>
      </Col>
      <Col className="w-100 pt-2">
        <CommonButton
          title="Manage Payout Methods"
          buttonType="addItemButton"
          wrapperClass="ml-0 mb-2 ml-md-4 float-right"
          onClick={changeRoute}
        />
      </Col>
    </Row>
  )
}

export default Heading
