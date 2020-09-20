import React from 'react'
import {Row, Col, Input, FormGroup, Label, Button} from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'

const OrderItems = () => {
  const actionFormater = () => {
    return (
      <Row className="p-2">
        <Button color="success">
          <i className="fa fa-fw fa-eye" color="info" aria-hidden="true"></i>Details and Join
        </Button>
        <Button color="warning">
          <i className="fa fa-fw fa-trash" aria-hidden="true"></i>Remove
        </Button>
      </Row>
    )
  }
  const columns = [
    {
      dataField: 'sku',
      text: 'SKU',
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'price',
      text: 'Price',
      sort: true,
    },
    {
      dataField: 'qty',
      text: 'Qty',
      sort: true,
    },
    {
      dataField: 'subTotal',
      text: 'Subtotal',
      sort: true,
    },
    {
      dataField: 'shipping',
      text: 'Shipping',
      sort: true,
    },
    {
      dataField: 'tax',
      text: 'Estimated Sales Tax',
      sort: true,
    },
    {
      dataField: 'discounts',
      text: 'Discounts',
      sort: true,
    },
    {
      dataField: 'total',
      text: 'Total',
      sort: true,
    },
    {
      dataField: 'qv',
      text: 'QV',
      sort: true,
    },
    {
      dataField: 'cv',
      text: 'CV',
      sort: true,
    },
    {
      dataField: 'rv',
      text: 'RV',
      sort: true,
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: 'Actions', formatter: actionFormater},
  ]
  const data = [
    {
      id: 1,
      sku: 'White302',
      name: 'NV Ticklebumps Brut, North Coast, California',
      price: '$45.00',
      qty: 2,
      subTotal: '$90.00',
      shipping: '$11.67',
      tax: '$4.58',
      discounts: '$0.00',
      total: '$106.25',
      qv: '90.00',
      cv: '63.00',
      rv: '90.00',
      status: 'open',
    },
  ]

  return (
    <div>
      <Row className="mt-2">
        <Col sm={12} lg={12} xs={12}>
          <FormGroup row className="text-black justify-content-lg-end justify-content-center">
            <Label className="my-auto">Qty</Label>
            <Col lg={2} xs={8} className="mb-1">
              <Input type="number" step="1" />
            </Col>
            <Col lg={2} xs={8} className="mb-1">
              <Input placeholder="Item SKU/Name" />
            </Col>
            <Col lg={2} xs={8} className="mb-1 text-center p-0">
              <Button>
                <i className="fa fa-fw fa-shopping-cart" aria-hidden="true" />
                Quick Add Item
              </Button>
            </Col>
          </FormGroup>
        </Col>
      </Row>
      <BootstrapTable
        keyField="id"
        columns={columns}
        data={data}
        classes="table-responsive text-black"
      />
      <Row className="mt-3">
        <Col sm={2} xs={12} className="text-lg-left text-center">
          <Button className="mr-1" color="warning">
            <i className="fa fas fa-ban mr-1"></i>
            <span>Cancel</span>
          </Button>
        </Col>
        <Col
          sm={10}
          xs={12}
          style={{
            top: '7px',
            height: 'fit-content',
          }}
          className="text-lg-right text-center p-0 pr-2">
          <Button className="mr-1 mb-1" color="info">
            <i className="fa fas fa-calculator mr-1" />
            Recalculate Tax Only
          </Button>
          <Button className="mr-1 mb-1" color="secondary">
            <i className="fa fas fa-calculator mr-1" />
            <span>Recalculate Order</span>
          </Button>
          <Button className="mr-1 mb-1" color="success">
            <i className="fa fa-check-circle-o mr-1" />
            Save
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default OrderItems
