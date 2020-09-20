import React from 'react'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'

const CreateButton = () => {
  const history = useHistory()

  const routeChange = () => {
    let path = '/product-center/product-create'
    history.push(path)
  }

  return (
    <div className=" d-flex  justify-content-end">
      <div className="text-left" style={{padding: '0.5rem 0rem'}}>
        <CommonButton title="Add New Product" buttonType="addItemButton" onClick={routeChange} />
      </div>
    </div>
  )
}

export default CreateButton
