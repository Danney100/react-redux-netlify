import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  FormGroup,
  CardTitle,
  Collapse,
  Button,
} from 'reactstrap'
import Select from 'react-select'
import React, {useState, useRef} from 'react'
import JoditEditor from 'jodit-react'

export const DisplayTable = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [orGroupCount, setOrGroupCount] = useState(0)
  const removeOrGroup = () => {
    if (orGroupCount > 0) {
      setOrGroupCount((prevState) => prevState - 1)
    }
  }
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const Category = () => {
    setOrGroupCount((prevState) => prevState + 1)
  }
  const config = {
    readonly: false,
  }
  const renderOrGroups = () => {
    const groups = []
    for (let i = 0; i < orGroupCount; i++) {
      const isFirst = i === 0
      const isLast = i === orGroupCount - 1
      groups.push(
        <FormGroup row className="mx-0" style={{padding: '0px 10px'}} key={i}>
          <Col sm={6} md={8} className="p-1">
            <div className="container px-0">
              <Input type="select" name="select">
                <option defaultValue=""></option>
                <option>All products</option>
                <option>Bold</option>
                <option>Business Kit</option>
                <option>CANS</option>
                <option>Chardonnay</option>
                <option>Circle Exclusive</option>
              </Input>
            </div>
          </Col>
          <Col sm={6} md={4} className="p-1 text-lg-left text-right">
            <Button color="primary" onClick={removeOrGroup}>
              <i className="fa fas fa-minus"></i>
            </Button>
            {(isFirst || isLast) && (orGroupCount === 1 || isLast) && (
              <Button className="ml-1 Secondary" onClick={Category}>
                Display Order
              </Button>
            )}
          </Col>
        </FormGroup>,
      )
    }
    ;<FormGroup row className="mx-0" style={{padding: '0px 10px'}}>
      <Col sm={6} md={3} className="p-1">
        <div className="container px-0">
          <Select placeholder={'Display Name'} />
        </div>
      </Col>
      <Col sm={6} md={2} className="p-1">
        <Input type="select" name="select">
          <option defaultValue="">Contains</option>
          <option>Is</option>
          <option>Does Not Contain</option>
          <option>Starts With</option>
        </Input>
      </Col>
      <Col sm={9} md={5} className="p-1">
        <Input type="text" name="text"></Input>
      </Col>
      <Col sm={3} md={2} className="p-1 text-lg-left text-right">
        <Button color="primary">
          <i className="fa fas fa-minus"></i>
        </Button>
      </Col>
    </FormGroup>
    return groups
  }

  return (
    <div className="mt-3">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <Collapse isOpen={isOpen}>
              <Row>
                <Col md="6" sm="6">
                  <Card>
                    <CardBody className="py-2 bg-primary">
                      <CardTitle
                        tag="h5"
                        className="mb-0 text-white d-flex justify-content-between">
                        <div>
                          <span className="big ml-1">Display Item</span>
                        </div>
                      </CardTitle>
                    </CardBody>
                    <Collapse isOpen={isOpen} className="m-3">
                      <Form>
                        <FormGroup row>
                          <Label for="input" sm={4} className="d-flex text-dark">
                            Display Name
                          </Label>
                          <Col sm={8}>
                            <Input type="text"></Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="input" sm={4} className="d-flex  text-dark">
                            Cart URL
                          </Label>
                          <Col sm={8}>
                            <Input></Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="input" sm={4} className="d-flex  text-dark">
                            Summary
                          </Label>
                          <Col sm={8}>
                            <Input></Input>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="input" sm={4} className="d-flex  text-dark">
                            Description
                          </Label>
                          <Col sm={8}>
                            <JoditEditor
                              ref={editor}
                              value={content}
                              config={config}
                              tabIndex={1}
                              onBlur={(newContent) => setContent(newContent)}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </Collapse>
                  </Card>
                </Col>
                <Col sm="6" md="6">
                  <Card className="mb-3">
                    <CardBody className="py-2 bg-primary">
                      <CardTitle
                        tag="h5"
                        className="mb-0 text-white d-flex justify-content-between">
                        <div>
                          <span className="big ml-1">Display Categories</span>
                        </div>
                      </CardTitle>
                    </CardBody>
                    <div className=" d-flex  justify-content-end">
                      <div className="p-2 text-left pr-0">
                        <Button color="spotify" onClick={Category}>
                          <i className="fa fa-plus mr-2"></i>
                          Category
                        </Button>
                      </div>
                    </div>
                    {renderOrGroups()}
                  </Card>
                </Col>
              </Row>
            </Collapse>
          </Card>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-2 bg-primary">
              <CardTitle tag="h5" className="mb-0 text-white d-flex justify-content-between">
                <div>
                  <span className="big align-middle ml-1">Associated Media</span>
                </div>
                <div className="d-flex">
                  <Button color="primary" className="bordered border-dark">
                    Edit Associated Media
                  </Button>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen} className="m-3"></Collapse>
          </Card>
          <Row className="d-flex justify-content-between">
            <Col>
              <Button color="secondary">
                <i className="fa fa-times-circle mr-2"></i>
                Cancel changes
              </Button>
            </Col>
            <Col>
              <Button color="success" className="float-right">
                <i className="fa fa-check-circle mr-2"></i>
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default DisplayTable
