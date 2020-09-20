import React from 'react'
import {Row, Col, Input, Button} from 'reactstrap'
import {FormGroup} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important'
  },
})

export const SearchCriteria = () => {
  const classes = useStyles()

  return (
    <div>
      <Row form className="mx-2 mt-3">
        <Col sm={{size: 3, offset: 1}}>
          <Row>
            <Col sm="3" className="mb-1">
              <Button color="light" className="rounded-circle mr-2">
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col sm="9">
              <FormGroup>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" className={classes.radiusButton} />
          </FormGroup>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" />
          </FormGroup>
        </Col>
      </Row>
      <Row form className="mx-2 mt-3">
        <Col sm={{size: 3, offset: 1}}>
          <Row>
            <Col sm="3" className="mb-1">
              <Button color="light" className="rounded-circle mr-2">
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col sm="9">
              <FormGroup>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" className={classes.radiusButton} />
          </FormGroup>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" />
          </FormGroup>
        </Col>
      </Row>
      <Row form className="mx-2 mt-3">
        <Col sm={{size: 3, offset: 1}}>
          <Row>
            <Col sm="3" className="mb-1">
              <Button color="light" className="rounded-circle mr-2">
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col sm="9">
              <FormGroup>
                <Input type="text" name="select" id="exampleSelect" />
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" className={classes.radiusButton} />
          </FormGroup>
        </Col>
        <Col sm={{size: 2}}>
          <FormGroup>
            <Input type="text" name="select" id="exampleSelect" />
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
}

export default SearchCriteria
