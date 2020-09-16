import React, { Component , useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'
import '../style.css'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L, { marker } from 'leaflet'
import {useHistory} from 'react-router-dom'


//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });}



const AddRestaurant = (props) => {
    const state = {
        //marker: [],
        //markers: [],
        lat: 52.2297,
        lng: 21.0122,
        zoom: 6
      }
        const {addRestaurantToUI} = useContext(RestaurantContext)
          
        const [name, setName] = useState("")
        const [location, setLocation] = useState("")
        const [description, setDescription] = useState("")
        const position = [state.lat, state.lng];
        //const [latlng, setLatlng] = useState([])
        let [marker, setMarker] = useState([])
        let history = useHistory();
        const handleSubmit = async (e) =>{
            e.preventDefault()

            console.log(marker[0])
            try{
                const response = await RestaurantFinder.post('/', {
                    name: name,
                    location: location,
                    description: description,
                    //added marker (latlng)
                    marker: marker[0]
                })
              
                
                console.log(response)
                addRestaurantToUI(response.data.restaurant)
                history.push("/")
            }catch(err){

            }
        }
        //from leafletmapaddmarker
        
        const addMarker = (e) => {    
             
            let latlng = [e.latlng]
            setMarker(latlng)
            console.log(marker)
          }
    return(
        
        <div className="mb-4 container">
        
            <form action="">
            <div className="form-row">
                <div className="col">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        
                </div>
                <div className="col">
                    <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location"/>
                </div>
                <div className="col">
                <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" placeholder="Description"/>
                </div>
                <div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary" >Add</button>
                </div>
                </div>
                </form>
                <br/>
        
                <div style={{width:"100%", height:"100%"}}className="leaflet">
                <Map center={position} zoom={state.zoom}
      onclick={addMarker}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      
        {marker.map((position) => 
         
          <Marker key={`marker-${position}`} position={position}>
          <Popup>
            <span>Popup</span>
          </Popup>
          </Marker>
        )}
        </Map> 
                
                </div>
                
            
            
        </div>
        )
    
}

export default AddRestaurant