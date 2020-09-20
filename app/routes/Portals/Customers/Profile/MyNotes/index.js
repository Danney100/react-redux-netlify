import React, {useEffect, useContext, useState} from 'react'
import AppContext from 'components/App/AppContext'
import {makeStyles} from '@material-ui/core/styles'
import {Row, Col, Card, ListGroup} from 'reactstrap'
import CommonDemo from 'routes/components/CommonDemo'
import ResultTable from './ResultTable'
import PaginationList from 'routes/components/PaginationList/index'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

const MyNote = () => {
  const context = useContext(AppContext)
  const {setTitle} = context
  const classes = useStyles()

  useEffect(() => {
    setTitle('Profile > My Notes')
  }, [])

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col>
          <p className={classes.title}>My Notes</p>
        </Col>
      </Row>
      <Row>
        <Col>
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
                <PaginationList />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MyNote
