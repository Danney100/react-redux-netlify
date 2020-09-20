import React from 'react'
import {Row, Col, Card, Pagination, PaginationItem, PaginationLink, Input, Table} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  select: {
    borderColor: 'white',
    color: '#27bfa3',
    fontWeight: 'bold',
  },
})

export const ShippingDetails = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <Row className="pb-0 text-white rounded-top mx-2 mt-3">
              <Col
                lg={{size: 5}}
                className="d-flex justify-content-center justify-content-lg-start">
                <span className="text-dark h5 font-weight-bold">
                  Shipping Run Details (record 3 of 500)
                </span>
              </Col>
              <Col
                xs={{size: 10, offset: 1}}
                sm={{size: 4, offset: 4}}
                md={{size: 4, offset: 4}}
                lg={{size: 2, offset: 3}}
                className="d-flex justify-content-center justify-content-lg-start">
                <Input type="select" name="select" id="exampleSelect" className={classes.select}>
                  <option>Invoices</option>
                  <option>Picking List</option>
                  <option>Picking Ship</option>
                  <option>Export Shipping File</option>
                  <option>View Run Configuration</option>
                </Input>
              </Col>
              <Col lg={{size: 2}} className="d-flex justify-content-center justify-content-lg-end">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink first />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink previous />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink last />
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
            <Row className="mx-3 border-top">
              <Col></Col>
              <Table striped borderless responsive>
                <thead>
                  <tr>
                    <th className="text-dark">Run #</th>
                    <th className="text-dark">Run date</th>
                    <th className="text-dark">Run Status</th>
                    <th className="text-dark">Warehouse</th>
                    <th className="text-dark">Created By</th>
                    <th className="text-dark">Order Count</th>
                    <th className="text-dark">Total Order Value</th>
                    <th className="text-dark">Country</th>
                    <th className="text-dark">Consolidation</th>
                    <th className="text-dark">First Print Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1514</th>
                    <td>6/7/2020 3:53 AM</td>
                    <td>Pending</td>
                    <td>Farmers Branch</td>
                    <td>Fatihs</td>
                    <td>0</td>
                    <td>$0.00</td>
                    <td>All</td>
                    <td>All</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ShippingDetails
