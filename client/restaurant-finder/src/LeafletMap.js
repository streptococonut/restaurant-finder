import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });}

class LeafletMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 52.2297,
      lng: 21.0122,
      zoomBig: 13,
      zoomSmall: 5
    }
  }

  render() {
    const initPosition = [this.state.lat, this.state.lng];
    return (
      
      <Map center={this.props.position ? [this.props.position.lat, this.props.position.lng] : initPosition} zoom={this.props.position ? this.state.zoomBig : this.state.zoomSmall}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        

        {this.props.position &&
        <Marker position={ [this.props.position.lat, this.props.position.lng]}>
        <Popup>
        <span>Popup</span>
        </Popup>
        </Marker>}

          
        
 
</Map>
    );
  }
}
  
//key={`marker-${this.props.position}`}

export default LeafletMap