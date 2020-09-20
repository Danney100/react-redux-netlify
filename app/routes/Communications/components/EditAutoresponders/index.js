import React, {useContext, useRef, useState, useEffect} from 'react'
import {Col, Card, Label, FormGroup, Input, Row} from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import AppContext from 'components/App/AppContext'
import {useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import JoditEditor from 'jodit-react'
import {CustomInput} from 'components'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  name: {
    fontSize: '12px',
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  value: {
    color: '#6c6766',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  basic: {
    color: '#403839',
    fontSize: 16,
    fontFamily: 'SFUIText-Semibold',
  },
  info: {
    color: '#adaaaa',
    fontSize: 14,
    fontFamily: 'SFUIText-Medium',
  },
  label: {
    color: '#de8b6d',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  select: {
    height: 305,
  },
  subcheck: {
    color: '#403839',
    fontSize: 14,
    fontFamily: 'SFUIText-Semibold',
  },
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
  size: {
    height: '300px',
  },
  boxStyle: {
    marginTop: 10,
  },
})
const EditAutoresponders = () => {
  const IconButton = ({icon, className}) => (
    <div className={`${className} d-flex flex-row`}>
      <div>
        <img src={icon} />
      </div>
    </div>
  )
  const config = {
    readonly: false,
  }
  const editor = useRef(null)
  const history = useHistory()
  const classes = useStyles()
  const [content, setContent] = useState('')
  const routeChange = () => {
    history.push('/communications/autoresponders')
  }
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Communications > Autoresponders > Edit Autoresponder')
  }, [])

  return (
    <div className="container-fluid">
      <Row className="mt-4">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Edit Autoresponder</p>
        </Col>
      </Row>
      <CommonDemo
        item="success"
        wrapperClass="mx-0"
        content="Editing an antoresponder will update the system generated message throughout the system. Once the details and body of the message have been updated, the new information will be included immediately for all autoresponders sent out."
        contentOne="Feature Guide Link "
        contentTwo={<i className="fa fas fa-long-arrow-right"></i>}
      />
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className={classes.subtitle}>Basic Info</p>
          <hr className={classes.border} />
        </div>
        <div className="mt-3">
          <Row form>
            <Col>
              <FormGroup row>
                <Label for="userType" sm={3} className="text-md-right ml-3">
                  Type
                </Label>
                <Col sm={7} className="sc-form-2col__right">
                  <Label sm={7} className={`${classes.info} `}>
                    Customer Subscription Order Payment Declined
                  </Label>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup row>
                <Label for="userType" sm={3} className="text-md-right ml-3">
                  Recipient
                </Label>
                <Col sm={7} className="sc-form-2col__right">
                  <Label sm={7} className={`${classes.info}`}>
                    Customer
                  </Label>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup row>
                <Label for="userType" sm={3} className="text-md-right ml-3">
                  Last Modified
                </Label>
                <Col sm={7} className="sc-form-2col__right">
                  <Label sm={7} className={`${classes.info}`}>
                    4/10/2019 11:43 PM
                  </Label>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Card>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className={classes.subtitle}>Edit Message</p>
          <hr className={classes.border} />
        </div>
        <div className="mt-2 p-2">
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>From Email</Label>
                <Input className={classes.value} placeholder="hello@scoutandcellar.com" />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>CC (Copy) Email</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup className="mr-md-5 mt-3">
                <Label className={classes.name}>BCC (Blind Copy) Email</Label>
                <Input />
              </FormGroup>
            </Col>
            <Col md={{size: 4}}>
              <FormGroup className="mt-3">
                <Label className={classes.name}>Template</Label>
                <Input type="select" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 8, offset: 2}}>
              <FormGroup>
                <Label className={classes.name}>Subject</Label>
                <Input
                  className={classes.value}
                  placeholder="Consultant Subscription Order Payment Declined"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{size: 8, offset: 2}} className="mt-3">
              <FormGroup>
                <Label className={classes.name}>Merge Tokens</Label>
                <Row form>
                  <Col className="mt-2">
                    <Input className={classes.value} type="select">
                      <option>Confirmation Link</option>
                    </Input>
                  </Col>
                  <Col xs={12} sm={3} md={4} lg={5} xl={3} className="mt-2">
                    <CommonButton title="Add" buttonType="addconfirmButton" />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row form className="mb-4">
            <Col md={{size: 8, offset: 2}}>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
              />
            </Col>
          </Row>
          <Row form className="mt-5 mb-5">
            <Col md={{size: 1, offset: 2}}>
              <CustomInput type="checkbox" id="Enabled" label="Enabled" className={` ${classes.label} mb-3`} />
            </Col>
            <Col md={{size: 8,offset:1}}>
              <CustomInput
                type="checkbox"
                id="Triggered by Employee"
                label="Triggered by Employee"
                className={` ${classes.label}`}
              />
            </Col>
          </Row>
        </div>
      </Card>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Card md={6} className="mb-4 p-1 justify-content-start">
              <div tag="h5">
                <p className={classes.subtitle}>Send View Preview</p>
                <hr className={classes.border} />
              </div>
              <div className="mt-3">
                <Row form>
                  <Col>
                    <FormGroup className="mr-4 ml-4">
                      <Input className={classes.value} placeholder="Enter Order"></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <FormGroup className="mr-4 ml-4">
                      <Input className={classes.value} placeholder="dolin@dev.com"></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
                    <FormGroup className="d-flex justify-content-end ">
                      <CommonButton title="Preview" buttonType="preview" />
                      <CommonButton title="Send Preview" buttonType="preview" />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Card>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Card md={6} className={`${classes.select} mb-4 p-1`}>
              <div tag="h5">
                <p className={classes.subtitle}>
                  Select to enter a translation for another language
                </p>
                <hr className={classes.border} />
              </div>
              <div className={`mt-3`}>
                <Row form>
                  <Col>
                    <FormGroup className="mr-4 ml-4">
                      <Input className={classes.value} type="select">
                        <option>Default Message</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Card>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col className="d-flex justify-content-end">
          <CommonButton title="Cancel" onClick={() => routeChange()} buttonType="cancelButton" />
          <CommonButton title="Save Changes" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default EditAutoresponders
