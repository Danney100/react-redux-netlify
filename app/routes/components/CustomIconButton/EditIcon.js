import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import iconEdit from 'images/commonIcons/edit.svg'

const useStyles = makeStyles({
  editIcon: {
    height: 10.9,
    width: 10,
    marginLeft: 7,
  },
  bkgrdImgSize: {
    width: 25,
    height: 27.2,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const EditIcon = () => {
  const classes = useStyles()

  return (
    <span>
      <div className={classes.bkgrdImgSize}>
        <img src={iconEdit} className={classes.editIcon} />
      </div>
    </span>
  )
}

export default EditIcon
