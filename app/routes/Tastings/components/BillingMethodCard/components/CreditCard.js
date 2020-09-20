import React from 'react'
import {Row, Col, Input} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'

import iconEdit from 'images/commonIcons/edit.svg'

const useStyles = makeStyles({
  root: {
    color: '#423b3c',
    border: (active) => (active ? 'solid 1.5px #423b3c' : 'solid 1px #c6cace'),
    borderRadius: '5px',
    '& .card-number': {
      color: '#d18f77',
    },
    '& .card-title': {
      color: '#6c6766',
    },
    '& .sc-btn-action__icon': {
      width: '25px',
      height: '25px',
      backgroundColor: '#e6e0dd',
      '& img': {
        width: '10px',
        height: '10px',
      },
    },
    '& .sc-edit': {
      color: '#707070',
    },
  },
})

const TastCard = ({active}) => {
  const classes = useStyles(active)

  return (
    <div className={`${classes.root} mt-3 p-3`}>
      <div className="card-number sc-avenir-black">
        Visa ending in 3456
        <Input className="float-right" type="checkbox" defaultChecked={active} />
      </div>
      <div className="sc-avenir-roman">expires on 05/20</div>
      <Row className="mt-2">
        <Col xs={5} className="font-weight-bold card-title sc-avenir-heavy">
          Name on Card
        </Col>
        <Col xs={7} className="font-weight-bold card-title sc-avenir-heavy">
          Billing Address
        </Col>
        <Col xs={5} className="sc-avenir-roman">
          Robert Hamilton
        </Col>
        <Col xs={7} className="sc-avenir-roman">
          1501 Dell Range Blvd
          <br />
          Cheyenne, Wyoming 82009
          <br />
          United States
        </Col>
      </Row>
      <div className="mt-3">
        <span className="card-title sc-avenir-heavy">Enter CCV</span>
        <Input className="d-inline col-3 ml-2" placeholder="CCV" />
        <span className="float-right mt-2 mr-2 sc-edit sc-avenir-medium">Edit</span>
        <span className="mt-2 sc-btn-action__icon rounded-circle float-right text-center mr-2">
          <img className="sc-btn-action__img" src={iconEdit} />
        </span>
      </div>
    </div>
  )
}

TastCard.defaultProps = {
  active: false,
}

TastCard.propTypes = {
  active: PropTypes.bool,
}

const CreditCard = () => {
  return (
    <Row>
      <Col lg={6}>
        <TastCard active />
      </Col>
      <Col lg={6}>
        <TastCard />
      </Col>
    </Row>
  )
}

export default CreditCard
