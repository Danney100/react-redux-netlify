import React from 'react'
import {Row, Col, FormGroup, Pagination, Label, PaginationItem, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  paginationarrow: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
    width: 32,
    marginLeft: 2,
    borderRadius: 5,
  },
  paginationnum: {
    fontSize: '14px',
    color: '#ffffff',
    fontFamily: 'Avenir-Heavy',
    height: 40,
    width: 55,
    backgroundColor: '#6c6766',
    marginLeft: 2,
    borderRadius: 5,
  },
  font: {
    fontSize: '12px',
    color: '#a09d9d',
    fontFamily: 'Avenir-Heavy',
    marginTop: 28,
  },
})

export const PaginationsList = () => {
  const classes = useStyles()

  return (
    <Row form className="d-flex justify-content-between">
      <Col sm={10} className="d-flex justify-content-start">
        <FormGroup row className="mr-md-2 mx-3">
          <Pagination className="mt-3" aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink className={classes.paginationarrow} first />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink className={classes.paginationarrow} previous />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationnum}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem></PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationarrow} next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationarrow} last />
            </PaginationItem>
          </Pagination>
        </FormGroup>
      </Col>
      <Col sm={2} className={`${classes.font} d-flex justify-content-end`}>
        <FormGroup>
          <Label>1-1 of 1 items</Label>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default PaginationsList
