import React, {useState} from 'react'
import {Row, Col, Input, InputGroupAddon, InputGroup, InputGroupText} from 'reactstrap'
import iconHome from 'images/commonIcons/home_.svg'

const TopBar = () => {
  const [searchVal, setSearchVal] = useState('')

  return (
    <Row>
      <Col sm={8}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <img src={iconHome} />
            </InputGroupText>
          </InputGroupAddon>
          <Input defaultValue="> New Folder(1)" className="pl-0" readOnly />
        </InputGroup>
      </Col>
      <Col sm={4} className="mt-3 mt-sm-0">
        <Input
          type="search"
          placeholder="search"
          onChange={(e) => setSearchVal(e.target.value)}
          className={`${!searchVal && 'searchIcon'}`}
        />
      </Col>
    </Row>
  )
}

export default TopBar
