import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  radiusButton: {
    borderRadius: 30,
    backgroundColor: '#e6e0dd !important',
    color: '#6c6766',
    fontSize: '14px',
    fontWeight: 500,
  },
  label: {
    backgroundColor: '#f7f7f7',
    color: '#6c6766',
    fontSize: '14px',
    fontWeight: 500,
    borderRadius: '4px',
  },
})

export const SearchCriteria = ({filters, clearFilter}) => {
  const classes = useStyles()

  return (
    <div className="mt-2 mb-2">
      {filters.map((filter) => {
        return (
          <Row form className="mx-2 mb-2" key={filter.id}>
            <Col sm={{size: 'auto', offset: 1}} className="text-center">
              <Button
                color="light"
                className="rounded-circle"
                onClick={() => clearFilter(filter.id)}>
                <i className="fa fas fa-times"></i>
              </Button>
            </Col>
            <Col className={`${classes.label} p-2 mr-2 col-auto`}>{filter.label}</Col>
            <Col className={`${classes.radiusButton} px-3 py-2 mr-2 col-auto`}>
              {filter.operator}
            </Col>
            <Col className={`${classes.label} p-2 mr-2 col-auto`}>{filter.value}</Col>
          </Row>
        )
      })}
    </div>
  )
}

SearchCriteria.propTypes = {
  filters: PropTypes.array,
  clearFilter: PropTypes.func,
}

export default SearchCriteria
