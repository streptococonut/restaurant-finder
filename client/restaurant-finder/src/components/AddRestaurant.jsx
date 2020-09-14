import React, { Component , useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'
import LeafletMapAddMarker from '../LeafletMapAddMarker'
import '../style.css'
import { marker } from 'leaflet'

const AddRestaurant = () => {
        const {addRestaurantToUI} = useContext(RestaurantContext)
        const [name, setName] = useState("")
        const [location, setLocation] = useState("")
        const [description, setDescription] = useState("")
        const [latlng, setLatlng] = useState([])


        const handleSubmit = async (e) =>{
            e.preventDefault()
            try{
                const response = await RestaurantFinder.post('/', {
                    name: name,
                    location: location,
                    description: description
                })
              //adding marker to markers array
                //setLatlng(this.this.props.data.marker)
                //setLatlng(e.LeafletMapAddMarker.marker)
                console.log(latlng)
                console.log(response)
                addRestaurantToUI(response.data.restaurant)
            }catch(err){

            }
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
                <br/>
                <div className="leaflet">
                <LeafletMapAddMarker />
                
                </div>
                
            
            </form>
        </div>
        )
    
}

export default AddRestaurant