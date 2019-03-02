import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Grievance from "./components/Grievance";
import OptimalMap from "./components/OptimalMap";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playground from "./components/Playground";
import { withScriptjs } from "react-google-maps";
import Advanced from "./components/Advanced";
class App extends Component {
  render() {
    const MapLoader = withScriptjs(Playground);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/grievance" component={Grievance} />
            <Route exact path="/optimalmap" component={OptimalMap} />
            <Route
              exact
              path="/playground"
              component={() => (
                <MapLoader
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
                  loadingElement={<div style={{ height: `100%` }} />}
                />
              )}
            />
            <Route
              exact
              path="/advanced"
              component={() => (
                <MapLoader
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
                  loadingElement={<div style={{ height: `100%` }} />}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
