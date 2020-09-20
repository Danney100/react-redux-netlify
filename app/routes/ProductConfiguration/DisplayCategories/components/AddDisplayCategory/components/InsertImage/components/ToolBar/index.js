import React, {useState} from 'react'
import {DropdownMenu, Dropdown, DropdownToggle} from 'reactstrap'
import iconFolder from 'images/commonIcons/folder.svg'
import iconRedTrash from 'images/commonIcons/red_trash.svg'

const ToolBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="d-flex my-3 mx-0 row">
      <div className="file btn upload-file pt-2">
        <span>Upload</span>
        <input type="file" name="file" />
      </div>
      <div className="ml-2 ml-md-3 pt-2">
        <img src={iconFolder} />
        <img className="ml-2 ml-md-3" src={iconRedTrash} />
      </div>
      <div className="ml-auto pt-2">
        <Dropdown isOpen={isOpen} toggle={toggleDropdown}>
          <DropdownToggle
            caret
            tag="span"
            data-toggle="dropdown"
            aria-expanded={isOpen}
            className="arrange-by">
            <span className="mr-2">Arrange By</span>
          </DropdownToggle>
          <DropdownMenu className="border-0 p-3" right>
            <div>Name</div>
            <div>Size</div>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}

export default ToolBar
