import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  CustomInput,
  FormGroup,
  CardTitle,
  ListGroupItem,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import AdditionalOption from '../AdditionalOptions'

const useStyles = makeStyles({
  countryName: {
    color: '#DE8B6D',
    borderLeftWidth: 4,
    borderLeftColor: '#DE8B6D',
    borderColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
  },
  checkColor: {
    color: '#DE8B6D',
    fontSize: 15,
  },
  buttonColor: {
    backgroundColor: '#27BFA3 !important',
    borderColor: '#27BFA3 !important',
  },
})

export const CountryRegion = () => {
  const classes = useStyles()

  return (
    <div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-3 text-white rounded-top mx-3 border-bottom">
              <CardTitle className="mb-0 d-flex justify-content-between">
                <div>
                  <span className="h5 text-dark font-weight-bold">Country/Region</span>
                </div>
                <Form>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="enale"
                      label="Select All"
                      className={classes.checkColor}
                    />
                  </div>
                </Form>
              </CardTitle>
            </CardBody>
            <Form className="mt-3 font-weight-bold">
              <Row>
                <Col md="2">
                  <ListGroupItem className={classes.countryName}>United States</ListGroupItem>
                </Col>
                <Col md="9" className="border-left pl-5 text-dark">
                  <Row>
                    <Col lg="3" className="mr-3 mr-lg-0 d-flex justify-content-center">
                      <FormGroup>
                        <div>
                          <CustomInput type="checkbox" id="alabama" label="Alabama" />
                          <CustomInput type="checkbox" id="alaska" label="Alaska" />
                          <CustomInput type="checkbox" id="ae" label="AE" />
                          <CustomInput type="checkbox" id="ap" label="Ap" />
                          <CustomInput type="checkbox" id="arizona" label="Arizona" />
                          <CustomInput type="checkbox" id="arkansas" label="Arkansas" />
                          <CustomInput type="checkbox" id="california" label="Califonia" />
                          <CustomInput type="checkbox" id="colorado" label="Colorado" />
                          <CustomInput type="checkbox" id="connecticut" label="Connecticut" />
                          <CustomInput type="checkbox" id="dc" label="DC" />
                          <CustomInput type="checkbox" id="delaware" label="Delaware" />
                          <CustomInput type="checkbox" id="florida" label="Florida" />
                          <CustomInput type="checkbox" id="georgia" label="Georgia" />
                          <CustomInput type="checkbox" id="guam" label="Guam" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="3" className="d-flex justify-content-center">
                      <FormGroup>
                        <div>
                          <CustomInput type="checkbox" id="hawaii" label="Hawaii" />
                          <CustomInput type="checkbox" id="idaho" label="Idaho" />
                          <CustomInput type="checkbox" id="illinois" label="Illinois" />
                          <CustomInput type="checkbox" id="indiana" label="Indiana" />
                          <CustomInput type="checkbox" id="iowa" label="Iowa" />
                          <CustomInput type="checkbox" id="kansas" label="Kansas" />
                          <CustomInput type="checkbox" id="kentucky" label="Kentucky" />
                          <CustomInput type="checkbox" id="louisiana" label="Louisiana" />
                          <CustomInput type="checkbox" id="maine" label="Manine" />
                          <CustomInput type="checkbox" id="maryland" label="Maryland" />
                          <CustomInput type="checkbox" id="massachusetts" label="Massachusetts" />
                          <CustomInput type="checkbox" id="michigan" label="Michigan" />
                          <CustomInput type="checkbox" id="minnesota" label="Minnesota" />
                          <CustomInput type="checkbox" id="mississippi" label="Mississippi" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="3" className="ml-2 ml-lg-0 d-flex justify-content-center">
                      <FormGroup>
                        <div>
                          <CustomInput type="checkbox" id="missouri" label="Missouri" />
                          <CustomInput type="checkbox" id="montana" label="Montana" />
                          <CustomInput type="checkbox" id="nebraska" label="Nebraska" />
                          <CustomInput type="checkbox" id="nevada" label="Nevada" />
                          <CustomInput type="checkbox" id="hampshire" label="New Hampshire" />
                          <CustomInput type="checkbox" id="jersey" label="New Jersey" />
                          <CustomInput type="checkbox" id="Mexico" label="New Mexico" />
                          <CustomInput type="checkbox" id="york" label="New York" />
                          <CustomInput type="checkbox" id="carolina" label="North Carolina" />
                          <CustomInput type="checkbox" id="dakota" label="North Dakota" />
                          <CustomInput type="checkbox" id="ohio" label="Ohio" />
                          <CustomInput type="checkbox" id="oklahoma" label="Oklahoma" />
                          <CustomInput type="checkbox" id="oregon" label="Oregon" />
                          <CustomInput type="checkbox" id="pennsylvania" label="Pennsylvania" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col lg="3" className="d-flex justify-content-center">
                      <FormGroup>
                        <div>
                          <CustomInput type="checkbox" id="Rico" label="Puerto Rico" />
                          <CustomInput type="checkbox" id="island" label="Rhode Island" />
                          <CustomInput type="checkbox" id="scarolina" label="South Carolina" />
                          <CustomInput type="checkbox" id="sdakota" label="South Dakota" />
                          <CustomInput type="checkbox" id="tennessee" label="Tennessee" />
                          <CustomInput type="checkbox" id="Texas" label="Texas" />
                          <CustomInput type="checkbox" id="utah" label="Utah" />
                          <CustomInput type="checkbox" id="vermont" label="Vermont" />
                          <CustomInput type="checkbox" id="virgin" label="Virgin Islands" />
                          <CustomInput type="checkbox" id="virgina" label="Virgina" />
                          <CustomInput type="checkbox" id="washington" label="Washington" />
                          <CustomInput type="checkbox" id="wvirginia" label="West Virginia" />
                          <CustomInput type="checkbox" id="wisconsin" label="Wisconsin" />
                          <CustomInput type="checkbox" id="wyoming" label="Wyoming" />
                          <CustomInput type="checkbox" id="aabb" label="AA" />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
          <Row>
            <Col className="d-flex justify-content-end mb-3">
              <AdditionalOption />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CountryRegion
