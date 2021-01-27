import React, { Component } from "react";
import axios from "axios";
import NavbarComponent from "./component/Navbar";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";
// import TableComponent from "./component/TableComponent";
import Table from "./component/Table";

export default class App extends Component {
  state = {
    dataCovid: [],
    covidData: [],
  };

  async componentDidMount() {
    await axios
      .get(`https://api.covid19api.com/total/country/indonesia`)
      .then((response) =>
        this.setState({
          dataCovid: response.data[361],
          covidData: response.data,
        })
      );

    console.log(this.state);
  }
  render() {
    // const loopingData = this.state.covidData.map((covid, index) => {
    //   return <TableComponent data={covid} key={[index]} />;
    // });
    return (
      <div>
        <NavbarComponent />
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            <LeftSide data={this.state.dataCovid} />
            <RightSide data={this.state.dataCovid} />
          </div>

          <div className="row" style={{marginTop: '20px'}}>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}
