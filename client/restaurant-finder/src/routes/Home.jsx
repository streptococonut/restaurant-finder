import React, { Component } from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <RestaurantList/>
                
            </div>
        )
    }
}

export default Home