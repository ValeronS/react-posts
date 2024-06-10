import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import cl from './Pagination.module.css'
const Pagination = ({ totalPages, page, newPage }) => {
  const pagination = usePagination(totalPages)
  const handlePageChange = (clickedPage) => {
    if (page !== clickedPage) newPage(clickedPage)
  }

  return (
    <div className={cl.BasePagination}>
      {pagination.map((p) => (
        <span
          key={p}
          className={[cl.PageNumber, page === p ? cl.CurrentPage : ''].join(
            ' ',
          )}
          onClick={() => handlePageChange(p)}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
