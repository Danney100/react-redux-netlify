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
import {CustomInput} from 'components'

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
  label: {
    color: '#de8b6d',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
})

export const PaymentMethods = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  useEffect(() => {
    setTitle('Payment Methods')
  }, [])

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div tag="h5">
            <p className={classes.modaltitle}>Add New Credit / Debit Card</p>
            <hr className={`${classes.modalborder}`} />
          </div>
          <Card className="mb-1">
            <CardBody>
              <Form>
                <FormGroup row>
                  <Col sm={{size: '8', offset: '4'}}>
                    <i className="fa fa-cc-visa ml-2 fa-2x"></i>
                    <i className="fa fa-cc-mastercard ml-2 fa-2x"></i>
                    <i className="fa fa-cc-amex ml-2 fa-2x"></i>
                    <i className="fa fa-cc-discover ml-2 fa-2x"></i>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Name On Card
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Card Number
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Expiration Date
                  </Label>
                  <Col sm={4} className="mt-1">
                    <Input type="select" name="select" placeholder="">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Input>
                  </Col>
                  <Col sm={4} className="mt-1">
                    <Input type="select" name="select" placeholder="">
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={{size: 12, offset: 8}}>
                    <CustomInput
                      type="checkbox"
                      id="Set as Default"
                      label="Set as Default"
                      className={classes.label}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Country
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="select" placeholder="">
                      <option defaultValue="United States"></option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    State *
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="select" placeholder="">
                      <option></option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>AE</option>
                      <option>AP</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>Califonia</option>
                      <option>Colorado</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    City *
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Postal Code *
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Street 1 *
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Street 2
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    State *
                  </Label>
                  <Col sm={8}>
                    <Input type="select" name="select" placeholder="">
                      <option></option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>AE</option>
                      <option>AP</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>Califonia</option>
                      <option>Colorado</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="input" sm={4} className="d-flex text-dark">
                    Phone Number
                  </Label>
                  <Col sm={8}>
                    <Input />
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
          <p className={classes.title}>Payment Information</p>
        </Col>
        <Col lg={{size: 6}} className="d-flex justify-content-end mb-2">
          <CommonButton
            title="Add New Credit / Debit Card"
            buttonType="addNewAddress"
            onClick={toggle}
          />
        </Col>
      </Row>
      <DefaultAddress />
      <AdditionalAddress />
    </div>
  )
}

export default PaymentMethods
