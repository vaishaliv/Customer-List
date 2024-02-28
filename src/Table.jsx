import React from "react";

export const Table = ({ customerList }) => {
  return (
    <div className="card my-5">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
