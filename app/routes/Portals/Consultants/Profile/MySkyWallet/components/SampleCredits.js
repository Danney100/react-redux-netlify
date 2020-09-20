import React from 'react'
import {Row, Col, Card, CardBody, CardTitle, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PaginationsList from 'routes/components/PaginationList/index'
import ResultTable from './ResultTable'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    fontSize: '22px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const SampleCredits = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="text-white rounded-top mx-1 border-bottom">
              <CardTitle tag="h5" className="mb-0">
                <Row>
                  <Col xs={12} sm={12} md={9} className="mt-3 d-flex justify-content-start">
                    <span className={classes.title}>Personal Sales Sample Credits: $0.00</span>
                  </Col>
                  <Col xs={12} sm={12} md={3} className="mt-1 d-flex justify-content-end">
                    <CommonButton title="Transfer Refunds" buttonType="cancelButton" />
                  </Col>
                </Row>
              </CardTitle>
            </CardBody>
            <div>
              <ListGroup>
                <ResultTable />
                <PaginationsList />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SampleCredits
