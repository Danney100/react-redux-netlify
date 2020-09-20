import React from 'react'
import {Row, Col, Card, CardBody, CardHeader, Button, Table } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import { data, columns } from './DemoData'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    dataCard: {
        '& .reset-expansion-style':{
            padding : '0px'
        },
        '& .expand-cell':{
            borderRight: "none"
        },
        '& .table': {
            marginBottom: '0px'
        },
        '& .table-responsive-sm th, tbody': {
            color: '#423b3c',
        },
        '& .table-responsive-sm thead th': {
            borderColor: '#dee2e6',
            backgroundColor: '#f2f2f2',
            fontSize: '14px',
            outLine : 'none'
        },
        '& .table-responsive-sm thead th:focus': {
            outline:'0'
        }
    }
}))

function DataDictionary() {
    const classes = useStyles()
    const expandRow = {
        renderer: row => (
            <Table responsive className="subTable">
                <tbody>
                    {row.subData.map(val=>(
                        <tr>
                            <td>{val.DataSource}</td>
                            <td>{val.Description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            // row.subData.map(val=>(
            //     <Row className="border">
            //         <Col sm={3} className="border">{val.DataSource}</Col>
            //         <Col sm={8} className="border">{val.Description}</Col>
            //     </Row>
            // ))
        ),
        onlyOneExpanding: true,
        showExpandColumn: true,
        expandByColumnOnly: true,
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                return (<i className="fa fa-sort-down"></i>)
                }
                return (<i className="fa fa-caret-right"></i>)
        },
        expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
                return (<i className="fa fa-sort-down"></i>)
            }
            return (<i className="fa fa-caret-right"></i>)
        }
        };
    return (
        <>
            <Card className="mt-3">
                <CardBody>
                    <span className="fa-stack fa-lg">
                        <i className="fa fas fa-question-circle fa-2x text-warning"></i>
                    </span>
                    <span className="text-black">
                        Here you can see a description for every available reporting data source and field in the system.
                    </span>
                </CardBody>
            </Card>
            <Card className={`mt-3 ${classes.dataCard}`}>
                <CardBody>
                    <Button color="success" className="mb-3">
                        <i className="fa fa-file-excel-o mr-2"></i>
                        Export to Excel
                    </Button>
                    <BootstrapTable
                    keyField='id'
                    data={ data }
                    columns={ columns }
                    classes="table-responsive-sm"
                    expandRow={ expandRow }
                    />
                </CardBody>
            </Card>
        </>
    )
}

export default DataDictionary
