import React from 'react'
import { numbersPage } from '../util/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({ setPage, Location, RESIDENTS_PERPAGE }) => {
  return (
    <ul className='pagination'>
      {
        numbersPage(Location, RESIDENTS_PERPAGE).map(numberPage => <li className='pagination__page' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
      }
    </ul>
  )
}

export default Pagination

