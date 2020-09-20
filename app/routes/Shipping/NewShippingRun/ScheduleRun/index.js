import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  CustomInput,
  CardTitle,
  Media,
  ListGroupItem,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    margin: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
    borderRadius: 6,
  },
  buttonMargin: {
    marginTop: 30,
    marginBottom: 20
  },
  checkColor: {
    color: '#DE8B6D',
    fontSize: 15,
  },
  buttonStyle: {
    backgroundColor: '#6C6766 !important',
    borderColor: '#6C6766 !important',
  },
})

export const ScheduleRun = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
              <CardTitle className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="h5 text-dark font-weight-bold">Schedule Automatic Run</span>
                </div>
                <Form>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="enale"
                      label="Enable"
                      className={classes.checkColor}
                    />
                  </div>
                </Form>
              </CardTitle>
            </CardBody>
            <ListGroupItem className={classes.demos}>
              <Media className="d-flex">
                <Media>
                  <div className={classes.media}>
                    <i className="fa fas fa-check text-primary"></i>
                  </div>
                </Media>
                <Media className="ml-4">
                  <span className="text-dark">
                    This is where you schedule reoccuring shipping runs. Once a run is successful,
                    it will automatically schedule the next run using the same criteria.
                    <p>
                      Feature Guide Link <i className="fa fas fa-long-arrow-right"></i>
                    </p>
                  </span>
                </Media>
              </Media>
            </ListGroupItem>
            <Form>
              <Row className="mx-1 mt-2 border-top text-dark font-weight-bold">
                <Col md={{size: 2, offset: 2}} className="mt-3">
                  <FormGroup>
                    <div>
                      <Label>Every</Label>
                      <CustomInput type="checkbox" id="sunday" label="Sunday" />
                      <CustomInput type="checkbox" id="monday" label="Monday" />
                      <CustomInput type="checkbox" id="tuesday" label="Tuesday" />
                      <CustomInput type="checkbox" id="wednesday" label="Wednesday" />
                      <CustomInput type="checkbox" id="thursday" label="Thursday" />
                      <CustomInput type="checkbox" id="friday" label="Friday" />
                      <CustomInput type="checkbox" id="saturday" label="Saturday" />
                    </div>
                  </FormGroup>
                </Col>
                <Col md="8" className="border-left">
                  <Row className="mx-1 mt-3">
                    <Col md={{size: 4}}>
                      <FormGroup>
                        <Label for="exampleCity">At</Label>
                        <Input type="time" name="at" id="exampleCity" />
                      </FormGroup>
                    </Col>
                    <Col className={classes.buttonMargin}>
                      <Button className={classes.buttonStyle}>Add Filter</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ScheduleRun
