import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import PropTypes from 'prop-types'

import iconTrash from 'images/commonIcons/trash.svg'
import iconEdit from 'images/commonIcons/pencil.svg'
import {Row, Col} from 'reactstrap'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '95%',
    color: '#403839',
    '& .MuiTypography-body1': {
      fontFamily: 'SFUIText-Semibold',
      fontSize: '14px',
      height: '45px',
      lineHeight: 3.5,
      fontWeight: 600,
      background: 'none ',
      color: '#403839',
      borderBottom: 'solid 1px #ebe9e8',
      '& .action': {
        display: 'none',
        color: '#403839',
      },
    },
    '& .MuiTypography-body1:hover': {
      background: 'none ',
      '& .action': {
        display: 'block',
      },
    },
    '& .MuiCollapse-wrapperInner': {
      marginLeft: '20px',
    },
    '& .Mui-selected > .MuiTreeItem-content': {
      color: '#de8b6d',
      '& .MuiTypography-body1': {
        background: 'none',
        color: '#de8b6d',
        '& .action': {
          color: '#403839',
        },
      },
      '& .MuiTypography-body1:hover': {
        background: 'none',
        color: '#de8b6d',
      },
    },
  },
})

const DataTreeView = ({data, editRow, deleteRow}) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState([])
  const [selected, setSelected] = useState([])

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds)
  }

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds)
  }

  const customTreeItemLabel = (row) => {
    return (
      <Row className="pr-4 pr-lg-0">
        <Col>{row.name}</Col>
        <Col sm={2} xs={1} lg={2} className="action my-auto">
          <Row>
            <img src={iconEdit} className="mr-2" onClick={()=>editRow(row)} />
            <span className="d-none d-lg-block">Edit</span>
          </Row>
        </Col>
        <Col sm={3} xs={1} lg={3} className="action my-auto">
          <Row>
            <img src={iconTrash} className="mr-2" onClick={()=>deleteRow(row)} />
            <span className="d-none d-lg-block">Delete</span>
          </Row>
        </Col>
      </Row>
    )
  }

  const renderTree = (nodes) => (
    <TreeItem key={nodes.category_id} nodeId={nodes.category_id} label={customTreeItemLabel(nodes.category_json)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  )

  return (
    <TreeView
      className={classes.root}
      defaultExpandIcon={<i className="fa fa-caret-right" aria-hidden="true" />}
      defaultExpanded={['1']}
      defaultCollapseIcon={<i className="fa fa-caret-down" aria-hidden="true" />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      multiSelect
      onNodeSelect={handleSelect}>
      {
        data.map(row => ( 
          renderTree(row)
        ))
      }
    </TreeView>
  )
}

DataTreeView.propTypes = {
  data: PropTypes.array,
  editRow: PropTypes.func,
  deleteRow: PropTypes.func,
}

export default DataTreeView
