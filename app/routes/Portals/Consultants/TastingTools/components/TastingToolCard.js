import React from 'react'
import {Card, CardBody, Input} from 'reactstrap'

const TastingToolCard = () => {
  return (
    <Card>
      <CardBody className="py-3 text-white rounded-top border-bottom">
        <span
          className="sub-title Oswald-SemiBold"
          style={{color: '#423b3c', fontSize: '16px', fontFamily: 'Oswald-SemiBold'}}>
          Tasting Tool How-To's
        </span>
      </CardBody>
      <div className="mt-3 mx-4 d-flex flex-column">
        <div className="sub-heading mb-2 avenir-heavy" style={{color: '#423b3c', lineHeight: 2}}>
          Head into your Tastings with all the tools you need to market Clean-Crafted wine.
        </div>
        <div className="mb-3">
          <div className="sub-heading mb-2 avenir-heavy" style={{color: '#423b3c', lineHeight: 2}}>
            The Tasting Form
          </div>
          <p className="text-justify sc-avenir-roman" style={{color: '#423b3c', lineHeight: 2}}>
            In The Cellar {'>'} Tastings {'>'} Tasting Tools the Tasting Form is available for
            printing. This form is where your Customers will write down their selections, contact
            information and payment method at your Tastings.
          </p>
        </div>
        <div className="pb-5"></div>
        <div className="mt-5">
          <div className="sub-heading mb-2 avenir-heavy" style={{color: '#423b3c', lineHeight: 2}}>
            The Wine List
          </div>
          <p className="text-justify sc-avenir-roman" style={{color: '#423b3c', lineHeight: 2}}>
            In the Cellar {'>'} Tastings {'>'} Tasting Forms, you'll find a link to the Wine List.
            This printable list works just like our website to provide a current up-to-the-minute
            look at all wines available to order, segmented by product availability! Print this list
            right before your Tastings for Customers to use when filling out the Tasting Form.
          </p>
          <ul className="text-justify sc-avenir-roman" style={{color: '#423b3c', lineHeight: 2}}>
            <li>Click here to be directed to The Wine List{'>>'}</li>
            <li>
              Select your state in the upper left hand corner just like you do on the website to
              shop.
            </li>
            <li>
              Everything available in your state will populate automatically. As the website
              updates, this updates, so there will be no lag time between wines going live and form
              updates. So, when new wines go live on Wednesdays at 11 AM CT, they'll instantly be
              added to the list in the states where available!
            </li>
            <li>
              Click “Print this Out” at the top of the page and the Tasting Form will automatically
              format for printing.
              <ul>
                <li>
                  Want to save the list as a PDF to send off to be printed somewhere else? That's
                  easy! Simply select "Print Using System Dialogue" {'>'} Click on the "PDF"
                  dropdown and select "Save as PDF." Be sure to save it as a landscape file for
                  proper formatting.
                </li>
              </ul>
            </li>
          </ul>
          <ul className="text-justify sc-avenir-roman" style={{color: '#423b3c', lineHeight: 2}}>
            <li>
              A few other benefits:
              <ul>
                <li>
                  Includes product SKUs so full product names don't have to be written out on the
                  Tasting Form.
                </li>
                <li>
                  Volume discounted pricing for 1/2 and full cases is displayed for each wine.
                </li>
                <li>
                  You can access the link without logging into The Cellar at
                  ScoutandCellar.com/WineList.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div className="sub-heading mb-2 avenir-heavy" style={{color: '#423b3c', lineHeight: 2}}>
            The Companion Form
          </div>
          <p className="text-justify sc-avenir-roman" style={{color: '#423b3c', lineHeight: 2}}>
            Still want the option to bring along the full wine descriptions and images? No problem!
            The Companion Form will be updated weekly and will be available Wednesdays @ 11 AM CT in
            The Cellar {'>'} Tastings {'>'} Tasting Tools.
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TastingToolCard
