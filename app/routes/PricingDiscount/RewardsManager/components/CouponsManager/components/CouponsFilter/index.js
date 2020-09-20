import React, {useState} from 'react'
import { Card, CardBody, Form, FormGroup, Label, Row, Col, Input } from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'

const CouponsFilter = () => {
    const [isExpired, setIsExpired] = useState(false)
    return (
        <Card>
            <CardBody>
            <span className="sub-title" >Coupons Filter</span>
            <hr/>
            <Form className="pt-3">
                <FormGroup row>
                    <Label md={3} sm={4} className="label d-flex justify-content-sm-end">Coupon Type(s)</Label>
                    <Col lg={6} md={7} sm={8}>
                        <Input type="select">
                            <option>Select Coupon Types</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label md={3} sm={4} className="label d-flex justify-content-sm-end">Last Name</Label>
                    <Col lg={6} md={7} sm={8}>
                        <Input type="text"/>
                    </Col>
                </FormGroup>
                <Row form>
                    <Col lg={{offset:3,size:6}} md={{offset:3,size:7}} sm={{offset:4,size:8}}>
                        <FormGroup>
                            <Label xs={12} sm="auto" className={`${isExpired?'active':'inactive'} ml-2 mb-2 mb-sm-0`}>
                                <Input type="checkbox" onChange={()=>(setIsExpired(!isExpired))}/>
                                Show Expired
                            </Label>
                            <CommonButton 
                                title="Apply Filter" 
                                buttonType="filterButton" 
                                wrapperClass="float-sm-right mr-1 commonBtn" 
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            </CardBody>
        </Card>
    )
}

export default CouponsFilter
