import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'reactstrap'
import {Media} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import ResultTable from './ResultTable'
import Pagination from './Pagination'

const useStyles = makeStyles({
  media: {
    backgroundColor: '#ccf2ff',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  alertMedia: {
    backgroundColor: '#ffe6e6',
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
  },
  demos: {
    margin: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#1EB7FF',
    borderRadius: 6,
  },
  alertDemos: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#e94b35',
    borderRadius: 6,
  },
})

export const SearchResult = () => {
  const classes = useStyles()

  return (
    <div>
      <ListGroup>
        <ListGroupItem className={classes.demos}>
          <Media>
            <Media>
              <div className={classes.media}>
                <i className="fa fas fa-check text-primary"></i>
              </div>
            </Media>
            <Media className="ml-3">
              <span className="text-dark">
                The search feature allows users to search based on various fields that are
                associated with chosen center. This search feature allows users to run generic
                searches or if desired they can build complex queries with dependent and smart
                operators.
                <p>
                  Feature Guide Link <i className="fa fas fa-long-arrow-right"></i>
                </p>
              </span>
            </Media>
          </Media>
        </ListGroupItem>
        <Card className={classes.alertDemos}>
          <Media>
            <Media>
              <div className={classes.alertMedia}>
                <i className="fa fas fa-exclamation text-danger"></i>
              </div>
            </Media>
            <Media className="ml-3 d-flex">
              <span className="text-dark">
                The search results have been limited. There may be additional records that meet the
                search criteria. Please narrow your search criteria.
              </span>
            </Media>
          </Media>
        </Card>
        <ResultTable />
        <Pagination />
      </ListGroup>
    </div>
  )
}

export default SearchResult
