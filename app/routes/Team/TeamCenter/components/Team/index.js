import React from 'react'
import {Row, Col, Card, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import Pagination from './Pagination'
import ResultTable from './ResultTable'

const useStyles = makeStyles({
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
})
export const Team = () => {
  const classes = useStyles()

  return (
    <div className="mb-3">
      <Row className="p-3">
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12}>
            <div tag="h5">
              <p className={classes.title}>Team</p>
              <hr className={classes.border} />
            </div>
            <div>
              <ListGroup className="p-2">
                <ResultTable />
                <Pagination />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Team
