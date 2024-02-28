import React, { useTransition, useState, useEffect } from "react";
import List from "./List.json";
import { CustomerList } from "./CustomerList";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [noPerPage, setNoPerPage] = useState(5);

  const lastIndex = currentPage * noPerPage;
  const firstIndex = lastIndex - noPerPage;
  const pageArr = List.slice(firstIndex, lastIndex);

  const [customerList, setCustomerList] = useState(pageArr);

  useEffect(() => {
    filterList();
  }, [searchTerm]);

  useEffect(() => {
    setCustomerList(pageArr);
  }, [currentPage, noPerPage]);

  const filterList = () => {
    let filtered = List;
    filtered = customerList.filter((item) => {
      return (
        // item.age === Number(searchTerm) ||
        item.age.toString().includes(searchTerm) ||
        item.name
          ?.toLocaleLowerCase()
          .includes(searchTerm?.toLocaleLowerCase()) ||
        item.location
          ?.toLocaleLowerCase()
          .includes(searchTerm?.toLocaleLowerCase())
      );
    });

    if (searchTerm?.length >= 1) {
      setCustomerList(filtered);
    } else {
      setCustomerList(pageArr);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <form className="">
          <input
            type="text"
            className="form-control"
            autoFocus
            style={{
              borderRadius: "25px",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </form>
      </div>
      <div style={{ padding: "5px" }}>
      
        <CustomerList
          customerList={customerList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageLength={pageArr.length}
          noPerPage={noPerPage}
          setNoPerPage={setNoPerPage}
          setCustomerList={setCustomerList}
          pageArr={pageArr}
        />
      </div>
    </div>
  );
};
