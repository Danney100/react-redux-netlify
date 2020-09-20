import React from 'react'
import PropTypes from 'prop-types'
import {Form, FormGroup, Label, Input} from 'reactstrap'
import Address from './Address'
import ConsultantCreditEdit from './ConsultantCreditEdit'
import RankTypeName from './RankTypeName'
import StatusDescription from './StatusDescription'
import StatusName from './StatusName'
import TypeDescription from './TypeDescription'
import RankTypeDescription from './RankTypeDescription'
import TypevName from './TypeName'
import CreditCard from './CreditCard'

const ItemLists = (props) => {
  const {selectItem} = props
  if (selectItem === 1) {
    return <Address />
  } else if (selectItem === 2) {
    return <ConsultantCreditEdit />
  } else if (selectItem === 3) {
    return <RankTypeDescription />
  } else if (selectItem === 4) {
    return <RankTypeName />
  } else if (selectItem === 5) {
    return <StatusDescription />
  } else if (selectItem === 6) {
    return <StatusName />
  } else if (selectItem === 7) {
    return <TypeDescription />
  } else if (selectItem === 8) {
    return <TypevName />
  } else if (selectItem === 9) {
    return <CreditCard />
  } else if (selectItem === 10) {
    return (
      <Form>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> default
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

ItemLists.propTypes = {
  selectItem: PropTypes.number.isRequired,
}

export default ItemLists
