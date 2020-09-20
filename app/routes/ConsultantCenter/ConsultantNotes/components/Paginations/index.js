import React from 'react'
import {PaginationItem, PaginationLink, Pagination} from 'reactstrap'

const Paginations = () => {
  return (
    <div>
      <Pagination
        size="md"
        className="pagination justify-content-end"
        aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink href="#">First</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">Prev</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">Next</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">Last</PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  )
}

export default Paginations
