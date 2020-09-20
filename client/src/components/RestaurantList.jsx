import React, {  useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'
import '../style.css'
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
                <div>
                <div className="mycontainer">      
                
                    {
                        restaurant.map(el => {
                            return(
                                
                                
                                <div className="mycard" key={el.id}>
                                    
                                <div className="inrowcolumn">


                                <div>
                                    <h4>
                                        {el.name}
                                    </h4>
                                    
                                    <p style={{fontWeight:"normal"}}>{el.location}</p>
                                    
                                    <p style={{fontWeight:"300"}}><i>"{el.description}"</i></p>
                                </div>
                                
                                <div className="mybuttons">
                                   
                                    <button onClick={() => handleUpdate(el.id)} id="mybtn-upd" className="btn btn-outline-warning">Update</button>
                                    <button onClick={() => handleDelete(el.id)} id="mybtn-del" className=" btn btn-outline-danger">Delete</button>
                                    
                                    </div>


                                    </div>
                                    

                                <div id="lf-card" className="inrowmap"> 
                                <LeafletMap position={el.marker} name={el.name} location={el.location}/>
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

/* <h3 style={{}}>
                                        {el.name}
                                    </h3>
                                    <br></br>
                                    <h5>{el.location}</h5>
                                    <br></br>
                                    <p style={{fontSize:"0.9rem"}}><i>"{el.description}"</i></p>
                         
                                
                              
                                    
                                    <button onClick={() => handleUpdate(el.id)} className="btn btn-outline-warning " style={{margin:"2px", fontSize:"1.1rem"}}>Update</button>
                                    <button onClick={() => handleDelete(el.id)}className="btn btn-outline-danger " style={{margin:"2px", fontSize:"1.1rem"}}>Delete</button>
                  
                                    

                                <div style={{width:"100%"}}className="d-flex flex-align-stretch"> 
                                <LeafletMap position={el.marker} name={el.name} location={el.location}/>
                                </div> */

export default RestaurantList