import React from 'react'
import {Row, Col, Pagination, Label, PaginationItem, PaginationLink} from 'reactstrap'
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
  },
})

export const SearchResult = () => {
  const classes = useStyles()

  return (
    <Row className="mr-0 d-flex justify-content-between mt-3">
      <Col xs={12} sm={4} className="d-flex justify-content-start ml-3">
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink className={classes.pagination} first />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink className={classes.pagination} previous />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink className={classes.pagination}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={classes.pagination}>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={classes.pagination}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={classes.pagination}>4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={classes.pagination}>...</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={classes.pagination} next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className={classes.pagination} last />
          </PaginationItem>
        </Pagination>
      </Col>
      <Col  xs={12} sm={4} className="d-flex justify-content-end mt-3">
        <Label>
          <p className={`${classes.font}`}>1 - 1 of 1 items</p>
        </Label>
      </Col>
    </Row>
  )
}

export default SearchResult
