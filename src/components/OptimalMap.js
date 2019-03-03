/*global google*/
import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

let locations = [];

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 28.7041, lng: 77.1025 }}>
      {locations.map(latlng => {
        return (
          <Marker
            position={{ lat: latlng.lat, lng: latlng.lng }}
            // icon={{
            //   url: "https://i.ibb.co/9gTj4cL/icons8-piping-16.png",
            //   // size: { width: 60, height: 50 },
            //   anchor: { x: 15, y: 50 },
            //   scaledSize: { width: 40, height: 40 }
            // }}
          />
        );
      })}
    </GoogleMap>
  ))
);
export default class OptimalMap extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
  }
  componentDidMount() {
    fetch("https://rwholt-api.herokuapp.com/locations")
      .then(res => res.json())
      .then(data => {
        locations = data.slice(0, 100);
        console.log(locations);
        this.setState({
          locations: locations
        });
        //console.log(locations);
        //data_recieved = true;
      });
  }
  render() {
    if (!this.state.locations) return null;
    let locations = this.state.locations;
    return (
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: "980px",
              marginLeft: 0,
              paddingLeft: 0,
              marginRight: "10px"
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
