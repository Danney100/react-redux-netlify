import React from 'react'
import {Row, Col, Card, CardBody, CardHeader, Button, Table } from 'reactstrap'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'

function AddReport() {
    return (
        <>
           <Card className="mt-3">
                <CardBody>
                    <Row>
                        <Col className="border" sm={3}>
                            <CustomSearch />
                        </Col>
                        <Col className="border" sm={9}></Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default AddReport
