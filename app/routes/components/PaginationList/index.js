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
    width: 40,
    backgroundColor: '#6c6766',
    marginLeft: 2,
    borderRadius: 5,
  },
  paginationnumber: {
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'Avenir-Heavy',
    height: 40,
    width: 36,
    backgroundColor: '#f7f7f7',
    marginLeft: 2,
    borderRadius: 5,
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

export const PaginationsList = () => {
  const classes = useStyles()

  return (
    <Row form className="d-flex justify-content-between">
      <Col sm={9} className="d-flex justify-content-start">
        <FormGroup row className="mr-md-2 ml-2 mr-3">
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
            <PaginationItem>
              <PaginationLink className={classes.paginationnumber}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationnumber}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationnumber}>4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationnumber}>..</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationarrow} next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationarrow} last />
            </PaginationItem>
          </Pagination>
        </FormGroup>
      </Col>
      <Col md={{size: 2}} className={`${classes.font} d-flex justify-content-end mt-4 mr-4`}>
        <FormGroup>
          <Label>No items to display</Label>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default PaginationsList
