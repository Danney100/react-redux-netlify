import React from 'react'
import {Row, Col, FormGroup, CustomInput, Form} from 'reactstrap'

const ProductClassifications = () => {
  return (
    <div className="mt-2">
      <Row className="pb-3">
        <Col md="6" className="ml-md-0 ml-5">
          <Form>
            <FormGroup>
              <div>
                <CustomInput type="checkbox" id="as1" label="&254 Bottle Set Reward" />
                <CustomInput type="checkbox" id="as2" label="12 Club" />
                <CustomInput type="checkbox" id="as3" label="12 days of Xmas Dec.12" />
                <CustomInput type="checkbox" id="as4" label="12 days of Xmas Dec.4" />
                <CustomInput type="checkbox" id="as5" label="12 days of Xmas Dec.7" />
                <CustomInput type="checkbox" id="as6" label="2 bottle gift set" />
                <CustomInput type="checkbox" id="as7" label="3 bottle gift set" />
                <CustomInput type="checkbox" id="as8" label="6 Club and Tasting" />
                <CustomInput type="checkbox" id="as9" label="Discount Subscriptions" />
                <CustomInput type="checkbox" id="as10" label="Free 4 bottle Set reward" />
                <CustomInput type="checkbox" id="as11" label="Host Discount Items" />
                <CustomInput type="checkbox" id="as12" label="Middle Jane" />
                <CustomInput type="checkbox" id="as13" label="Party Order 4" />
                <CustomInput type="checkbox" id="as14" label="PV Reward 2" />
                <CustomInput type="checkbox" id="as15" label="red301" />
                <CustomInput type="checkbox" id="as16" label="Tasting Sets" />
                <CustomInput type="checkbox" id="as17" label="white338" />
                <CustomInput type="checkbox" id="as18" label="Wine" />
              </div>
            </FormGroup>
          </Form>
        </Col>
        <Col md="6" className="ml-md-0 ml-5">
          <Form>
            <FormGroup>
              <div>
                <CustomInput type="checkbox" id="qw1" label="1 bottle gift set" />
                <CustomInput type="checkbox" id="qw2" label="12 days of Xmas Dec.10" />
                <CustomInput type="checkbox" id="qw3" label="12 days of Xmas Dec.13" />
                <CustomInput type="checkbox" id="qw4" label="12 days of Xmas Dec.5" />
                <CustomInput type="checkbox" id="qw5" label="12 days of Xmas Dec.8" />
                <CustomInput type="checkbox" id="qw6" label="20% Off Discount" />
                <CustomInput type="checkbox" id="qw7" label="4 bottle gift set" />
                <CustomInput type="checkbox" id="qw8" label="Business Basics Kit" />
                <CustomInput type="checkbox" id="qw9" label="Epic Pursuit" />
                <CustomInput type="checkbox" id="qw10" label="Gift Cards" />
                <CustomInput type="checkbox" id="qw11" label="Imports" />
                <CustomInput type="checkbox" id="qw12" label="New Free Host" />
                <CustomInput type="checkbox" id="qw13" label="Party Order 6" />
                <CustomInput type="checkbox" id="qw14" label="PV Reward 3" />
                <CustomInput type="checkbox" id="qw15" label="Rose" />
                <CustomInput type="checkbox" id="qw16" label="Sparkling" />
                <CustomInput type="checkbox" id="qw17" label="Trigger Products" />
                <CustomInput type="checkbox" id="qw18" label="white339" />
                <CustomInput type="checkbox" id="qw19" label="Wine Clubs" />
              </div>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default ProductClassifications
