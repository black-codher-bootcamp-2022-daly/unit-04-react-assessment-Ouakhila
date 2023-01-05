import React from "react";

const Paginate = ({ postsPerPage, totalPosts, nextPage, previousPage }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <div className="pag-container">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          Previous
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => Paginate(number)}
            className="page-number"
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-Number">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
