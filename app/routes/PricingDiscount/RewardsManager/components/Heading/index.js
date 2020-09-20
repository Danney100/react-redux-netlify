import React from 'react'
import {Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'

const useStyles = makeStyles({
  itemBtn: {
    height: '40px',
  },
})

const Heading = () => {
  const classes = useStyles()

  return (
    <Row className="mt-3 mt-lg-0">
      <Col sm={12}>
        <h2 className="title">Price Rule Manager</h2>
      </Col>
      <Col sm={12}>
        <CommonDemo
          item="success"
          wrapperClass="mx-0"
          content="The Rewards Manager allows you to view and manage all event host, promotional rewards, and coupon types configured in the system. Rewards are used to configure requirement thresholds that can award a shopper with a designated reward for meeting the requirement(s)."
          contentOne="Feature Guide Link &nbsp;"
          contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
          contentThree="The Rewards Manager page displays a grid with all active host rewards, promotional rewards, and coupon types. Users can also show expired rewards for historical reference."
        />
      </Col>
      <Col sm={12} className="d-flex justify-content-lg-end mt-3 mb-3">
        <CommonButton
          title="Add New Promotional Rewards    "
          buttonType="addItemButton"
          wrapperClass={`${classes.itemBtn} ml-0`}
        />
      </Col>
    </Row>
  )
}

export default Heading
