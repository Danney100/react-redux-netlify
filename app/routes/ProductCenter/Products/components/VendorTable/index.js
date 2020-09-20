import React, {useState} from 'react'
import {
  Table,
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

const VendorTable = () => {
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
      <Row className="mt-3">
        <Col>
          <h5>
            <span style={{color: 'black'}}>Product Vendor</span>
          </h5>
        </Col>
        <Col className="pagination justify-content-end">
          <Button onClick={toggle} color="spotify ">
            <i className="fa fa-plus mr-2"></i>
            Add New Vendor
          </Button>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          New Product Vendor
        </ModalHeader>
        <ModalBody>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}>
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody style={{justifyItems: 'center'}}>
              There are missing or invalid fields. Please correct them and try again.
              <Button
                onClick={toggleNested}
                style={{
                  marginLeft: 190,
                  borderRadius: '0',
                  backgroundColor: 'black',
                  borderColor: 'black',
                }}>
                Continue
              </Button>
            </ModalBody>
          </Modal>
          <Form>
            <FormGroup row>
              <Label
                for="input"
                sm={4}
                className="d-flex justify-content-end"
                style={{color: 'black', fontWeight: '700'}}>
                Vendor Display ID
              </Label>
              <Col sm={6}>
                <Input
                  type="select"
                  className="rounded-0"
                  style={{backgroundColor: '#F1ECE6'}}></Input>
              </Col>
            </FormGroup>
          </Form>
          <Row className="m-0">
            <Col>
              <Button
                onClick={toggle}
                color="spotify "
                style={{
                  borderRadius: '0',
                  backgroundColor: '#d9cfb2',
                  borderColor: '#d9cfb2',
                }}>
                <i className="fa fa-check-circle mr-2"></i>
                Cancel
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button
                onClick={toggleNested}
                color="spotify "
                style={{
                  borderRadius: '0',
                  backgroundColor: 'black',
                  borderColor: 'black',
                }}>
                <i className="fa fa-check-circle mr-2"></i>
                Save
              </Button>
            </Col>{' '}
            <Col className="pagination justify-content-end">
              <Button
                onClick={toggleNested}
                color="spotify "
                style={{
                  borderRadius: '0',
                  backgroundColor: 'black',
                  borderColor: 'black',
                }}>
                <i className="fa fa-check-circle mr-2"></i>
                Save
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div className="border border-dark mt-3">
        <Table bordered responsive>
          <thead>
            <tr>
              <th>
                <span style={{color: 'black'}}>VendorDisplay ID</span>
              </th>
              <th>
                <span style={{color: 'black'}}>VendorCompanyName</span>
              </th>
              <th>
                <span style={{color: 'black'}}>VendorProductName</span>
              </th>
              <th>
                <span style={{color: 'black'}}>MiniumQuantityToOrder</span>
              </th>
              <th>
                <span style={{color: 'black'}}>SalesUnit</span>
              </th>
              <th>
                <span style={{color: 'black'}}> &nbsp; </span>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  )
}

export default VendorTable
