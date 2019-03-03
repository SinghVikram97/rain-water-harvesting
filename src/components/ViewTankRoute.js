/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Polyline, Marker } from "react-google-maps";
let data = [
  {
    id: 1,
    lat: 28.7208,
    lng: 77.1072,
    houses: [
      {
        lat: 28.4595,
        lng: 77.0266
      },
      {
        lat: 28.5355,
        lng: 77.391
      },
      {
        lat: 28.4089,
        lng: 77.3178
      },
      {
        lat: 28.504,
        lng: 77.3018
      }
    ]
  },
  {
    id: 2,
    lat: 28.4595,
    lng: 77.0266,
    houses: [
      {
        lat: 28.7041,
        lng: 77.1025
      },
      {
        lat: 28.5355,
        lng: 77.391
      },
      {
        lat: 28.7495,
        lng: 77.0565
      },
      {
        lat: 28.5503,
        lng: 77.2502
      },
      {
        lat: 28.5428,
        lng: 77.2395
      }
    ]
  }
];
export default class OptimalMap extends Component {
  state = {
    directions: null,
    tankId: 1,
    markerLat: 28.7208,
    markerLng: 77.1072,
    networks: [
      [{ lat: 28.7208, lng: 77.1072 }, { lat: 28.5677, lng: 77.2433 }],
      [
        {
          lat: 28.7208,
          lng: 77.1072
        },
        {
          lat: 28.5355,
          lng: 77.391
        }
      ],
      [
        {
          lat: 28.7208,
          lng: 77.1072
        },
        {
          lat: 28.8955,
          lng: 76.6066
        }
      ]
    ]
  };
  saveId = e => {
    this.setState({ tankId: e.target.value });
  };
  handleBtnClick = () => {
    let dummyNetwork = [];
    let id = Number(this.state.tankId);
    let index;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        index = i;
        break;
      }
    }
    let housesArray = data[index].houses;

    for (let i = 0; i < housesArray.length; i++) {
      dummyNetwork.push([
        {
          lat: data[index].lat,
          lng: data[index].lng
        },
        {
          lat: housesArray[i].lat,
          lng: housesArray[i].lng
        }
      ]);
    }

    console.log(dummyNetwork);
    this.setState({
      networks: dummyNetwork
    });

    this.setState({
      markerLat: data[index].lat
    });

    this.setState({
      markerLng: data[index].lng
    });
  };
  render() {
    const networks = this.state.networks;

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
        defaultZoom={12}
        onClick={this.handleClick}
      >
        <Marker
          position={{ lat: this.state.markerLat, lng: this.state.markerLng }}
        />
        {networks.map(pathCoordinate => {
          return (
            <Polyline
              path={pathCoordinate}
              geodesic={true}
              options={{
                strokeColor: "red",
                strokeOpacity: 0.75,
                strokeWeight: 5
              }}
            />
          );
        })}
      </GoogleMap>
    ));

    return (
      <div>
        <div
          className="row mt4 mb4"
          style={{ textAlign: "center", paddingLeft: "5%" }}
        >
          <div className="col-3 pl4 offset-3" style={{ textAlign: "center" }}>
            <h3
              style={{ display: "inline-block", fontFamily: "monospace" }}
              className="mr3"
            >
              Start:
            </h3>
            <input type="text" onChange={this.saveId} />
          </div>
          <div className="col-3">
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.handleBtnClick}
            >
              Submit
            </button>
          </div>
        </div>
        <GoogleMapExample
          containerElement={
            <div
              style={{ height: `980px`, width: "100%", marginRight: "10px" }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
