import React, { useEffect, useState, useTransition } from "react";
import { Table } from "./Table";
import { Pagination } from "./Pagination";
import { NoRecords } from "./NoRecords";

export const CustomerList = ({
  customerList,
  currentPage,
  setCurrentPage,
  lastIndex,
  noPerPage,
  pageLength,
  setNoPerPage,
  selectedPageCount,
  setCustomerList,
  pageArr,
}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {customerList.length === 0 ? (
        <>
          <button
            className="btn btn-outline-primary"
            style={{
              borderRadius: "20px",
            }}
            onClick={() => {
              console.log("Refresh....", pageArr);
              setCurrentPage(1);
            }}
          >
            Refresh
          </button>
          <NoRecords />
        </>
      ) : (
        <>
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            lastIndex={lastIndex}
            noPerPage={noPerPage}
            pageLength={pageLength}
            setNoPerPage={setNoPerPage}
          />
          <Table customerList={customerList} />
        </>
      )}
    </>
  );
};
