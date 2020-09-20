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
    '& .name': {
      color: '#d18f77',
    },
    '& .card-title': {
      color: '#423b3c',
    },
    '& .sc-btn-action__icon': {
      padding: '5px 7px',
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
      <div className="name sc-avenir-black">
        Eddie Mao
        <Input className="float-right" type="checkbox" defaultChecked={active} />
      </div>
      <div className="sc-avenir-roman card-title">Primary</div>
      <div className="mt-2 sc-avenir-roman card-title">
        4101 McEwen Rd
        <br />
        700
        <br />
        Farmers Branch, Texas 75244
        <br />
        United States
        <br />
        14694780212
        <br />
      </div>
      <div className="mt-3">
        <span className="mt-2 sc-btn-action__icon rounded-circle text-center mr-2">
          <img className="sc-btn-action__img" src={iconEdit} />
        </span>
        <span className="mt-2 sc-edit sc-avenir-medium">Edit</span>
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

const AddressCard = () => {
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

export default AddressCard
