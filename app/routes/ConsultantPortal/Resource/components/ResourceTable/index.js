import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'
import {useHistory} from 'react-router'

const ResourceTable = () => {
  const history = useHistory()

  const routeChange = () => {
    history.push('/consultant-portal/resource/display-resource-edit')
  }
  const actionFormater = () => (
    <>
      <div className={`d-flex flex-row`}>
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

  const data = [
    {
      Id: '1',
      'Display Order': 1,

      Name: 'Test Folder1',
      Description: 'Test Folder Description1',
      Type: 'Folder',
      'Last Modified': '6/5/2018',
    },
    {
      Id: '2',
      'Display Order': 2,
      Name: 'Test Folder2',
      Description: 'Test Folder Description2',
      Type: 'Folder',
      'Last Modified': '6/9/2018',
    },
    {
      Id: '3',
      'Display Order': 3,
      Name: 'Test Resource1',
      Description: 'Test Resource Description1',
      Type: 'Video Embed',
      'Last Modified': '6/11/2018',
    },
    {
      Id: '4',
      'Display Order': 4,
      Name: 'Test Resource2',
      Description: 'Test Resource Description2',
      Type: 'File - JPG',
      'Last Modified': '6/11/2018',
    },
    {
      Id: '5',
      'Display Order': 5,
      Name: 'Test Resource3',
      Description: 'Test Resource Description3',
      Type: 'File - PDF',
      'Last Modified': '6/15/2018',
    },
    {
      Id: '6',
      'Display Order': 6,
      Name: 'Test Folder3',
      Description: 'Test Folder Description3',
      Type: 'Folder',
      'Last Modified': '6/5/2018',
    },
    {
      Id: '7',
      'Display Order': 7,
      Name: 'Test Resource4',
      Description: 'Test Resource Description4',
      Type: 'Video Embed',
      'Last Modified': '6/5/2018',
    },
    {
      Id: '8',
      'Display Order': 8,
      Name: 'Test Resource5',
      Description: 'Test Resource Description5',
      Type: 'File - PDF',
      'Last Modified': '6/15/2018',
    },
    {
      Id: '9',
      'Display Order': 9,
      Name: 'Test Resource6',
      Description: 'Test Resource Description6',
      Type: 'Video Embed',
      'Last Modified': '6/14/2018',
    },
    {
      Id: '10',
      'Display Order': 10,
      Name: 'Test Resource7',
      Description: 'Test Resource Description7',
      Type: 'Video Embed',
      'Last Modified': '6/5/2018',
    },
    {
      Id: '11',
      'Display Order': 11,
      Name: 'Test Folder4',
      Description: 'Test Folder Description4',
      Type: 'Folder',
      'Last Modified': '6/15/2018',
    },
    {
      Id: '12',
      'Display Order': 12,
      Name: 'Test Resource8',
      Description: 'Test Resource Description8',
      Type: 'File - PDF',
      'Last Modified': '6/5/2018',
    },
  ]

  const columns = [
    {
      dataField: 'Display Order',
      text: 'Display Order',
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
      dataField: 'Last Modified',
      text: 'Last Modified',
      sort: true,
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
      noDataIndication={'no results found'}></BootstrapTable>
  )
}

export default ResourceTable
