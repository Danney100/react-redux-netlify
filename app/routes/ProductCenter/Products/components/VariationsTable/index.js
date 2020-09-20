import React, {useState} from 'react'
import {
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const VariationsTable = () => {
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
      <Row>
        <Col md="auto" className="pagination justify-content-end mt-2 ml-3">
          <Button onClick={toggle} color="primary">
            <i className="fa fa-plus mr-2"></i>
            Sort Variation Types
          </Button>
        </Col>
        <Col className="pagination justify-content-end mr-1" color="info">
          <Button onClick={toggle} color="spotify">
            <i className="fa fa-plus mr-2"></i>
            Add New Variation
          </Button>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add/Edit Variation
        </ModalHeader>
        <ModalBody>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}>
            <ModalHeader close={closeBtnOne}></ModalHeader>
            <ModalBody>
              There are missing or invalid fields. Please correct them and try again.
              <Button onClick={toggleNested} className="float-right">
                Continue
              </Button>
            </ModalBody>
          </Modal>
          <Form className="mt-3 mx-3">
            <FormGroup row className="pl-3">
              <h5>SKU 2324</h5>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={3} md={2}>
                Warehouse
              </Label>
              <Col sm={3} md={3}>
                <Input type="select">
                  <option>Commission Reversal</option>
                  <option>Other</option>
                  <option>Party Commission Applied To Settlement</option>
                  <option>Party Commission Paid</option>
                  <option>Party Fee</option>
                </Input>
              </Col>
              <Label for="input" sm={4} md={1}>
                Bin
              </Label>
              <Col sm={3} md={3}>
                <Input></Input>
              </Col>
              <Col sm={3} md={3}>
                <Button color="primary">
                  <i className="fa fas fa-minus text-white"></i>
                </Button>
                <Button className="ml-1 Secondary">
                  <i className="fa fas fa-plus text-white"></i>
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <Row className="m-0">
            <Col>
              <Button onClick={toggle} color="danger">
                <i className="fa fa-times-circle mr-2"></i>
                Cancel
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button onClick={toggleNested} color="primary">
                <i className="fa fa-check-circle mr-2"></i>
                Save
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div className="border mt-3 mb-3">
        <Table bordered responsive>
          <tbody>
            <tr>
              <th className="align-middle">
                <span>SKU</span>
              </th>
              <th className="align-middle">
                <span>Primary</span>
              </th>
              <th className="align-middle">
                <span>Active</span>
              </th>
              <th className="align-middle">
                <span></span>
              </th>
              <th className="align-middle">
                <span></span>
              </th>
            </tr>
            <tr>
              <th className="align-middle">
                <span>adf</span>
              </th>
              <th className="align-middle">
                <Input type="radio" name="radio1" className="ml-3 mt-0 mt-n1" />
              </th>
              <th className="align-middle">
                <Input type="checkbox" className="ml-3 mt-0 mt-n1" />
              </th>
              <th className="align-middle">
                <Col className="pagination justify-content-start">
                  <Button onClick={toggle} color="spotify">
                    <i className="fa fa-plus mr-2"></i>
                    Edit
                  </Button>
                </Col>
              </th>
              <th className="align-middle">
                <span></span>
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
      <Row>
        <Col>
          <Button color="danger">
            <i className="fa fa-times-circle mr-2"></i>
            Cancel
          </Button>
        </Col>
        <Col className="pagination justify-content-end">
          <Button onClick={toggleNested} color="primary">
            <i className="fa fa-check-circle mr-2"></i>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default VariationsTable
