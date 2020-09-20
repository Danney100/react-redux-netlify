import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'
import {Checkbox} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import {useHistory} from 'react-router'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
  },
  checkedIcon: {
    backgroundColor: '#de8b6d',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
})

const BannerTable = () => {
  const classes = useStyles()
  const history = useHistory()

  const routeChange = () => {
    history.push('/banner/display-banner-edit')
  }
  const actionFormater = () => (
    <>
      <div className={` d-flex flex-row`}>
        <div onClick={routeChange}>
          <img src={iconEdit} />
        </div>
        <div className="w-100 ml-2">Edit</div>
        <div className="ml-2">
          <img src={iconTrash} />
        </div>
        <div className="w-100 ml-2">Delete</div>
      </div>
    </>
  )

  const Enabled_value = (props) => (
    <div>
      <Checkbox
        defaultChecked
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        inputProps={{'aria-label': 'decorative checkbox'}}
        {...props}
      />
    </div>
  )

  const data = [
    {
      Id: '1',
      Title: 'Welcome to Scout & Celler',
      Location: 'Top',
      'Display Order': '0',
      Type: 'Image',
    },
    {
      Id: '2',
      Title: 'Scout Circle',
      Location: 'Top',
      'Display Order': '0',
      Type: 'Image',
    },
  ]

  const columns = [
    {
      dataField: 'Enabled',
      text: 'Enabled',
      isDummyField: true,
      formatter: Enabled_value,
    },
    {
      dataField: 'Title',
      text: 'Title',
      sort: true,
    },
    {
      dataField: 'Location',
      text: 'Location',
      sort: true,
    },
    {
      dataField: 'Display Order',
      text: 'Display Order',
      sort: true,
      classes: 'text-center',
    },
    {
      dataField: 'Type',
      text: 'Type',
      sort: true,
      classes: 'text-center',
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  return (
    <BootstrapTable
      keyField="Id"
      columns={columns}
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      noDataIndication={'no results found'}
    />
  )
}

export default BannerTable
