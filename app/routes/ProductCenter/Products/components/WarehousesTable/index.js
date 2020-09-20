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
  PaginationItem,
  PaginationLink,
  Pagination,
  Media,
  ListGroupItem,
} from 'reactstrap'

const WarehousesTable = () => {
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
  const Demo =
    'Warehouse bin setup allows users to assign warehouses and bin locations to individual products. Bin locations allow the warehouse to easily locate and pack products when shipping orders.'
  const closeBtnOne = (
    <button className="close" onClick={toggleNested}>
      &times;
    </button>
  )

  return (
    <div>
      <Row>
        <Col className="pagination justify-content-end mt-3">
          <Button onClick={toggle} color="spotify">
            <i className="fa fa-plus mr-2"></i>
            Edit Warehouses & Bin
          </Button>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Warehouse Inventory Bin Setup
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
          <ListGroupItem className="border mx-3">
            <Media>
              <Media className="ml-2">
                <span className="fa-stack fa-lg text-warning">
                  <i className="fa fas fa-question-circle fa-2x"></i>
                </span>
              </Media>
              <Media>
                <span>
                  <p className="ml-3">{Demo}</p>
                </span>
              </Media>
            </Media>
          </ListGroupItem>
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
                Cancel Changes
              </Button>
            </Col>
            <Col className="pagination justify-content-end">
              <Button onClick={toggleNested} color="primary">
                <i className="fa fa-check-circle mr-2"></i>
                Save Changes
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div className="border mt-3 mb-3">
        <Table bordered responsive>
          <thead>
            <tr>
              <th>
                <span>Warehouse</span>
              </th>
              <th>
                <span>Bin</span>
              </th>
              <th>
                <span>On-Hand</span>
              </th>
              <th>
                <span>Reserved</span>
              </th>
              <th>
                <span>Safety Stock</span>
              </th>
              <th>
                <span>Available</span>
              </th>
              <th>
                <span>Recorder Level</span>
              </th>
              <th>
                <span>Sales Below Safety Stock</span>
              </th>
              <th>
                <span>Sort Order</span>
              </th>
              <th>
                <span> &nbsp; </span>
              </th>
            </tr>
          </thead>
        </Table>
        <div className="mx-2 mt-2 d-flex justify-content-between">
          <div>
            <Pagination
              size="md"
              className="pagination justify-content-end"
              aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  0
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#"></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#"></PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
          <div>
            <span className="text-dark">No items to display</span>
          </div>
        </div>
      </div>
      <div className="text-left d-flex justify-content-between">
        <Button color="danger" style={{width: '136px'}}>
          <i className="fa fa-times mr-2"></i>
          Cancel Changes
        </Button>
        <Button
          color="info"
          style={{
            width: '80px',
          }}>
          <i className="fa fas fa-check-circle mr-1"></i>
          Save
        </Button>
      </div>
    </div>
  )
}

export default WarehousesTable
