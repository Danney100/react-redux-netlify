import React  from 'react'
import {Row, Col, Card, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import PaginationsList from 'routes/components/PaginationList/index'
import PurchasedTable from './PurchasedTable'

const useStyles = makeStyles({
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
  },
})
const index = () => {
  const classes = useStyles()

  return (
    <div>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-3 p-1">
        <Row className="border-bottom ml-2 mr-2">
          <Col xs={10} className="d-flex justify-content-start">
            <p className={classes.subtitle}>Purchased Gift Cards</p>
          </Col>
        </Row>
        <div className="mt-2 ml-2">
          <PurchasedTable />
        </div>
        <div className="ml-3">
          <ListGroup>
            <PaginationsList />
          </ListGroup>
        </div>
      </Card>
    </div>
  )
}

export default index
