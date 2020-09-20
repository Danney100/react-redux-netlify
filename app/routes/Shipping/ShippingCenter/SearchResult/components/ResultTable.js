import React from 'react'
import {Row, Table, Button, Col} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    backgroundColor: '#e6e0dd !important',
    borderColor: '#e6e0dd !important',
    borderRadius: 50,
  },
})

export const SearchResult = () => {
  const classes = useStyles()

  return (
    <Row className="mx-3">
      <Col>
      </Col>
      <Table striped borderless responsive>
        <thead>
          <tr>
            <th className="text-dark">Run #</th>
            <th className="text-dark">Run date</th>
            <th className="text-dark">Run Status</th>
            <th className="text-dark">Warehouse</th>
            <th className="text-dark">Created By</th>
            <th className="text-dark">Order Count</th>
            <th className="text-dark">Total Order Value</th>
            <th className="text-dark">Country</th>
            <th className="text-dark">Consolidation</th>
            <th className="text-dark">First Print Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1514</th>
            <td>6/7/2020 3:53 AM</td>
            <td>Pending</td>
            <td>Farmers Branch</td>
            <td>Fatihs</td>
            <td>0</td>
            <td>$0.00</td>
            <td>All</td>
            <td>All</td>
            <td>None</td>
            <td>
              <Button className={classes.button}>
                <i className="fa fas fa-share text-dark fa-xs"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  )
}

export default SearchResult
