import React, {useState} from 'react'
import {
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Input,
  FormGroup,
  Label,
  Modal,
  CardBody,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CommonButton from 'routes/components/CommonButton'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import ResultTable from './ResultTable'

const useStyles = makeStyles({
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  modaltitle: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 22,
    color: '#403839',
  },
  notes: {
    height: 80,
  },
})
export const Notes = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div tag="h5">
            <p className={classes.modaltitle}>New Note</p>
            <hr className={`${classes.modalborder}`} />
          </div>
          <div>
            
          </div>
          <Card className="mb-1">
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={{size: 3, offset: 1}}
                    className="d-flex justify-content-start font-weight-light">
                    Subject
                  </Label>
                  <Col sm={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={{size: 3, offset: 1}}
                    className="d-flex justify-content-start font-weight-light">
                    Note Type
                  </Label>
                  <Col sm={8}>
                    <Input type="select" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="input"
                    sm={{size: 3, offset: 1}}
                    className="d-flex justify-content-start font-weight-light">
                    Notes
                  </Label>
                  <Col sm={8}>
                    <Input className={classes.notes} />
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
      <Row className="p-3">
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="p-1">
            <div tag="h5">
              <p className={classes.title}>My Notes</p>
              <hr className={classes.border} />
            </div>
            <Row className="mr-2 mt-3 d-flex justify-content-between">
              <Col xs={12} sm={2} className="mb-3 d-flex justify-content-start">
                <CustomSearch className="ml-4" />
              </Col>
              <Col xs={12} sm={3} className="mt-2 d-flex justify-content-end">
                <CommonButton title="+ Add New Note" onClick={toggle} buttonType="addItemButton" />
              </Col>
            </Row>
            <div>
              <ListGroup className="p-2">
                <ResultTable />
              </ListGroup>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Notes.propTypes = {
  searchResults: PropTypes.array,
}

export default Notes
