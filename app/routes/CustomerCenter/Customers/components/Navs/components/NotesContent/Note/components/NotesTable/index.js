import React from 'react'
import {Table, Col, Row, Label, PaginationItem, Pagination, PaginationLink} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import iconEdit from 'images/commonIcons/edit.svg'
import iconDelete from 'images/commonIcons/delete.svg'

const useStyles = makeStyles({
  imageSize: {
    height: 25,
    padding: 3,
    marginRight: 8,
  },
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  theadFont: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
  },
  paginationStyle: {
    height: 40,
    width: 30,
  },
  paginationCenterLink: {
    height: 40,
    width: 40,
  },
  paginationCenterItem: {
    backgroundColor: '#6c6766',
  },
})

const NotesTable = () => {
  const classes = useStyles()

  return (
    <div className="mt-3">
      <Table responsive striped>
        <thead className={classes.theadFont}>
          <tr>
            <th>
              <span className="ml-2">Date</span>
            </th>
            <th>
              <span>Subject</span>
            </th>
            <th>
              <span>Type</span>
            </th>
            <th>
              <span>Created By</span>
            </th>
            <th>
              <span>Note</span>
            </th>
            <th>
              <span>Display As Message?</span>
            </th>
            <th>
              <span>Opened?</span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.tbodyFont}>6/25/2020</td>
            <td className={classes.tbodyFont}>LLC update</td>
            <td className={classes.tbodyFont}>Email</td>
            <td className={classes.tbodyFont}>Brian Foster</td>
            <td className={classes.tbodyFont}>
              updated account with EIN & LLC name effective 1/2/2020
            </td>
            <td className={classes.tbodyFont}>No</td>
            <td className={classes.tbodyFont}>No</td>
            <td>
              <div color="link" className={classes.buttonSize}>
                <Row>
                  <Col>
                    <div className={classes.imgSize}>
                      <img src={iconEdit} className={classes.imageSize} />
                    </div>
                  </Col>
                  <Col className={classes.tbodyFont}>Edit</Col>
                </Row>
              </div>
              <div color="link" className={classes.buttonSize}>
                <Row>
                  <Col>
                    <div className={classes.imgSize}>
                      <img src={iconDelete} className={classes.imageSize} />
                    </div>
                  </Col>
                  <Col className={classes.tbodyFont}>Delete</Col>
                </Row>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Row className="mt-3 mx-2">
        <Col lg="4" className="d-flex mb-2 mb-lg-0 justify-content-lg-start justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem active className={classes.paginationCenterItem}>
              <PaginationLink className={classes.paginationCenterLink}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next className={classes.paginationStyle} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last className={classes.paginationStyle} />
            </PaginationItem>
          </Pagination>
        </Col>
        <Col className="d-flex mb-2 mb-lg-0 justify-content-lg-end justify-content-center">
          <Label className={classes.tbodyFont}>1-1 of 1 items</Label>
        </Col>
      </Row>
    </div>
  )
}

export default NotesTable
