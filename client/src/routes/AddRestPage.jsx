import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import '../style.css'

const AddRestPage = () => {
    
        return(
            <div className="main" style={{height:"100%"}}>
                
                <Header/>
            
                <div>
                <AddRestaurant/>
                </div>
            </div>
        )
    
}

export default AddRestPage