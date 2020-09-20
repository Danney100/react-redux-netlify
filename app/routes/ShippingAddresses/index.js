import React, {useEffect, useState, useContext} from 'react'
import {
  Col,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Modal,
  CardBody,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

import AppContext from 'components/App/AppContext'
import CommonButton from 'routes/components/CommonButton'
import DefaultAddress from './components/DefaultAddress'
import AdditionalAddress from './components/AdditionalAddress'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  modaltitle: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 22,
    color: '#403839',
  },
  subtitle: {
    color: '#403839',
    fontSize: 12,
    fontFamily: 'SFUIText-Bold',
  },
})

export const index = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  useEffect(() => {
    setTitle('Shipping Addresses')
  }, [])

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div tag="h5">
            <p className={classes.modaltitle}>Add New Address</p>
            <hr className={`${classes.modalborder}`} />
          </div>
          <Card className="mb-1">
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex text-dark">
                    Nick Name *
                  </Label>
                  <Col sm={6}>
                    <Input type="text"></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    First Name *
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Last Name *
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Company
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Country *
                  </Label>
                  <Col sm={6}>
                    <Input type="select" name="select" placeholder="">
                      <option defaultValue=""></option>
                      <option>United States</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    State *
                  </Label>
                  <Col sm={6}>
                    <Input type="select" name="select" placeholder="">
                      <option></option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    City *
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Street1 *
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Street2
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Postal Code *
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Phone number *
                  </Label>
                  <Col sm={6}>
                    <Input></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark">
                    Residential
                  </Label>
                  <Col sm={6}>
                    <Input type="select" name="select" placeholder="">
                      <option defaultValue="">Yes</option>
                      <option>No</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark"></Label>
                  <Col sm={4} className="ml-3">
                    <Input type="checkbox" />
                    <span>Default</span>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={6} className="d-flex  text-dark"></Label>
                  <Col sm={4} className="ml-3">
                    <Input type="checkbox" />
                    <span>Mailing</span>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Row className="mt-4 mb-4">
            <Col className="d-flex justify-content-end">
              <CommonButton
                title="Cancel"
                onClick={toggle}
                buttonType="filterButton"
                className="mr-4"
              />
              <CommonButton title="Save" buttonType="addfilterButton" />
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
      <Row className="d-flex justify-content-between mt-4 ml-2 mr-2">
        <Col lg={{size: 6}} className="d-flex justify-content-start">
          <p className={classes.title}>Shipping Information</p>
        </Col>
        <Col lg={{size: 6}} className="d-flex justify-content-end mb-2">
          <CommonButton title="Add New Address" buttonType="addNewAddress" onClick={toggle} />
        </Col>
      </Row>
      <DefaultAddress />
      <AdditionalAddress />
    </div>
  )
}

export default index
