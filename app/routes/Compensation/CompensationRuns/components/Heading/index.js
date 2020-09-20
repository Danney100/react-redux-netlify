import React from 'react'
import { Col, Row } from 'reactstrap'
import CommonButton from 'routes/components/CommonButton'

function Heading() {
    return (
        <Row className="mt-1">
            <Col sm={6}>
                <h2 className="title">Compensation Run</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
                <CommonButton title="Refresh" buttonType="cancelButton" />
                <CommonButton title="Add Compensation Run" buttonType="addItemButton" />
            </Col>
        </Row>
    )
}

export default Heading
