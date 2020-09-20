import React, { useContext } from 'react'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { RestaurantContext } from './RestaurantContext'

//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("../node_modules/leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("../node_modules/leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("../node_modules/leaflet/dist/images/marker-shadow.png")
  });}

const LeafletMap = (props) =>  {
  
  
    const state = {
      lat: 52.2297,
      lng: 21.0122,
      zoomBig: 13,
      zoomSmall: 5
    }
  

  
    const initPosition = [state.lat, state.lng];
    const { restaurant, setRestaurant } = useContext(RestaurantContext)
    return (
      
      <Map center={props.position ? [props.position.lat, props.position.lng] : initPosition} zoom={props.position ? state.zoomBig : state.zoomSmall}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        
        {props.positions &&
                restaurant.map(el => (
                <Marker key={`marker-${el.name}`} position={[el.marker.lat, el.marker.lng]}>
                <Popup>
                <span>{`${el.name}, ${el.location}`}</span>
                </Popup>
                </Marker>
                )) 
            }

        {props.position &&
        <Marker key={`marker-${props.name}`} position={ [props.position.lat, props.position.lng]}>
        <Popup>
        <span>{`${props.name}, ${props.location}`}</span>
        
        </Popup>
        </Marker>}    
 
</Map>
    );
  
}

export default LeafletMap