import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss"


const Pagination = (props) => {
    const total = props.pageCount / 5
    const integer = Math.ceil(total)
    
  return (
    <>
      <ReactPaginate
        previousLabel={"previouse"}
        nextLabel={"next"}
        pageCount={integer}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={props.handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"page-item active"}
        activeLinkClassName={"page-link active"}
        className="pagination"
      />
    </>
  );
};

export default Pagination;
