import React, {useState} from 'react'
import {Row, Col, Modal, ModalBody, ModalHeader, Media, ListGroupItem} from 'reactstrap'
import ModelTable from '../ModelTable'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    marginTop: 20,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
  },
  Radius: {
    borderRadius: 6,
  },
  imageSize: {
    height: 25,
    padding: 3,
    marginRight: 8,
  },
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const TransactionButton = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoTwo =
    'The transactions that belong to the selected Sky Wallet balance are displayed here.'

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Transactions
        </ModalHeader>
        <ModalBody>
          <div className={classes.Radius}>
            <ListGroupItem className={classes.demos}>
              <Media>
                <Media>
                  <div className={classes.media}>
                    <i className="fa fas fa-check text-primary"></i>
                  </div>
                </Media>
                <Media className="ml-4">
                  <span className="text-dark">
                    <p>{DemoTwo}</p>
                  </span>
                </Media>
              </Media>
            </ListGroupItem>
          </div>
          <ModelTable />
        </ModalBody>
      </Modal>
      <div color="link" onClick={toggle} className={classes.buttonSize}>
        <Row>
          <Col sm="2">
            <div className={classes.imgSize}>
              <i className="fa fa-usd ml-2 mr-1"></i>
            </div>
          </Col>
          <Col sm="9">Transactions</Col>
        </Row>
      </div>
    </div>
  )
}

export default TransactionButton
