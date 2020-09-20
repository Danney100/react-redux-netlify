import React, {useState, useContext, useEffect} from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardTitle,
  Input,
  Button,
  Collapse,
} from 'reactstrap'
import {Media} from 'reactstrap'
import {FormGroup} from 'reactstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import PropTypes from 'prop-types'

export const SearchCriteria = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  const [orGroupCount, setOrGroupCount] = useState(0)
  const {setIsShow} = props
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Order Center')
  }, [])

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
    {label: 'Save For Later', value: 1},
    {label: 'Posted', value: 2},
    {label: 'Processing', value: 3},
    {label: 'Shipped', value: 4},
    {label: 'Partial Shipped', value: 5},
    {label: 'Partial Shipped Backorder', value: 6},
    {label: 'Back Order', value: 7},
    {label: 'Partial BackOrder', value: 8},
    {label: 'Void', value: 9},
  ]
  const customMultiStyles = {
    control: (provided) => ({
      ...provided,
      bottom: '-3px',
    }),
  }
  const [selectedOptions, setSelecteOptions] = useState([MultiInfo[0]])
  const handleOptionReset = () => {
    setSelecteOptions([MultiInfo[0]])
  }
  const handleChange = (newValue) => {
    setSelecteOptions(newValue)
  }
  const history = useHistory()
  const routeChange = () => {
    let path = '/order-center/create-new-order'
    history.push(path)
  }
  const toggleOpen = () => setIsOpen(!isOpen)
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

    return groups
  }

  return (
    <div>
      <div className=" d-flex  justify-content-end">
        <div className="text-left" style={{padding: '0.5rem 0rem'}}>
          <Button onClick={routeChange} color="spotify">
            <i className="fa fa-plus mr-2"></i>
            Add New Order
          </Button>
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-2 bg-primary text-white rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <i className="fa fas fa-search text-white"></i>
                  <span className="big ml-1 text-white">Criteria</span>
                </div>
                <div className="d-flex text-white" onClick={toggleOpen}>
                  <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen}>
              <ListGroup>
                <ListGroupItem className="border m-3 rounded">
                  <Media className="d-flex justify-content-between">
                    <Media left href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fad fa-question-circle fa-2x text-warning"></i>
                      </span>
                    </Media>
                    <Media>
                      <span className="text-dark">
                        The search feature allows users to search based on various fields that are
                        associated with chosen center. This search feature allows users to run
                        generic searches or if desired they can build complex queries with dependent
                        and smart operators.
                      </span>
                    </Media>
                  </Media>
                </ListGroupItem>
                <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
                  <Col sm={6} md={3} className="p-1">
                    <div className="container px-0">
                      <Select options={OrderInfo} placeholder={'Order Display ID'} />
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
                      <Select options={OrderInfo} placeholder={'Order Consultant ID'} />
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
                      <Select options={OrderInfo} placeholder={'Order Customer ID'} />
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
                      <Select options={OrderInfo} placeholder={'Order Status ID'} />
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
                        value={selectedOptions}
                        onChange={handleChange}
                        styles={customMultiStyles}
                      />
                    </div>
                  </Col>
                  <Col sm={3} md={2} className="p-1 text-lg-left text-right">
                    <Button color="primary">
                      <i className="fa fas fa-minus text-white"></i>
                    </Button>
                    <Button className="ml-1 Secondary" onClick={AddOrGroup}>
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
                  <Button
                    color="danger"
                    style={{
                      width: '135.95px',
                    }}
                    onClick={handleOptionReset}>
                    <i className="fa fa-times mr-2"></i>
                    Reset
                  </Button>
                  <Button
                    onClick={() => setIsShow(true)}
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
      </Row>
    </div>
  )
}

SearchCriteria.propTypes = {
  setIsShow: PropTypes.func.isRequired,
}

export default SearchCriteria
