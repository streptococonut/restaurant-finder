import React, { Component, useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'
import SimpleExample from '../LeafletMap'
import LeafletMap from '../LeafletMap'

const RestaurantList = (props) => {
    const { restaurant, setRestaurant } = useContext(RestaurantContext)

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
       
            return(
                
            <div className="list-group container">
                <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Description</th>
                        <th scope="col">Map</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurant.map(el => {
                            return(
                                
                                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.location}</td>
                                    <td>{el.description}</td>
                                    <td width="1000px"><LeafletMap position={el.marker}/></td>
                                    <td><button className="btn btn-warning">Update</button></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                )
                                })
                    }   
                    
                </tbody>
                </table>
            </div>
            )

    
}

export default RestaurantList