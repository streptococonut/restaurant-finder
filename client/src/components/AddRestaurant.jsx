import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'
import '../style.css'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import {useHistory} from 'react-router-dom'


//fix missing marker icon
{delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("../../node_modules/leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("../../node_modules/leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("../../node_modules/leaflet/dist/images/marker-shadow.png")
  });}



const AddRestaurant = (props) => {
    const state = {
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
              console.log(err)
            }
        }
        //from leafletmapaddmarker
        
        const addMarker = (e) => {    
             
            let latlng = [e.latlng]
            setMarker(latlng)
          }
    return(
        
        <div className="mycontainer main">
        
            <form action="" style={{marginBottom:"10px", width:"75%"}}>
            <div className="form-row" style={{width:"100%"}}>
                <div className="col myinput">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        
                </div>
                <div className="col myinput">
                    <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="City, adress"/>
                </div>
                <div className="col myinput">
                <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" placeholder="Description"/>
                </div>
                <div style={{width:"10%", minWidth:"100px"}}>
                <button onClick={handleSubmit} type="submit" className="btn btn-outline-warning" style={{width:"100%"}} id="mybtn-add-little"><b>Add</b></button>
                </div>
                </div>
                </form>
                <br/>
        
                <div id="lf-select" >
                <Map center={position} zoom={state.zoom}
      onclick={addMarker}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      
        {marker.map((position) => 
         
          <Marker key={`marker-${position}`} position={position}>
          
          </Marker>
        )}
        </Map> 
                
                </div>
                
            
            
        </div>
        )
    
}

export default AddRestaurant