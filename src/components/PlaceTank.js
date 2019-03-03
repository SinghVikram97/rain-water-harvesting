import React from "react";
import { compose, withStateHandlers } from "recompose";
import {
  InfoWindow,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

let locations = [];
let tankId = 0;
// locations.push({
//   lat: 28.7041,
//   lng: 77.1025
// });

const Map = compose(
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null
    }),
    {
      onMapClick: ({ isMarkerShown }) => e => {
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();

        console.log(lat, lng);

        tankId++;

        locations.push({
          lat: lat,
          lng: lng,
          tankId: tankId
        });

        console.log(locations);

        return {
          markerPosition: e.latLng,
          isMarkerShown: true
        };
      }
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
    onClick={props.onMapClick}
  >
    {/* <Marker position={props.markerPosition} />
    <Marker position={{ lat: 28.7041, lng: 77.1025 }} /> */}
    {locations.map(latlng => {
      return <Marker position={{ lat: latlng.lat, lng: latlng.lng }} />;
    })}
  </GoogleMap>
));

export default class PlaceTank extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: `980px`, marginRight: "10px" }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
