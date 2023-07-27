import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SortedTable = ({
  containerStyles = "",
  tableStyles = "",
  thStyles = "",
  colStyles = "",
  cols = [],
  currentItems = [],
  pageCount = 0,
  paginate = false,
  handlePageClick,
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const numberToMoney = (quantity = 0) => {
    return `$ ${Number(quantity)
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedData = [...currentItems].sort((a, b) => {
    if (sortColumn) {
      if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <div className={`w-full !overflow-y-auto ${containerStyles}`}>
        <table className={`w-full table-auto ${tableStyles}`}>
          <thead className={`bg-black ${thStyles}`}>
            <tr>
              {cols.length !== 0 &&
                cols.map((col, index) => (
                  <th
                    className={`text-left ${colStyles}`}
                    onClick={() => handleSort(col.identity)}
                  >
                    {col.columnName}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sortedData &&
              [...sortedData].map((row, index) => (
                <tr key={index}>
                  {cols.map((col) => (
                    <th key={col.identity} className="text-left py-3 mx-7">
                      {col.symbol === "USD"
                        ? numberToMoney(row[col.identity])
                        : col.symbol + row[col.identity]}
                    </th>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {paginate && (
        <div className="w-full pt-5">
          <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            nextClassName={"item next "}
            previousClassName={"item previous"}
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            disabledClassName={"disabled-page"}
            pageClassName={"item pagination-page "}
            nextLabel={
              <FaChevronRight style={{ color: "#000", fontSize: "20" }} />
            }
            previousLabel={
              <FaChevronLeft style={{ color: "#000", fontSize: "20" }} />
            }
          />
        </div>
      )}
    </div>
  );
};

export default SortedTable;
