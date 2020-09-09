import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map as LeafletMap , TileLayer, Marker, Popup } from 'react-leaflet'


class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}



class App extends React.Component {
    render(){
        return(
            <div>Hello</div>
        )
    }
}

export default SimpleExample
export { App }
