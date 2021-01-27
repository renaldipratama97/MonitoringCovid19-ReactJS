import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = (data, index) => {
  return (
    <div className="col-md-12">
      <Table striped bordered hover>
        <thead className = "text-center" style={{ textAlign: "center" }}>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          <tr key={index}>
            <td> {data.data.Country} </td>
            <td> {data.data.Confirmed} </td>
            <td> {data.data.Recovered} </td>
            <td> {data.data.Deaths} </td>
            <td> {data.data.Active} </td>
            <td> {data.data.Date} </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
