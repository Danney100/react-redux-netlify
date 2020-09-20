import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import {useHistory} from 'react-router'
import PropTypes from 'prop-types'

const SearchButton = ({productId}) => {
  const history = useHistory()
  const updateProductDetails = () => {
    history.push(`/product-center/product-edit/${productId}`)
  }

  return (
    <Row className="mt-1">
      <Col sm={8} xs={12} className="text-lg-left text-center">
        <Button className="m-1" color="info" onClick={updateProductDetails}>
          <i className="fa fas fa-pencil mr-1"></i>Edit Product Details
        </Button>
        <Button className="m-1" color="info">
          <i className="fa fas fa-pencil mr-1"></i>Copy Product
        </Button>
      </Col>
    </Row>
  )
}

SearchButton.propTypes = {
  productId: PropTypes.string,
}

export default SearchButton
