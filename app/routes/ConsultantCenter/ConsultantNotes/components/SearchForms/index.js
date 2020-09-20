import React, {useState} from 'react'
import {Col, ListGroupItem, Input, Button} from 'reactstrap'
import {Media} from 'reactstrap'
import {FormGroup} from 'reactstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export const SearchForms = () => {
  const [orGroupCount, setOrGroupCount] = useState(0)
  const OrderInfo = [
    {label: 'Address City', value: 1},
    {label: 'Balance Due', value: 13},
    {label: 'Business Unit', value: 14},
    {label: 'Commission Date', value: 15},
    {label: 'Commission Owner Display ID', value: 16},
    {label: 'Coupon ID', value: 17},
    {label: 'Discount Total', value: 18},
  ]
  const MultiInfo = [
    {label: 'Active', value: 1},
    {label: 'Inactive', value: 2},
    {label: 'Hold ', value: 3},
    {label: 'Suspended', value: 4},
    {label: 'Financial Hold', value: 5},
    {label: 'Cancelled', value: 6},
    {label: 'Incompleted', value: 7},
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
    <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
      <Col sm={6} md={3} className="p-1">
        <div className="container px-0">
          <Select options={OrderInfo} placeholder={'Display ID'} />
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
      <ListGroupItem className="border m-3 rounded">
        <Media className="d-flex justify-content-between ">
          <Media left href="#">
            <span className="fa-stack fa-lg">
              <i className="fa fas fa-question-circle fa-2x text-warning"></i>
            </span>
          </Media>
          <Media>
            <span className="text-dark">
              The search feature allows users to search based on various fields that are associated
              with chosen center. This search feature allows users to run generic searches or if
              desired they can build complex queries with dependent and smart operators.
            </span>
          </Media>
        </Media>
      </ListGroupItem>
      <FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
        <Col sm={6} md={3} className="p-1">
          <div className="container px-0">
            <Select options={OrderInfo} placeholder={'Display ID'} />
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
            <Select options={OrderInfo} placeholder={'First Name'} />
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
            <Select options={OrderInfo} placeholder={'Last Name'} />
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
            <Select options={OrderInfo} placeholder={'Status'} />
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
    </div>
  )
}

export default SearchForms
