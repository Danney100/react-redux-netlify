import React, {useState, useEffect} from 'react'
import {Row, Col, Card, CardBody, CardTitle, Button, ButtonGroup, Collapse} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'

import EditConsultant from './components/EditConsultant'
import SearchButton from './components/SearchButton'
import {getConsultantDetails} from 'api'
import {setConsultantDetails} from 'duck/actions/consultant'
import ScrollingMenu from './components/ScrollingMenu'

const ConsultantDetails = () => {
  const consultantToDisplay = useSelector(({consultant}) =>
    consultant.get('consultantToDisplay', null),
  )
  const token = useSelector(({user}) => user.get('token'))
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => setIsOpen(!isOpen)

  const dispatch = useDispatch()

  useEffect(() => {
    const payload = {
      id: consultantToDisplay,
      token: token,
    }
    if (consultantToDisplay) {
      getConsultantDetails(payload)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setConsultantDetails(res))
          }
        })
        .catch((err) => console.log(err))
    }
  }, [consultantToDisplay])

  if (!consultantToDisplay) {
    return ''
  }

  return (
    <div className="mt-2">
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card lg={12} md={12} sm={12} xs={12} className="mb-3">
            <CardBody className="py-2 bg-primary">
              <CardTitle tag="h5" className="mb-0 text-white d-flex justify-content-between">
                <div>
                  <i className="fa fas fa-user"></i>
                  <span className="big ml-1">Consultant Search: Clarence Cooper</span>
                </div>
                <div className="d-flex" onClick={toggleOpen}>
                  <i className={isOpen ? 'fa far fa-angle-up' : 'fa far fa-angle-down'}></i>
                </div>
              </CardTitle>
            </CardBody>
            <Collapse isOpen={isOpen} className="m-3">
              <Row>
                <Col className="text-lg-right text-center">
                  <ButtonGroup>
                    <Button color="info">
                      <i className="fa fas fa-fast-backward mr-1"></i>
                      <span>First</span>
                    </Button>
                    <Button color="info">
                      <i className="fa fas fa-step-backward mr-1"></i>
                      <span>Prev</span>
                    </Button>
                    <Button color="info">
                      <i className="fa fas fa-step-forward mr-1"></i>
                      <span>Next</span>
                    </Button>
                    <Button color="info">
                      <i className="fa fas fa-fast-forward mr-1"></i>
                      <span>Last</span>
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <SearchButton />
              <EditConsultant />
              <ScrollingMenu />
            </Collapse>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ConsultantDetails
