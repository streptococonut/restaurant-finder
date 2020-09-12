import React, { Component } from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddRestaurant from '../components/AddRestaurant'

class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <AddRestaurant/>
                <RestaurantList/>
                
            </div>
        )
    }
}

export default Home