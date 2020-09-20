import React, {useState} from 'react'
import {Row, Col, Card, Table} from 'reactstrap'
import PaginationsList from './PaginationsList'
import TransactionModal from './TransactionModal'
import {makeStyles} from '@material-ui/core/styles'
import iconDetails from 'images/commonIcons/details.svg'
import CommonButton from 'routes/components/CommonButton'

const useStyles = makeStyles({
  imageSize: {
    height: 15,
    width: 15,
    marginLeft: 2.5,
  },
  imgSize: {
    width: 22,
    height: 22,
    borderRadius: 30,
    backgroundColor: '#E6E0DD',
  },
  title: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 16,
    color: '#423b3c',
    marginTop: 15,
  },
  font: {
    fontSize: '12px',
    color: '#a09d9d',
    fontFamily: 'Avenir-Heavy',
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
    marginLeft: 6,
  },
  theadFont: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
})
const TransactionsContent = () => {
  const classes = useStyles()

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <Card className="pr-2 mt-4">
      <Row className="mt-3 border-bottom d-flex justify-content-between">
        <Col sm={2} className={`${classes.title} d-flex justify-content-start ml-3  `}>
          Transactions
        </Col>
        <Col sm={8} className="mb-2 mr-2 d-flex justify-content-end">
          <CommonButton title="Refund Payment" buttonType="refundButton" />
          <CommonButton title="Add Payment" buttonType="addpayButton" />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className={`${classes.font} mt-4`}>
          <Table responsive striped>
            <thead className={classes.theadFont}>
              <tr>
                <th>
                  <span className="ml-2">Date</span>
                </th>
                <th>
                  <span>Display ID</span>
                </th>
                <th>
                  <span>Amount</span>
                </th>
                <th>
                  <span>Type</span>
                </th>
                <th>
                  <span>Detail1</span>
                </th>
                <th>
                  <span>Gateway</span>
                </th>
                <th>
                  <span>TransactionID</span>
                </th>
                <th>
                  <span>Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.tbodyFont}>5/29/2020</td>
                <td className={classes.tbodyFont}>CC487242</td>
                <td className={classes.tbodyFont}>$49.12</td>
                <td className={classes.tbodyFont}>Credit Card Payment</td>
                <td className={classes.tbodyFont}>6465</td>
                <td className={classes.tbodyFont}>IDSTC Internal Credit Card</td>
                <td className={classes.tbodyFont}>1728643a-bf3a-4104- 8faf-6d77c0cca286</td>
                <td>
                  <div>
                    <Row>
                      <span>
                        <div className={classes.imgSize}>
                          <img src={iconDetails} className={classes.imageSize} />
                        </div>
                      </span>
                      <span>
                        <div className={classes.tbodyFont}>Details and Join</div>
                      </span>
                    </Row>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <PaginationsList />
      <TransactionModal toggle={toggle} modal={modal} />
    </Card>
  )
}
export default TransactionsContent
