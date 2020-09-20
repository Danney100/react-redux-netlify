import React, {useState} from 'react'
import DeleteIcon from 'routes/components/CustomIconButton/DeleteIcon'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import iconRemove from 'images/commonIcons/remove.svg'

const DeleteModal = (props) => {
  const [modal, setModal] = useState(false)
  const {className} = props
  const toggle = () => setModal(!modal)

  return (
    <div>
      <div onClick={toggle}>
        <img src={iconRemove} />
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          className="border-bottom py-3"
          style={{fontFamily: 'Oswald-SemiBold'}}
          toggle={toggle}>
          Confirm
        </ModalHeader>
        <ModalBody>Are you sure you want to delete this address? Changes will be lost.</ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: '#27BFA3'}} onClick={toggle}>
            Continue
          </Button>
          <Button style={{backgroundColor: '#6c6766'}} onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DeleteModal
