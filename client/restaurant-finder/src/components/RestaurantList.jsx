import React, { Component } from 'react'

class RestaurantList extends Component{
    render(){
        return(
            <div className="list-group">
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
                    <tr>
                        <td>ddd</td>
                        <td>ddd</td>
                        <td>ddd</td>
                        <td>ddd</td>
                        <td>ddd</td>
                        <td>ddd</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )

    }
}
export default RestaurantList