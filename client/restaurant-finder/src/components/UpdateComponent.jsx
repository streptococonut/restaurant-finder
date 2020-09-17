import React, { Component , useContext, useState, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'
import '../style.css'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L, { marker } from 'leaflet'
import {useHistory, useParams} from 'react-router-dom'

//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("../../node_modules/leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("../../node_modules/leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("../../node_modules/leaflet/dist/images/marker-shadow.png")
  });}



const UpdateComponent = (props) => {
    const state = {
        lat: 52.2297,
        lng: 21.0122,
        zoom: 6
      }
        const { id } = useParams()
        const {addRestaurantToUI} = useContext(RestaurantContext)
        const [name, setName] = useState("")
        const [location, setLocation] = useState("")
        const [description, setDescription] = useState("")
        let [marker, setMarker] = useState([])
        

        const position = [state.lat, state.lng];
        let history = useHistory();

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await RestaurantFinder.get(`/${id}`)
                     setName(response.data.restaurant.name)
                     setLocation(response.data.restaurant.location)
                     setDescription(response.data.restaurant.description)
                     setMarker([response.data.restaurant.marker])
                    
                } catch (error) {
                    console.log(error)
                }
                
            }
            fetchData();
        },[])


        const handleSubmit = async (e) =>{
            e.preventDefault()

            
            try{
                const response = await RestaurantFinder.put(`/${id}`, {
                    name: name,
                    location: location,
                    description: description,
                    
                    marker: marker[0]
                })
                //addRestaurantToUI(response.data.restaurant)
                history.push("/")
            }catch(error){
                console.log(error)
            }
        }
        //from leafletmapaddmarker
        
        const addMarker = (e) => {         
            let latlng = [e.latlng]
            
            setMarker(latlng)
   
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
      
        
         {marker[0] &&
             <Marker key={`marker-${position}`} position={[marker[0].lat, marker[0].lng]}>
          <Popup>
            <span>{`${name}, ${location}`}</span>
          </Popup>
          </Marker> 
          
        
        }
          
        
        </Map> 
         
                </div>
  
                
            
            
        </div>
        )
    
}
export default UpdateComponent

             