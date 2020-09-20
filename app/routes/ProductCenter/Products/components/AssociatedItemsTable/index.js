import React, {useState} from 'react'
import {Col, Row, Card, ListGroup, Collapse, Button, Input, Table} from 'reactstrap'
import {FormGroup} from 'reactstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const AssociatedItemTable = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [orGroupCount, setOrGroupCount] = useState(0)
  const OrderInfo = [
    {label: 'Address City', value: 1},
    {label: 'Address Company Name', value: 2},
    {label: 'Address Country', value: 3},
    {label: 'Address First Name', value: 4},
    {label: 'Address Last Name', value: 5},
    {label: 'Address Phone Number', value: 6},
    {label: 'Address Postal Code', value: 7},
    {label: 'Address Province', value: 8},
    {label: 'Address Street 1', value: 9},
    {label: 'Address Street 2', value: 10},
    {label: 'Address Street 3', value: 11},
    {label: 'Address Street 4', value: 12},
    {label: 'Balance Due', value: 13},
    {label: 'Business Unit', value: 14},
    {label: 'Commission Date', value: 15},
    {label: 'Commission Owner Display ID', value: 16},
    {label: 'Coupon ID', value: 17},
    {label: 'Discount Total', value: 18},
    {label: 'Gift Test Message', value: 19},
    {label: 'Handling Method Price', value: 20},
    {label: 'Handling Override Price', value: 21},
    {label: 'Handling Price', value: 22},
    {label: 'Is Host Order', value: 23},
    {label: 'Order Commissionable', value: 24},
    {label: 'Order Consultant ID', value: 25},
    {label: 'Order Constant ID', value: 26},
    {label: 'Order Customer Username', value: 27},
    {label: 'Order Date', value: 28},
    {label: 'Order Display Id', value: 29},
    {label: 'Order ID', value: 30},
    {label: 'Order Line Status ID', value: 31},
    {label: 'Order Locked', value: 32},
    {label: 'Order Payment Status ID', value: 33},
    {label: 'Original Order ID', value: 34},
    {label: 'Origination', value: 35},
    {label: 'Party/Event Dispaly ID', value: 36},
    {label: 'Posted Date', value: 37},
    {label: 'Product Classification', value: 38},
    {label: 'Return Present(Has RMA)', value: 39},
    {label: 'Shipment ID', value: 40},
    {label: 'Shipment Line Status ID', value: 41},
    {label: 'Shipment Status ID', value: 42},
    {label: 'Shipping File Run ID', value: 43},
    {label: 'Shipping Method ID', value: 44},
    {label: 'Shipping Method Price', value: 45},
    {label: 'Shipping Override Price', value: 46},
    {label: 'Shipping Price', value: 47},
    {label: 'SKU', value: 48},
    {label: 'SKU-Include child SKUs', value: 49},
    {label: 'Subscription ID', value: 50},
    {label: 'Subscription Run ID', value: 51},
    {label: 'Subtotal', value: 52},
    {label: 'Tax Total', value: 53},
    {label: 'Taxable Total', value: 54},
    {label: 'Total', value: 55},
    {label: 'Total Payment', value: 56},
  ]
  const MultiInfo = [
    {label: 'Active', value: 1},
    {label: 'Inactive', value: 2},
  ]
  const customMultiStyles = {
    control: (provided) => ({
      ...provided,
      bottom: '-3px',
    }),
  }
  const AddOrGroup = () => {
    setOrGroupCount((prevState) => prevState + 1)
  }
  const removeOrGroup = () => {
    if (orGroupCount > 0) {
      setOrGroupCount((prevState) => prevState - 1)
    }
  }
  const renderOrGroups = () => {
    const groups = []
    for (let i = 0; i < orGroupCount; i++) {
      const isFirst = i === 0
      const isLast = i === orGroupCount - 1
      groups.push(
        <FormGroup row className="mx-0" style={{padding: '0px 10px'}} key={i}>
          <Col sm={6} md={3} className="p-1">
            <div className="container px-0">
              <Select options={OrderInfo} placeholder={''} />
            </div>
          </Col>
          <Col sm={6} md={2} className="p-1">
            <Input type="select" name="select">
              <option defaultValue=""></option>
              <option>Is</option>
              <option>Does Not Contain</option>
              <option>Starts With</option>
            </Input>
          </Col>
          <Col sm={9} md={5} className="p-1 "></Col>
          <Col sm={3} md={2} className="p-1 text-lg-left text-right">
            <Button color="primary" onClick={removeOrGroup}>
              <i className="fa fas fa-minus"></i>
            </Button>
            {(isFirst || isLast) && (orGroupCount === 1 || isLast) && (
              <Button className="ml-1 Secondary" onClick={AddOrGroup}>
                <i className="fa fas fa-plus"></i>
              </Button>
            )}
          </Col>
        </FormGroup>,
      )
    }
    ;<FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
      <Col sm={6} md={3} className="p-1 mt-3">
        <div className="container px-0">
          <Select options={OrderInfo} placeholder={'Display Name'} />
        </div>
      </Col>
      <Col sm={6} md={2} className="p-1">
        <Input type="select" name="select">
          <option defaultValue="">Contains</option>
          <option>Is</option>
          <option>Does Not Contain</option>
          <option>Starts With</option>
        </Input>
      </Col>
      <Col sm={9} md={5} className="p-1">
        <Input type="text" name="text"></Input>
      </Col>
      <Col sm={3} md={2} className="p-1 text-lg-left text-right">
        <Button color="primary">
          <i className="fa fas fa-minus"></i>
        </Button>
      </Col>
    </FormGroup>
    return groups
  }

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12} className="mt-3">
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
                  <Col sm={6} md={3} className="p-1">
                    <div className="container px-0">
                      <Select options={OrderInfo} placeholder={'Display Name'} />
                    </div>
                  </Col>
                  <Col sm={6} md={2} className="p-1">
                    <Input type="select" name="select">
                      <option defaultValue="">Contains</option>
                      <option>Is</option>
                      <option>Does Not Contain</option>
                      <option>Starts With</option>
                    </Input>
                  </Col>
                  <Col sm={9} md={5} className="p-1">
                    <Input type="text" name="text"></Input>
                  </Col>
                  <Col sm={3} md={2} className="p-1 text-lg-left text-right">
                    <Button color="primary">
                      <i className="fa fas fa-minus" style={{color: 'white'}}></i>
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
                  <Col sm={6} md={3} className="p-1">
                    <div className="container px-0">
                      <Select options={OrderInfo} placeholder={'Internal Name'} />
                    </div>
                  </Col>
                  <Col sm={6} md={2} className="p-1">
                    <Input type="select" name="select">
                      <option defaultValue="">Contains</option>
                      <option>Is</option>
                      <option>Does Not Contain</option>
                      <option>Starts With</option>
                    </Input>
                  </Col>
                  <Col sm={9} md={5} className="p-1">
                    <Input type="text" name="text"></Input>
                  </Col>
                  <Col sm={3} md={2} className="p-1 text-lg-left text-right">
                    <Button color="primary">
                      <i className="fa fas fa-minus" style={{color: 'white'}}></i>
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
                  <Col sm={6} md={3} className="p-1">
                    <div className="container px-0">
                      <Select options={OrderInfo} placeholder={'Primary Product'} />
                    </div>
                  </Col>
                  <Col sm={6} md={2} className="p-1">
                    <Input type="select" name="select">
                      <option defaultValue="">Contains</option>
                      <option>Is</option>
                      <option>Does Not Contain</option>
                      <option>Starts With</option>
                    </Input>
                  </Col>
                  <Col sm={9} md={5} className="p-1">
                    <Input type="text"></Input>
                  </Col>
                  <Col sm={3} md={2} className="p-1 text-lg-left text-right">
                    <Button color="primary">
                      <i className="fa fas fa-minus" style={{color: 'white'}}></i>
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
                  <Col sm={6} md={3} className="p-1">
                    <div className="container px-0">
                      <Select options={OrderInfo} placeholder={'Product Status'} />
                    </div>
                  </Col>
                  <Col sm={6} md={2} className="p-1">
                    <Input type="select">
                      <option defaultValue="">Contains</option>
                      <option>Is</option>
                      <option>Does Not Contain</option>
                      <option>Starts With</option>
                    </Input>
                  </Col>
                  <Col sm={9} md={5} className="p-1">
                    <Input type="select">
                      <option defaultValue="">SelectYes/No</option>
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
                  </Col>
                  <Col sm={3} md={2} className="p-1 text-lg-left text-right">
                    <Button color="primary">
                      <i className="fa fas fa-minus" style={{color: 'white'}}></i>
                    </Button>
                  </Col>
                </FormGroup>
                <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
                  <Col sm={6} md={3} className="p-1">
                    <div className="container px-0">
                      <Select options={OrderInfo} placeholder={'SKU'} />
                    </div>
                  </Col>
                  <Col sm={6} md={2} className="p-1">
                    <Input type="select">
                      <option defaultValue="">Is In</option>
                      <option>Is not In</option>
                    </Input>
                  </Col>
                  <Col sm={9} md={5} className="px-0 mb-2">
                    <div className="container px-0">
                      <Select
                        components={makeAnimated()}
                        isMulti
                        options={MultiInfo}
                        styles={customMultiStyles}
                      />
                    </div>
                  </Col>
                  <Col sm={3} md={2} className="p-1 text-lg-left text-right">
                    <Button color="primary">
                      <i className="fa fas fa-minus text-white"></i>
                    </Button>
                    <Button className="ml-1 Secondary">
                      <i className="fa fas fa-plus text-white"></i>
                    </Button>
                  </Col>
                </FormGroup>
                <div className=" d-flex  justify-content-end">
                  <div className="p-2 text-left pr-0">
                    <Button color="spotify" onClick={AddOrGroup}>
                      <i className="fa fa-plus mr-2"></i>
                      Add OR Group
                    </Button>
                  </div>
                </div>
                {renderOrGroups()}
                <div className="text-left d-flex justify-content-between p-2">
                  <Button color="danger" style={{width: '135.95px'}}>
                    <i className="fa fa-times mr-2"></i>
                    Reset
                  </Button>
                  <Button
                    color="dark"
                    style={{
                      width: '135.95px',
                    }}>
                    <i className="fa fa-search mr-2"></i>
                    Search
                  </Button>
                </div>
              </ListGroup>
            </Collapse>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <div className="border border-dark mb-3">
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>
                    <span style={{color: 'black'}}> &nbsp; </span>
                  </th>
                  <th>
                    <span
                      style={{color: 'black'}}
                      className="text-left d-flex justify-content-between ml-4">
                      <Input type="checkbox" name="Associated" className="mx-0.5" />
                      Associated
                    </span>
                  </th>
                  <th>
                    <span
                      style={{color: 'black'}}
                      className="text-left d-flex justify-content-between pl-2">
                      SKU
                    </span>
                  </th>
                  <th>
                    <span
                      style={{color: 'black'}}
                      className="text-left d-flex justify-content-between pl-4">
                      <Input type="checkbox" name="Associated" className="mx-0.5" />
                      Show On Invoice
                    </span>
                  </th>
                  <th>
                    <span
                      style={{color: 'black'}}
                      className="text-left d-flex justify-content-between pl-2">
                      Name
                    </span>
                  </th>
                  <th>
                    <span
                      style={{color: 'black'}}
                      className="text-left d-flex justify-content-between pl-2">
                      Status
                    </span>
                  </th>
                </tr>
              </thead>
            </Table>
          </div>
        </Col>
        <Col md={12} className="text-lg-right text-right">
          <Button color="info">
            <i className="fa fas fa-check-circle mr-1"></i>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AssociatedItemTable
