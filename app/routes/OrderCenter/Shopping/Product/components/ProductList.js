import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

import CommonButton from 'routes/components/CommonButton'
import Wine1 from 'images/wineimg/wine5.png'
import iconTag from 'images/commonIcons/tag.svg'

const useStyles = makeStyles(() => ({
  label: {
    fontFamily: 'SFUIText-Semibold',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 1.36,
    color: '#403839',
  },
  ingredient: {
    fontFamily: 'SFUIText-Medium',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.36,
    color: '#6c6766',
  },
  price: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'condensed',
    color: '#403839',
  },
  description: {
    fontFamily: 'SFUIText-Medium',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.36,
    color: '#6c6766',
  },
  tagMark: {
    background: '#e94b35',
    color: 'white',
    fontSize: '11px',
    fontWeight: 900,
    fontFamily: 'SFUIText-Heavy',
    borderRadius: '2px',
    marginLeft: '-3px',
  },
  addItemBtn: {
    background: 'white',
    border: 'solid 1px #6c6766',
    fontFamily: 'SFUIText-Heavy',
    fontSize: '13px',
    fontWeight: 900,
    color: '#403839',
  },
}))

const ProductList = ({products, handleAddCartItem}) => {
  const classes = useStyles()

  const Ingredient = ({per, name}) => (
    <div className="d-flex flex-row my-1">
      <div className={`${classes.label} mr-2`}>{per}</div>
      <div className={`${classes.ingredient}`}>{name}</div>
    </div>
  )

  return products.slice(0, 15).map((product) => (
    <Row key={product.id} className="border-bottom py-4 mx-0 mx-md-1">
      <Col sm={4} md={2} className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div>
            <img src={Wine1} alt="Card image cap" style={{height: '168px', width: '100px'}} />
          </div>
          <div className={`${classes.price} text-center`}>${product.price['amount'] / 100}</div>
        </div>
      </Col>
      <Col sm={8} md={10} className="mt-3 ">
        <Row>
          <Col xs={8} md={4} className={`${classes.label} mb-2 mb-md-0 pr-0`}>
            <div>{product.name}</div>
            <div className="d-flex flex-row mt-3">
              <div className={`${classes.tagMark} px-2 pt-1`}>White349</div>
              <div className="ml-n1">
                <img src={iconTag} />
              </div>
            </div>
          </Col>
          <Col xs={8} md={3} className={`${classes.label} mb-2 mb-md-0 pr-0`}>
            <div>Fruity, Crisp</div>
            <div>Organic, Vegan</div>
          </Col>
          <Col xs={8} md={5}>
            <Ingredient per="60%" name="Chardonnay" />
            <Ingredient per="40%" name="Sauvignon Blanc" />
            <Ingredient per="13.2%" name="Alcohol" />
            <Ingredient per="0.05 g/L" name="Residual Sugar" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={`${classes.description} mt-4 pt-3 border-top`}>
              This exclusive small-batch white wine was made by resident winemaker John Harley. John
              has been making wine for over 16 years and has been doing so in the most natural way
              possible since day one. Fatherhood has deeply shaped the …
            </div>
            <div className={`${classes.label} mt-2`}>Read More</div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end mt-2">
            <CommonButton
              title="Add To Cart"
              buttonType="addToCartButton"
              onClick={() => handleAddCartItem(product)}
              height={40}
              width={150}
              wrapperClass={classes.addItemBtn}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  ))
}

ProductList.propTypes = {
  products: PropTypes.array,
  handleAddCartItem: PropTypes.func,
}

export default ProductList
