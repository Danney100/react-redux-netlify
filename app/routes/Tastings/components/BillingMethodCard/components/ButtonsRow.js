import React from 'react'
import {Row} from 'reactstrap'

import TastingButton from '../../TastingButton'

function ButtonsRow() {
  return (
    <Row className="mb-3">
      <TastingButton title="Me / Self" bgColor="#423b3c" color="white" active />
      <TastingButton title="Order Owner" />
      <TastingButton title="Tasting Host" />
      <TastingButton title="Pay Later" />
    </Row>
  )
}

export default ButtonsRow
