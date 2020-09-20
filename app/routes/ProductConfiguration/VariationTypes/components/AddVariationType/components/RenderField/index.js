import React from 'react'
import PropTypes from 'prop-types'
import { Row, Input } from 'reactstrap'

import iconCross from 'images/commonIcons/cross.svg'

const RenderField = ({removeField, field}) => {
    return (
        <Row className="py-1">
            <div className="d-flex flex-row p-2" style={{width: '85%'}}>
                <div className="my-auto pl-2">
                    <img src={iconCross} onClick={removeField} className="pointer"/>
                </div>
                <div style={{width: '100%'}} className="col-12 col-md-6 col-lg-4 ml-1">
                    <Input type="text" defaultValue={field}/>
                </div>
            </div>
        </Row>
    )
}

RenderField.propTypes = {
    removeField: PropTypes.func,
    field: PropTypes.string,
}

export default RenderField
