import React from 'react'
import {Card, CardBody, Input} from 'reactstrap'

const VerificationsCard = () => {
  return (
    <Card className="my-3">
      <CardBody>
        <span className="sub-title sc-oswald-semibold">Verifications</span>
        <hr />
        <div className="d-flex flex-column">
          <div className="mb-3">
            <div className="sub-heading mb-2 sc-avenir-heavy">Age Verification</div>
            <Input type="checkbox" className="ml-0 mr-2 sc-avenir-roman" />I am at least 21 years of
            age
          </div>
          <div className="mb-4">
            <div className="sub-heading mb-2 sc-avenir-heavy">
              California Residents - PROP 65 WARNING
            </div>
            <p className="text-justify sc-avenir-roman" style={{color: '#423b3c'}}>
              These Terms of Use apply to your use of the Scout & Cellar site at ScoutandCellar.com
              (the “Site”), and to content, information, products, services and materials on the
              Site (collectively, “Content”). Read the full Terms and Conditions here.
            </p>
            <div>
              <Input type="checkbox" className="ml-0 mr-2 sc-avenir-roman" />I have read and agree
              to the Terms of Use
            </div>
          </div>
          <div className="mb-3">
            <div className="sub-heading mb-2 sc-avenir-heavy">
              California Residents - PROP 65 WARNING
            </div>
            <p className="text-justify sc-avenir-roman" style={{color: '#423b3c'}}>
              WARNING: Drinking distilled spirits, beer, coolers, wine and other alcoholic beverages
              may increase cancer risk, and, during pregnancy, can cause birth defects. For more
              information go to www.P65Warnings.ca.gov/alcohol.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default VerificationsCard
