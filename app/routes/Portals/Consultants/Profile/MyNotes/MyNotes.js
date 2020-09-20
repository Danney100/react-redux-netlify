import React, {useEffect, useContext, useState} from 'react'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {Row, Col, Card, CardBody, CardTitle, ListGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import ResultTable from './ResultTable'
import PaginationsList from 'routes/components/PaginationsList/index'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const MyNotes = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('Profile > My Notes')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="ml-2 d-flex align-items-center">
          <p className={classes.title}>My Notes</p>
        </Col>
      </Row>
      <Row>
        <Col className="mx-2">
          <Card lg={12} md={12} sm={12} xs={12}>
            <CommonDemo
              item="danger"
              content="This area displays messages you have received. 
                You may view a note and mark it as read by clicking the
                 View button next to the note in the table below."
            />
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

export default MyNotes
