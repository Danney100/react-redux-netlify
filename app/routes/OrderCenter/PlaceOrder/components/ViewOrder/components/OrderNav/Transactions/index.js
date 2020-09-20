import React, {useState} from 'react'
import {Row, Col, Button} from 'reactstrap'
import paginationFactory from 'react-bootstrap-table2-paginator'
import BootstrapTable from 'react-bootstrap-table-next'
import TransactionModal from './TransactionModal'

const Transactions = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const actionFormater = () => {
    return (
      <Button color="secondary" onClick={toggle}>
        <i className="fa fa-fw fa-eye" aria-hidden="true" />
        Deatils and Join
      </Button>
    )
  }

  const columns = [
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
    },
    {
      dataField: 'displayId',
      text: 'Display ID',
      sort: true,
    },
    {
      dataField: 'amount',
      text: 'Amount',
      sort: true,
    },
    {
      dataField: 'type',
      text: 'Type',
      sort: true,
    },
    {
      dataField: 'detail1',
      text: 'Detail1',
      sort: true,
    },
    {
      dataField: 'gateway',
      text: 'Gateway',
      sort: true,
    },
    {
      dataField: 'transactionId',
      text: 'TransactionID',
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]
  const data = [
    {
      id: 1,
      date: '6/19/2020',
      displayId: 'CC487710',
      amount: '$56.03',
      type: 'Credit Card Payment',
      detail1: '7454',
      gateway: 'IDSTC Internal Credit Card',
      transactionId: '6e11a7c1-3400-4abe-8a54-1b403f06aa3c',
    },
  ]

  return (
    <div className="pr-2">
      <Row className="mt-3">
        <Col sm={12} xs={12} lg={2} className="text-lg-left text-center text-black my-auto h4">
          Transactions
        </Col>
        <Col
          sm={12}
          xs={12}
          lg={10}
          style={{
            top: '7px',
            height: 'fit-content',
          }}
          className="text-lg-right text-center p-0">
          <Button className="mr-1" color="info">
            <i className="fa fa-plus mr-1"></i>
            Add Payment
          </Button>
          <Button className="mr-1" color="info">
            <i className="fa fa-money mr-1"></i>
            Refund Payment
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            pagination={paginationFactory()}
            classes="table-responsive text-black"
          />
        </Col>
      </Row>
      <TransactionModal toggle={toggle} modal={modal} />
    </div>
  )
}

export default Transactions
