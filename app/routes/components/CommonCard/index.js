import React from 'react'
import {Card, Form, FormGroup, Label} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import BootstrapTable from 'react-bootstrap-table-next'
import iconJoin from 'images/commonIcons/Join.svg'
import iconEdit from 'images/commonIcons/pencil.svg'

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
  subtitle: {
    fontFamily: 'DINCondensed-Bold',
    fontSize: 22,
    color: '#403839',
    marginTop: 25,
    marginLeft: 26,
  },
  border: {
    borderRadius: 4,
    marginRight: 26,
    marginLeft: 26,
  },
})

const actionFormater = () => (
  <Form>
    <FormGroup check inline>
      <Label check >
        <img src={iconJoin} /> Details and Join
      </Label>
    </FormGroup>
    <FormGroup check inline>
      <Label check>
        <img src={iconEdit} /> Edit
      </Label>
    </FormGroup>
  </Form>
)
const columns = [
  {
    dataField: 'Type',
    text: 'Type',
    sort: true,
  },
  {
    dataField: 'Enabled',
    text: 'Enabled',
    sort: true,
  },
  {
    dataField: 'Date',
    text: 'Date',
    sort: true,
  },
  {
    dataField: 'Recipient',
    text: 'Recipient',
    sort: true,
  },
  {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
]

const CommonCard = (props) => {
  const {title, data} = props
  const classes = useStyles()

  return (
    <div>
      <Card lg={12} md={12} sm={12} xs={12} className="mb-4 p-1">
        <div tag="h5">
          <p className={classes.subtitle}>{title}</p>
          <hr className={classes.border} />
          <div className="ml-2 mr-2">
            <BootstrapTable
              keyField="id"
              columns={columns}
              data={data}
              bordered={false}
              striped
              wrapperClasses="table-responsive"
              noDataIndication={'no results found'}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

CommonCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
}

export default CommonCard
