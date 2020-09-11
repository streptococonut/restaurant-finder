import React, { Component, useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../RestaurantContext'

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
                        <td scope="col">Restaurant</td>
                        <td scope="col">Location</td>
                        <td scope="col">Description</td>
                        <td scope="col">Map</td>
                        <td scope="col">Edit</td>
                        <td scope="col">Delete</td>
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
                                    <td>Map</td>
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