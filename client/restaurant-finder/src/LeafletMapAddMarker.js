import React, { Component, useContext } from 'react'
import ReactDOM from 'react-dom'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L, { marker } from 'leaflet'



//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });}

class LeafletMapAddMarker extends React.Component {
  
  constructor(props) {
    super()
    
    this.state = {
      //marker: [],
      //markers: [],
      lat: 52.2297,
      lng: 21.0122,
      zoom: 13
    }

  }

  //addMarker = (e) => {
    //let { marker } = this.state.marker
    //marker = [e.latlng]
    //this.setState({marker:marker})}

  render() {
    const position = [this.state.lat, this.state.lng];
    
    return (
      
      <Map center={position} zoom={this.state.zoom}
      onclick={this.props.addMarker}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      
        {this.props.marker.map((position) => 
         
          <Marker key={`marker-${position}`} position={position}>
          <Popup>
            <span>Popup</span>
          </Popup>
          </Marker>
        )}
        </Map>   
    );
  }
}



export default LeafletMapAddMarker