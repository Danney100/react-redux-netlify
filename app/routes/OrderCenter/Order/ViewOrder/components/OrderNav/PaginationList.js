import React from 'react'
import {Row, Col, FormGroup, Pagination, PaginationItem, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  pagination: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
  },
  font: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Medium',
    marginTop: 8,
  },
})

export const PaginationList = () => {
  const classes = useStyles()

  return (
    <Row form className="mr-1">
      <Col>
        <FormGroup row className="mr-md-5 mx-4">
          <Pagination className="mt-3" aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink className={classes.pagination} first />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink className={classes.pagination} previous />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.pagination} next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.pagination} last />
            </PaginationItem>
          </Pagination>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default PaginationList
