import React from 'react'
import {Table, Button} from 'reactstrap'

const PriceTable = () => {
  return (
    <div>
      <div className="border mt-3 mb-3">
        <Table bordered responsive>
          <thead>
            <tr>
              <th>
                <span>Price</span>
              </th>
              <th>
                <span>Base Price</span>
              </th>
              <th>
                <span>Tax Amount</span>
              </th>
              <th>
                <span>Qualifying Volume</span>
              </th>
              <th>
                <span>Commission Volume</span>
              </th>
              <th>
                <span>Retail Commission Volume</span>
              </th>
            </tr>
            <tr>
              <th>
                <span>USD</span>
              </th>
              <th>
                <span>
                  <input
                    type="number"
                    className="d-flex justify cotent-start"
                    placeholder="0.00"></input>
                </span>
              </th>
              <th>
                <span>
                  <input
                    type="number"
                    className="d-flex justify cotent-start"
                    placeholder="0.00"></input>
                </span>
              </th>
              <th>
                <span>
                  <input
                    type="number"
                    className="d-flex justify cotent-start"
                    placeholder="0.00"></input>
                </span>
              </th>
              <th>
                <span>
                  <input
                    type="number"
                    className="d-flex justify cotent-start"
                    placeholder="0.00"></input>
                </span>
              </th>
              <th>
                <span>
                  <input
                    type="number"
                    className="d-flex justify cotent-start"
                    placeholder="0.00"></input>
                </span>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
      <div className="text-left d-flex justify-content-between">
        <Button color="danger">
          <i className="fa fa-times mr-2"></i>
          Cancel
        </Button>
        <Button color="info">
          <i className="fa fas fa-check-circle mr-1"></i>
          Save
        </Button>
      </div>
    </div>
  )
}

export default PriceTable
