import React from 'react'
import {Row, Table} from 'reactstrap'
import iconDelete from 'images/commonIcons/trash.svg'
import iconDetails from 'images/commonIcons/details.svg'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  imageSize: {
    height: 15,
    width: 15,
    marginLeft: 3.5,
  },
  imageSizeRemove: {
    height: 16,
    width: 16,
    marginLeft: 3.5,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  imgSizeDetails: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  theadFont: {
    fontFamily: 'SFUIText-Semibold',
    color: '#403839',
    fontSize: 14,
  },
  tbodyFont: {
    fontFamily: 'SFUIText-Medium',
    color: '#6c6766',
    fontSize: 14,
    marginLeft: 6,
  },
})

const OrderItems = () => {
  const classes = useStyles()
  return (
    <div>
      <Table responsive striped>
        <thead className={classes.theadFont}>
          <tr>
            <th>
              <span className="ml-2">SKU</span>
            </th>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Price</span>
            </th>
            <th>
              <span>Qty</span>
            </th>
            <th>
              <span>Subtotal</span>
            </th>
            <th>
              <span>Shipping</span>
            </th>
            <th>
              <span>Estimated Sails Tax</span>
            </th>
            <th>
              <span>Discounts</span>
            </th>
            <th>
              <span>Total</span>
            </th>
            <th>
              <span>QV</span>
            </th>
            <th>
              <span>CV</span>
            </th>
            <th>
              <span>RV</span>
            </th>
            <th>
              <span>Status</span>
            </th>
            <th>
              <span>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.tbodyFont}>14KMixS20</td>
            <td className={classes.tbodyFont}>14K Mix Pack</td>
            <td className={classes.tbodyFont}>$25.00</td>
            <td className={classes.tbodyFont}>1</td>
            <td className={classes.tbodyFont}>$25.00</td>
            <td className={classes.tbodyFont}>$22.00</td>
            <td className={classes.tbodyFont}>$2.12</td>
            <td className={classes.tbodyFont}>$0.00</td>
            <td className={classes.tbodyFont}>$49.12</td>
            <td className={classes.tbodyFont}>25.00</td>
            <td className={classes.tbodyFont}>17.50</td>
            <td className={classes.tbodyFont}>25.00</td>
            <td className={classes.tbodyFont}>Open</td>
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
              <div>
                <Row className="mt-1">
                  <span>
                    <div className={classes.imgSize}>
                      <img src={iconDelete} className={classes.imageSizeRemove} />
                    </div>
                  </span>
                  <span>
                    <div className={classes.tbodyFont}>Remove</div>
                  </span>
                </Row>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default OrderItems
