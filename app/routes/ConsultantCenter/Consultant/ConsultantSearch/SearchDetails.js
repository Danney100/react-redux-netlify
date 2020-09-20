import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import {useSelector} from 'react-redux'
import moment from 'moment'
import {Map} from 'immutable'

import iconmail from 'images/commonIcons/mail.svg'
import iconGroup from 'images/commonIcons/group.svg'

export const SearchDetails = () => {
  const details = useSelector(({consultant}) => consultant.get('consultantDetails', Map()).toJS())

  if (!Object.keys(details).length) {
    return ''
  }

  const changeRoute = (path) => {
    history.push(path)
  }

  const billing_address = details.billing_address
  return (
    <Row>
      <Col sm={6}>
        <div tag="h5" className=" mt-4">
          <h4 className="font-weight-bold text-dark mt-4 border-bottom pb-2">Basic Info</h4>
        </div>
        <Row>
          <Col
            md={4}
            sm={6}
            xs={6}
            className="d-flex justify-content-start font-weight-bold mt-3 ml-1 ">
            {`${details.username}(${details.PersonDisplayID})`}
          </Col>
        </Row>
        {billing_address && (
          <>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-start mt-3 ml-1 ">
                {`${billing_address.county}, ${billing_address.postcode}`}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-start mt-3 ml-1">
                {billing_address.country}
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={6} xs={6} className="d-flex justify-content-start mt-3   ml-1 ">
                {billing_address.phone_number}
              </Col>
            </Row>
          </>
        )}
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start mt-1 ">
            <Button
              className="sc-btn-action px-1 "
              color="link"
              onClick={() => changeRoute('/courtneybono7@gmail.com')}>
              {details.email}
              <span className="sc-btn-action__icon rounded-circle ml-2">
                <img className="sc-btn-action__img" src={iconmail} />
              </span>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start ">
            <Button
              className="sc-btn-action px-1"
              color="link"
              onClick={() => changeRoute('/https://scoutandcelsta.wpengine.com/courtneybono')}>
              https://scoutandcelsta.wpengine.com/courtneybono
              <span className="sc-btn-action__icon rounded-circle">
                <img className="sc-btn-action__img  ml-2" src={iconGroup} />
              </span>
            </Button>
          </Col>
        </Row>
      </Col>
      <Col sm={6}>
        <div tag="h5" className=" mt-4">
          <h4 className="font-weight-bold text-dark mt-4 border-bottom pb-2">Detailed Info</h4>
        </div>
        <Row className="mt-4">
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Personally Mentored
          </Col>
          <Col md={6} sm={6} xs={6}>
            33
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Customer Count
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.customers.length}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Lead Count
          </Col>
          <Col md={6} sm={6} xs={6}>
            1
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Enroller
          </Col>
          <Col md={6} sm={6} xs={6}>
            Corporate Account(1001)
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Join Date
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.JoinDate && moment(details.JoinDate).format('MM/DD/YYYY')}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Type
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.ConsultantType}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Rank
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.ConsultantRank}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Status
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.ConsultantStatus}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Language
          </Col>
          <Col md={6} sm={6} xs={6}>
            {details.TranslationLanguage}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start font-weight-bold">
            Qualification Overrides
          </Col>
          <Col md={6} sm={6} xs={6}>
            Yes
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6} xs={6} className="d-flex justify-content-start  font-weight-bold">
            Metric Overrides
          </Col>
          <Col md={6} sm={6} xs={6}>
            No
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SearchDetails
