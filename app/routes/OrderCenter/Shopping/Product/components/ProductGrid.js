import React from 'react'
    import {Col, Button, CardTitle, CardImg, CardSubtitle, CardBody} from 'reactstrap'
    import PropTypes from 'prop-types'

    import Wine1 from 'images/wineimg/wine5.png'

const ProductGrid = ({products, handleAddCartItem}) => {
  return products.slice(0, 15).map((product) => (
    <Col key={product.id} md={4} sm={12} xs={12}>
      <div className="mx-5 my-5 d-flex justify-content-center">
        <CardBody>
          <CardImg
            className="ml-5 mr-5"
            src={Wine1}
            alt="Card image cap"
            style={{height: '235px', width: '140px'}}
          />
          <CardTitle className="ml-4">{product.name}</CardTitle>
          <CardSubtitle className="d-flex justify-content-center">
            ${product.price['amount'] / 100}
          </CardSubtitle>
          <div className="mt-3 text-lg-center text-center">
            <Button variant="outlined" onClick={() => handleAddCartItem(product)}>
              Add To Cart
            </Button>
          </div>
        </CardBody>
      </div>
    </Col>
  ))
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  handleAddCartItem: PropTypes.func,
}

export default ProductGrid
