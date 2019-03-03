import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  componentDidMount() {
    window.executeHome();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row pt4">
          <div className="col">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "300%"
              }}
            >
              <u>RWHOptimizer</u>
            </h1>
          </div>
        </div>
        <div
          style={{
            marginLeft: "220px",
            marginTop: "60px",
            overflowX: "hidden"
          }}
          className="row"
        >
          <div className="col-6 pt4">
            <h2 style={{ fontFamily: "Montserrat" }}>
              <u>Build new model</u>
            </h2>
            <h6
              style={{ fontFamily: "Montserrat", display: "inline-block" }}
              className="pt4 pl6 pr2"
            >
              Select new file:
            </h6>
            <input type="file" name="file" id="" />
            <h5
              style={{ fontFamily: "Montserrat", textAlign: "center" }}
              className="pt5 pr2"
            >
              <u>Model Summary:</u>
            </h5>
            <h6
              style={{ fontFamily: "Montserrat", textAlign: "center" }}
              className="pt4 pr2"
            >
              City : New Delhi
            </h6>
            <h6
              style={{ fontFamily: "Montserrat", textAlign: "center" }}
              className="pt4 pr2"
            >
              Active Nodes : 6
            </h6>
            <h5
              style={{ fontFamily: "Montserrat", textAlign: "center" }}
              className="pt5 pr2"
            >
              <u>Analysis:</u>
            </h5>
            <h6
              style={{ fontFamily: "Montserrat", textAlign: "center" }}
              className="pt4 pr2"
            >
              No of tanks : 6
            </h6>
            <h6
              style={{ fontFamily: "Montserrat", textAlign: "center" }}
              className="pt4 pr2"
            />
          </div>
          <div
            className="col-6"
            style={{
              paddingRight: "10%",
              marginTop: "3%"
            }}
          >
            <canvas id="myChart" width="500" height="400" />
          </div>
        </div>
      </div>
    );
  }
}
