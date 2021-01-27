import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import Pagination from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

const Table = () => {
  const [covid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataCovid = async () => {
    try {
      const data = await axios.get(
        `https://api.covid19api.com/total/country/indonesia`
      );
      console.log(data);
      setDataCovid(data.data)
      setLoading(true)
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    { dataField: "Country", text: "Country" },
    { dataField: "Confirmed", text: "Confirmed" },
    { dataField: "Recovered", text: "Recovered" },
    { dataField: "Deaths", text: "Deaths" },
    { dataField: "Active", text: "Active" },
    { dataField: "Date", text: "Date" },
  ];

  useEffect(() => {
    getDataCovid();
  }, []);

  return (
  <div className = "col-md-12 text-center">
      { loading ? (
        <BootstrapTable
          keyField = 'name'
          data = {covid}
          columns = {columns}
          pagination = {Pagination()}
        />
      ) : (
          <ReactBootstrap.Spinner animation="border" />
      )}
  </div>
)};

export default Table;