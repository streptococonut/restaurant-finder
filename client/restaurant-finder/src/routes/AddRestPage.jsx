import React, { Component } from 'react'
import AddRestaurant from '../components/AddRestaurant'
import LeafletMapAddMarker from '../LeafletMapAddMarker'



class AddRestPage extends Component {
    render(){
        return(
            <div>
                <h1 className="container">Add Restaurant</h1>
                
                <AddRestaurant/>
               
            </div>
        )
    }
}

export default AddRestPage