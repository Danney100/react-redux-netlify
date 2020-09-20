import React from 'react'
import {Row, Button} from 'reactstrap'

const ButtonGroup = () => {
  return (
    <Row className="justify-content-end mb-3">
      <Button outline className="border border-dark rounded-0 text-dark ml-2">
        Save As
      </Button>
      <Button outline className="border border-dark rounded-0 text-dark ml-2">
        Cancel
      </Button>
    </Row>
  )
}

export default ButtonGroup
