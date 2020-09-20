import React from 'react'
import {
  Row,
  Col,
  FormGroup,
  Pagination,
  Label,
  Input,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  pagination: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
  },
  pagination1: {
    width: 100,
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

const ProductPagination = () => {
  const classes = useStyles()

  return (
    <Row form className="mr-1">
      <Col md={11}>
        <FormGroup row className="mr-md-5 mx-4">
          <Pagination className="mt-3" aria-label="Page navigation example">
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
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            className={`${classes.pagination1} ml-4 mt-3`}>
            <option>5</option>
            <option>10</option>
          </Input>
          <p className={`${classes.font} ml-2 mt-4`}>items per page</p>
        </FormGroup>
      </Col>
      <Col md={{size: 1, offset: 5}} className={`${classes.font} mx-sm-0 mx-4 mt-4`}>
        <FormGroup>
          <Label>1-5 of 500 items</Label>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default ProductPagination
