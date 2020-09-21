import React, { useState, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import '../style.css'
import { Map , TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
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
        
        <div className="mycontainer main" >
        
            <form action="" style={{marginBottom:"10px", width:"75%"}}>
            <div className="form-row" style={{width:"100%"}}>
                <div className="col myinput" style={{width:"30%"}}>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                        
                </div>
                <div className="col myinput" style={{width:"30%"}}>
                    <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location"/>
                </div>
                <div className="col myinput" style={{width:"30%"}}>
                <input value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" placeholder="Description"/>
                </div>
                <div style={{width:"10%", minWidth:"80px"}}> 
                <button onClick={handleSubmit} type="submit" id="mybtn-upd-page" style={{width:"100%", color:"#49525a"}} className="btn btn-outline-warning" ><b>Update</b></button>
                </div>
                </div>
                </form>
                

                <div id="lf-select">

                <Map center={position} zoom={state.zoom}
      onclick={addMarker}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
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

             