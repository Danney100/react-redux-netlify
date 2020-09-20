import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch, connect} from 'react-redux'
import {setLoadingStatus} from 'duck/actions/process'
import {setTabActive} from 'duck/actions/user'
import {getAdmins, delAdminById} from 'api'

import MoonLoader from 'react-spinners/MoonLoader'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'components'
import {CustomSearch} from 'routes/Tables/ExtendedTable/components'
import {useHistory} from 'react-router'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {showErrorNotification} from 'helpers/util'
import iconEdit from 'images/commonIcons/edit.svg'
import iconDelete from 'images/commonIcons/delete.svg'

const UsersTable = ({user, process}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLoading = process.get('isLoading')
  const tabActive = user.get('tabActive')

  const [data, setData] = useState([])
  
  const requestData = async () => {
    try {
      let token = await user.get('token')
      if (token) {
        getAdmins(token)
        .then((res) => {
          if (!res?.hasError) {
            let users = []
            for (const [index, user] of res.entries()) {
              users.push({
                index,
                id: user.id,
                name: user.username ? user.username : '',
                email: user.email,
                firstName: user.first_name ? user.first_name : '',
                lastName: user.last_name ? user.last_name : '',
                language: user.language ? user.language : '',
                country: user.country ? user.country : '',
                userType: user.user_type ? user.user_type : '',
                lockedOut: user.locked_out ? 'Yes' : 'No',
              })
            }
            setData(users)
          } else {
            console.log(res)
            showErrorNotification(res.response.data.message)
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          dispatch(setLoadingStatus(false))
        })
      }
    } catch (err) {
      console.log(err)
      console.warn("Can't get token")
    }
  }

  useEffect(() => {
    dispatch(setLoadingStatus(true))
    if (tabActive === "Users") {
      requestData()
    }
  }, [tabActive])

  const editUser = (event, data) => {
    history.push({
      pathname: `/user-management/edit-user`,
      stage: data,
    })
    dispatch(setTabActive(null))
  }

  const handleLoadingActionBtn = target => {
    for (const el of target.childNodes) {
      if (el.classList?.contains('icon-loading')) {
        if (el.classList.contains('d-none')) {
          el.classList.remove('d-none')
        } else {
          el.classList.add('d-none')
        }
      }
      if (el.classList?.contains('rounded-circle')) {
        if (el.classList.contains('d-none')) {
          el.classList.remove('d-none')
        } else {
          el.classList.add('d-none')
        }
      }
    }
  }

  const deleteUser = (deleteButtonId, data) => {
    const target = document.getElementById(deleteButtonId)

    const delUser = async () => {
      let token = await user.get('token')
      if (token) {
        handleLoadingActionBtn(target)
        target.disabled = true
        delAdminById(data.id, token)
        .then((res) => {
          if (!res?.hasError) {
            dispatch(setTabActive(null))
            dispatch(setTabActive('Users'))
          } else {
            console.log(res)
            showErrorNotification(res.response.data.message)
          }
        })
        .catch((err) => {
          console.log(err)
          handleLoadingActionBtn(target)
          target.disabled = false
        })
      }
    }
    delUser()
  }

  const sortCaret = (order) => {
    if (!order) return <i className="fa fa-fw fa-sort text-muted"></i>
    if (order) return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
  }

  const actionBtns = [
    {
      name: 'Edit',
      icon: iconEdit,
      onClick: editUser,
    },
    {
      name: 'Delete',
      icon: iconDelete,
      onClick: deleteUser,
    },
  ]

  const ListButtons = ({data}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const buttons = actionBtns.map(button => (
      <div key={button.name} className="sc-btn-action--layout">
        <Button
          id={button.name === 'Delete' ? `userDeletingButton${data.index}` : null}
          className={`sc-btn-action sc-btn-action--${button.name} px-1`}
          color="link"
          onClick={button.name === 'Edit' ? (e) => button.onClick(e, data) : toggle}
        >
          <span className="sc-btn-action__icon icon-loading bg-transparent d-none">
            <i className="fa fa-refresh fa-spin"></i>
          </span>
          <span className="sc-btn-action__icon rounded-circle">
            <img className="sc-btn-action__img" src={button.icon} />
          </span>
          {button.name}
        </Button>
        {button.name === 'Delete' ? (
          <Modal isOpen={modal} toggle={toggle} className="modal-outline-danger">
            <ModalHeader tag="h6" toggle={toggle}>
              <span className="text-danger">Remove user</span>
            </ModalHeader>
            <ModalBody className="sc-text-content">
              Are you sure you want to delete user <strong>{ data.name }</strong> with email <strong>{ data.email }</strong>?
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="text-danger" onClick={toggle}>
                Close
              </Button>
              <Button
                color="danger"
                onClick={() => {
                  button.onClick(`userDeletingButton${data.index}`, data)
                  setModal(!modal)
                }}
              >
                Remove
              </Button>
            </ModalFooter>
          </Modal>
        ) : null}
      </div>
    ))
    return (
      <>
        {buttons}
      </>
    )
  }

  ListButtons.propTypes = {
    data: PropTypes.object,
  }

  const actionFormater = (rowContent, row) => {
    return (
      <div className="sc-btn-action-wrapper d-flex flex-wrap align-items-center justify-content-between">
        <ListButtons data={row}/>
      </div>
    )
  }

  const columns = [
    {
      dataField: 'id',
      hidden: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'firstName',
      text: 'First Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'lastName',
      text: 'Last Name',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'userType',
      text: 'User Type',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'lockedOut',
      text: 'Locked Out',
      sort: true,
      sortCaret,
    },
    {
      dataField: 'df1',
      classes: 'sc-btn-action-wrapper',
      isDummyField: true,
      text: '',
      formatter: actionFormater
    },
  ]

  const noDataIndication = () => 
    isLoading ? (
      <div className="d-flex justify-content-center">
        <MoonLoader size={24} color={'#de8b6d'} loading={isLoading} />
      </div>
    ) : (
      <p className="text-center">No users found!</p>
    )
  
  return (
    <ToolkitProvider keyField="id" data={data} columns={columns} search>
      {(props) => (
        <>
          <div className="search-wrapper">
            <div>
              <CustomSearch {...props.searchProps}/>
            </div>
          </div>
          <Row className="sc-card__full-row mt-3">
            <Col sm={12} className="p-0">
              <div className="sc-table-responsive">
                <BootstrapTable
                  keyField="id"
                  classes="sc-table"
                  bordered={ false }
                  noDataIndication={noDataIndication}
                  striped
                  hover
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            </Col>
          </Row>
        </>
      )}
    </ToolkitProvider>
  )
}

UsersTable.propTypes = {
  user: PropTypes.object,
  process: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user,
  process: state.process,
})
const mapDispatchToProps = {setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
