import React, {  useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'

import LeafletMap from '../LeafletMap'
import { useHistory } from 'react-router-dom'

const RestaurantList = () => {
    const { restaurant, setRestaurant } = useContext(RestaurantContext)
    let history = useHistory()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get('/')
                setRestaurant(response.data.restaurant)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])

    const handleUpdate = (id) => {
        history.push(`/restaurants/${id}/update`)
    }
    const handleDelete = (id) => {
        try {
         RestaurantFinder.delete(`/${id}`)
        setRestaurant(restaurant.filter((restaurant) => {
            return restaurant.id !== id
        }))
        } catch (error) {
            console.log(error)
        }
        
    }
       
            return(
                
                <div className="d-flex justify-content-center">     
                <div style={{margin:"2px"}}className="d-flex flex-column w-75 flex-align-stretch">
                    {
                        restaurant.map(el => {
                            return(
                                
                                
                                <div style={{marginTop:"2px", minHeight:"300px"}} className="card border-primary bg-transparent" key={el.id}>
                                <div className="card-body pl-1 pr-2 pt-2 pb-2 d-flex flex-row">
                                    
                                <div style={{minWidth:"25%", maxWidth:"25%"}} className="d-flex align-content-end flex-column text-center">
                                <div style={{margin:"2px", fontFamily:"arial"}} className="" > 
                                    <h3 style={{}}>
                                        {el.name}
                                    </h3>
                                    <br></br>
                                    <h5>{el.location}</h5>
                                    <br></br>
                                    <p style={{fontSize:"0.9rem"}}><i>"{el.description}"</i></p>
                                </div>
                                
                                <div style={{margin:"2px"}} className="d-flex align-items-end justify-content-center align-content-end">
                                    
                                    <button onClick={() => handleUpdate(el.id)} className="btn btn-outline-warning " style={{margin:"2px", fontSize:"1.1rem"}}>Update</button>
                                    <button onClick={() => handleDelete(el.id)}className="btn btn-outline-danger " style={{margin:"2px", fontSize:"1.1rem"}}>Delete</button>
                                    </div>
                                    </div>
                                    

                                <div style={{width:"100%"}}className="d-flex flex-align-stretch"> 
                                <LeafletMap position={el.marker} name={el.name} location={el.location}/>
                                </div>

                                    

                                </div>
                                </div>
                                
                                )
                                })
                    }   
                
                </div>
                </div>
            
            )

    
}

/* <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Description</th>
                        <th scope="col">Map</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead> 
                
                
                
                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.location}</td>
                                    <td><i>{el.description}</i></td>
                                    <td width="1000px"><LeafletMap position={el.marker} name={el.name} location={el.location}/></td>
                                    <td><button onClick={() => handleUpdate(el.id)} className="btn btn-outline-warning">Update</button></td>
                                    <td><button onClick={() => handleDelete(el.id)}className="btn btn-outline-danger">Delete</button></td>
                                </tr>
                                
                                */

export default RestaurantList