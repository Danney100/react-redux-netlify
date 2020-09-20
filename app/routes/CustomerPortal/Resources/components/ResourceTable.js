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

const ResourceTable = () => {
  const classes = useStyles()
  const history = useHistory()

  const routeChange = () => {
    history.push('/customer-portal/resources/edit-resources')
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
      id: 1,
      DisplayOrder: '',
      Name: 'Test Folder1',
      Description: 'Test Folder Description1',
      Type: 'Folder',
      LastModified: '6/5/2018',
    },
    {
      id: 2,
      DisplayOrder: '',
      Name: 'Test Folder2',
      Description: 'Test Folder Description2',
      Type: 'Folder',
      LastModified: '6/2/2018',
    },
    {
      id: 3,
      DisplayOrder: '',
      Name: 'Test Folder3',
      Description: 'Test Folder Description3',
      Type: 'Video Embeded',
      LastModified: '6/7/2018',
    },
    {
      id: 4,
      DisplayOrder: '',
      Name: 'Test Folder4',
      Description: 'Test Folder Description4',
      Type: 'File - JPG',
      LastModified: '6/8/2018',
    },
    {
      id: 5,
      DisplayOrder: '',
      Name: 'Test Folder5',
      Description: 'Test Folder Description5',
      Type: 'Folder',
      LastModified: '6/9/2018',
    },
    {
      id: 6,
      DisplayOrder: '',
      Name: 'Test Folder6',
      Description: 'Test Folder Description6',
      Type: 'Video Embeded',
      LastModified: '6/10/2018',
    },
    {
      id: 7,
      DisplayOrder: '',
      Name: 'Test Folder7',
      Description: 'Test Folder Description7',
      Type: 'File - JPG',
      LastModified: '6/11/2018',
    },
    {
      id: 8,
      DisplayOrder: '',
      Name: 'Test Folder8',
      Description: 'Test Folder Description8',
      Type: 'Video Embeded',
      LastModified: '6/12/2018',
    },
  ]

  const columns = [
    {
      dataField: 'DisplayOrder',
      text: 'Display Order',
      isDummyField: true,
      formatter: Enabled_value,
    },
    {
      dataField: 'Name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'Description',
      text: 'Description',
      sort: true,
    },
    {
      dataField: 'Type',
      text: 'Type',
      sort: true,
    },
    {
      dataField: 'LastModified',
      text: 'Last Modified',
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  return (
    <BootstrapTable
      keyField="id"
      columns={columns}
      data={data}
      bordered={false}
      striped
      wrapperClasses="table-responsive"
      noDataIndication={'no results found'}
    />
  )
}

export default ResourceTable
