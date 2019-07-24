import React from 'react';

const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <nav className="page-numbers">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className={"page-item"} onClick={() => paginate(number)}>
              <a className={number === currentPage ? "page-link current" : "page-link"}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;