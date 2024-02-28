import React from "react";

export const Pagination = ({
  setCurrentPage,
  currentPage,
  lastIndex,
  noPerPage,
  pageLength,
  setNoPerPage,
}) => {
  const pages = [2, 4, 6, 8, 10];

  return (
    <div
      className=""
      style={{
        marginTop: "10px",
      }}
    >
      <div className="" style={{ float: "right" }}>
        <span
          style={{
            border: "1px solid green",
            backgroundColor: "#f8f9fa",
            padding: "10px",
            borderRadius: "10px",
            lineHeight: "20px",
            margin: "2px",
          }}
        >
          <b className="text-success">Select Page Size:</b>
          <select
            disabled={noPerPage > pageLength}
            className="btn btn-outline-success mx-2"
            id=""
            onChange={(e) => {
              console.log(e.target.value);
              setNoPerPage(e.target.value);
            }}
            style={{ border: 0, outline: 0 }}
          >
            {pages.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </span>

        <span
          style={{
            border: "1px solid green",
            backgroundColor: "#f8f9fa",
            padding: "10px",
            borderRadius: "10px",
            margin: "2px",
          }}
        >
          <button
            className="btn btn-outline-success mx-2"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ border: 0, outline: 0 }}
          >
            Previous
          </button>
          <button
            className="btn btn-outline-success "
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={noPerPage > pageLength}
            style={{ border: 0, outline: 0 }}
          >
            Next
          </button>
        </span>
      </div>
    </div>
  );
};
