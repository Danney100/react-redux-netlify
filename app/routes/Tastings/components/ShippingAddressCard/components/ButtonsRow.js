import React from 'react'
import {Row} from 'reactstrap'
import TastingButton from '../../TastingButton'
function ButtonsRow() {
  return (
    <Row className="mt-3 mb-3">
      <TastingButton title="Me / Self" active className="mr-1" />
      <TastingButton title="Order Owner" className="mx-1" />
      <TastingButton title="Tasting Host" className="mx-1" />
    </Row>
  )
}

export default ButtonsRow
