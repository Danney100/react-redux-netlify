import React from 'react'
import {Row, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  itemBtn: {
    height: '40px',
  },
})

const Heading = () => {
  const classes = useStyles()

  return (
    <Row className="mt-3 mt-lg-0">
      <Col sm={6}>
        <h2 className="title">Price Rule Manager</h2>
      </Col>
      <Col sm={6} className="d-flex justify-content-lg-end">
        <CommonButton
          title="Create New Price Rule"
          buttonType="addItemButton"
          wrapperClass={`${classes.itemBtn} ml-0`}
        />
      </Col>
    </Row>
  )
}

export default Heading
