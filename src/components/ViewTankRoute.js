/*global google*/
import React, { Component } from "react";
import "./Advanced.css";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
let waypoints;
let data = [
  {
    id: 1,
    houses: [
      {
        lat: 28.4595,
        lng: 77.0266
      },
      {
        lat: 28.5355,
        lng: 77.391
      }
    ]
  },
  {
    id: 2,
    houses: [
      {
        lat: 28.7041,
        lng: 77.1025
      },
      {
        lat: 28.5355,
        lng: 77.391
      }
    ]
  }
];
export default class OptimalMap extends Component {
  state = {
    directions: null,
    startLat: 28.7041,
    startLng: 77.1025,
    endLat: 30.7333,
    endLng: 76.7794,
    tankId: 1
  };
  updateMap = waypoints => {
    let latStart = Number(this.state.startLat);
    let lngStart = Number(this.state.startLng);

    let latEnd = Number(this.state.endLat);
    let lngEnd = Number(this.state.endLng);

    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: latStart, lng: lngStart };
    const destination = { lat: latEnd, lng: lngEnd };
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING,
        waypoints: waypoints
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };
  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: this.state.startLat, lng: this.state.startLng };
    const destination = { lat: this.state.endLat, lng: this.state.endLng };
    waypoints = [
      // {
      //   location: new google.maps.LatLng(30.3782, 76.7767)
      // },
      // {
      //   location: new google.maps.LatLng(29.0588, 76.0856)
      // }
    ];
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING,
        waypoints: waypoints
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  saveId = e => {
    this.setState({ tankId: e.target.value });
  };

  handleBtnClick = () => {
    let id = Number(this.state.tankId);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        let startLat = data[i].houses[0].lat;
        let startLng = data[i].houses[0].lng;
        let endLat = data[i].houses[1].lat;
        let endLng = data[i].houses[1].lng;
        this.setState(
          {
            startLat,
            startLng,
            endLat,
            endLng
          },
          () => {
            this.updateMap(waypoints);
          }
        );
      }
    }
  };

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
        defaultZoom={8}
        onClick={this.handleClick}
      >
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));

    return (
      <div>
        <div
          className="row mt4 mb4"
          style={{ textAlign: "center", paddingLeft: "5%" }}
        >
          <div className="col-3 pl4 offset-3" style={{ textAlign: "center" }}>
            <h3 style={{ display: "inline-block", fontFamily: "monospace" }}>
              Tank ID:
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
