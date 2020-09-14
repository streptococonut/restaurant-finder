import React, { Component } from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddRestaurant from '../components/AddRestaurant'
import SimpleExample from '../LeafletMap'
import LeafletMap from '../LeafletMap'

class Home extends Component {
    render(){
        return(
            <div>
                <LeafletMap/>
                <Header/>
                <AddRestaurant/>
                <RestaurantList/>
                
            </div>
        )
    }
}

export default Home