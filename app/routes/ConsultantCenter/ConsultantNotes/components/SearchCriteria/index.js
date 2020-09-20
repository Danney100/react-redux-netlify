import React, {useState, useContext, useEffect} from 'react'
import {Row, Col, Card, CardBody, CardTitle, Button, Collapse} from 'reactstrap'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import AppContext from 'components/App/AppContext'
import SearchForms from '../SearchForms'

export const SearchCriteria = (props) => {
  const {setIsShow} = props
  const [isOpen, setIsOpen] = useState(true)
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Consultant')
  }, [])

  const history = useHistory()
  const routeChange = () => {
    let path = '/consultant-center/consultant-create'
    history.push(path)
  }
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div>
      <div className=" d-flex  justify-content-end">
        <div className="text-left" style={{padding: '0.5rem 0rem'}}>
          <Button onClick={routeChange} color="spotify ">
            <i className="fa fa-plus mr-2"></i>
            Add New Consultant
          </Button>
        </div>
      </div>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-2 bg-primary text-white rounded-top">
              <CardTitle tag="h5" className="mb-0 d-flex justify-content-between">
                <div>
                  <i className="fa fas fa-search text-white"></i>
                  <span className="big ml-1 text-white">Search Criteria</span>
                </div>
                <div className="d-flex text-white" onClick={toggleOpen}>
                  <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen}>
              <div>
                <SearchForms />
                <div className="text-left d-flex justify-content-between p-2">
                  <Button color="danger" style={{width: '135.95px'}}>
                    <i className="fa fa-times mr-2"></i>
                    Reset
                  </Button>
                  <Button
                    onClick={() => setIsShow(true)}
                    color="dark"
                    style={{
                      width: '135.95px',
                    }}>
                    <i className="fa fa-search mr-2"></i>
                    Search
                  </Button>
                </div>
              </div>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

SearchCriteria.propTypes = {
  setIsShow: PropTypes.func.isRequired,
}

export default SearchCriteria
