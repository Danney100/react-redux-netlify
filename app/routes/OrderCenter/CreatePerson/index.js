import React, {useState} from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'components'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import AlertInfomation from './components/AlertInfomation'
import ContactInfomation from './components/ContactInfomation'
import AccountInformation from './components/AccountInfomation'
import ShippingAddress from './components/ShippingAddress'
import PaymentInformation from './components/PaymentInformation'
import TermsAndConditions from './components/TermsAndConditions'
import AgeVerification from './components/AgeVerification'
import CalifoniaResidents from './components/CalifoniaResidents'
import DemoData from './components/DemoData.json'
import {cartUserSignupWatcher} from 'duck/watcher'

const CreatePerson = (props) => {
  const token = props.user.get('token')

  const [demoTrigger, setDemoTrigger] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const history = useHistory()

  const routeChange = (data) => {
    let shipping = data.shipping
    shipping.country = data.shipping['country']['value']
    shipping.county = data.shipping['county']['label']

    const payload = {
      data: data,
      token: token,
      shipping: shipping,
      cartId: props.cart.get('cartID'),
      history: history,
      currentPath: history.location.pathname,
    }
    props.cartUserSignupWatcher(payload)
    let path = '/order-center/create-new-order/shopping/viewcart/createperson/placeorder'
    history.push(path)
  }
  const {control, register, errors, handleSubmit, getValues} = useForm()

  return (
    <React.Fragment>
      <Container fluid={true} className="mt-3">
        <Row>
          <Col
            lg={{size: 6, offset: 3}}
            md={{size: 8, offset: 2}}
            className="text-lg-left text-right mb-2">
            <Button color="info" onClick={() => setDemoTrigger(!demoTrigger)}>
              Demo Data
            </Button>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="rounded-0 bg-success border-0" style={{height: 'fit-content'}}>
              <i className="fa fa-fw fa-shopping-cart"></i>0
            </Button>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle className="rounded-0 bg-success border-0" caret></DropdownToggle>
              <DropdownMenu style={{left: '-114px'}}>
                <DropdownItem divider />
                <DropdownItem header>
                  <strong>Sub total:$0.00</strong>
                </DropdownItem>
                <DropdownItem>
                  <span className="rounded-0 bg-primary border-0 p-2 text-white mb-2">
                    View or Edit Cart
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col lg={{size: 6, offset: 3}} md={{size: 8, offset: 2}}>
            <AlertInfomation />
            <ContactInfomation
              DemoData={DemoData.ContactInfo}
              control={control}
              errors={errors}
              demotrigger={demoTrigger}
              register={register}
            />
            <AccountInformation
              DemoData={DemoData.AccountInfo}
              control={control}
              errors={errors}
              demotrigger={demoTrigger}
              getValues={getValues}
            />
            <ShippingAddress
              DemoData={DemoData.ShippingAddress}
              control={control}
              errors={errors}
              demotrigger={demoTrigger}
            />
            <PaymentInformation DemoData={DemoData.PaymentInfo} demotrigger={demoTrigger} />
            <AgeVerification register={register} errors={errors} demotrigger={demoTrigger} />
            <TermsAndConditions register={register} errors={errors} demotrigger={demoTrigger} />
            <CalifoniaResidents />
            <Row className="d-flex justify-content-end">
              <Button className="border-0 mb-3 mr-3 bg-primary" onClick={handleSubmit(routeChange)}>
                Continue
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

CreatePerson.propTypes = {
  order: PropTypes.object,
  cartUserSignupWatcher: PropTypes.func,
  user: PropTypes.object,
  cart: PropTypes.object,
}

const mapStateToProps = (state) => ({
  order: state.order,
  user: state.user,
  cart: state.cart,
})

const mapDispatchToProps = {cartUserSignupWatcher}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePerson)
