import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import AddRestaurant from './components/AddRestaurant';

//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });}

class LeafletMapAddMarker extends React.Component {
  constructor() {
    super()
    this.state = {
      marker: [],
      markers: [],
      lat: 52.2297,
      lng: 21.0122,
      zoom: 13
    }
  }

  addMarker = (e) => {
    let {marker} = this.state
    marker = [e.latlng]
    this.setState({marker})
    
  
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    
    return (
      <div>
      <Map center={position} zoom={this.state.zoom}
      onclick={this.addMarker}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      
      {this.state.marker.map((position) => 
         <div>
          <Marker key={`marker-${position}`} position={position}>
          <Popup>
            <span>Popup</span>
          </Popup>
          </Marker>
          
        </div>
        )}  


      </Map>
      
      
      </div>
    );
  }
}



export default LeafletMapAddMarker