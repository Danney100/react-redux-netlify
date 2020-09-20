import React, {useState} from 'react'
import {
  Col,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import NotesTable from './components/NotesTable'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  title: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 21,
    color: '#403839',
  },
  modelTitle: {
    fontSize: 22,
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  modelLabel: {
    fontSize: 12,
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  modelText: {
    fontFamily: 'SFUIText-Semibold',
  },
})

const Note = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const closeBtnOne = (
    <button className="close" onClick={toggleNested}>
      &times;
    </button>
  )

  return (
    <div>
      <Row className="mx-2">
        <Col sm={{size: 2}}>
          <span className={classes.title}>Notes</span>
        </Col>
        <Col sm={{size: 2, offset: 8}} className="pagination justify-content-end">
          <CustomSearch className="ml-3" />
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} close={closeBtn} className="border-bottom">
          <p className={classes.modelTitle}>New Note</p>
        </ModalHeader>
        <ModalBody>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
            size="lg">
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody>
              <span className={classes.modelText}>
                There are missing or invalid fields. Please correct them and try again.
              </span>
              <div className="d-flex float-right mt-5">
                <CommonButton title="Continue" buttonType="continueButton" onClick={toggleNested} />
              </div>
            </ModalBody>
          </Modal>
          <Form className="mb-5">
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Subject
              </Label>
              <Col sm={8}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Note Type
              </Label>
              <Col sm={8}>
                <Input type="select">
                  <option>Call</option>
                  <option>Email</option>
                  <option>Genealogy</option>
                  <option>Incentive Achievement Change</option>
                  <option>Qualification Override Change</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Note
              </Label>
              <Col sm={8}>
                <Input></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Display As Message
              </Label>
              <Col sm={{size: '8'}}>
                <Input type="checkbox" className="ml-0 mb-0 mt-2" name="select" id="input"></Input>
              </Col>
            </FormGroup>
          </Form>
          <Row>
            <Col className="d-flex justify-content-end">
              <CommonButton title="Cancel" buttonType="cancelButton" onClick={toggle} />
              <CommonButton title="Save" buttonType="saveButton" onClick={toggleNested} />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <NotesTable />
      <Row className="mx-2">
        <Col className="pagination justify-content-end mt-1 mb-3">
          <CommonButton onClick={toggle} buttonType={'addButton'} title={'Add New Note'} />
        </Col>
      </Row>
    </div>
  )
}

export default Note
