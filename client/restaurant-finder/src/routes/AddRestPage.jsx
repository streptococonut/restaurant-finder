import React, { Component } from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'




class AddRestPage extends Component {
    render(){
        return(
            <div>
                <Header/>
                
                <AddRestaurant/>
               
            </div>
        )
    }
}

export default AddRestPage