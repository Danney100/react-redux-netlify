import React from 'react'
import {Row, Col, Pagination, Label, Input, PaginationItem, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  pagination: {
    height: 30,
  },
})

export const SearchResult = () => {
  const classes = useStyles()

  return (
    <Row className="my-3 mx-1">
      <Col lg="4" className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink first />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink previous />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last />
          </PaginationItem>
        </Pagination>
      </Col>
      <Col lg="4" className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
        <Row>
          <Col>
            <Input type="select" name="select" id="exampleSelect" className={classes.pagination}>
              <option>5</option>
              <option>10</option>
            </Input>
          </Col>
          items per page
        </Row>
      </Col>
      <Col
        lg={{size: 2, offset: 2}}
        className="d-flex mb-2 mb-lg-0 justify-content-lg-end justify-content-center">
        <Label>1-5 of 500 items</Label>
      </Col>
    </Row>
  )
}

export default SearchResult
