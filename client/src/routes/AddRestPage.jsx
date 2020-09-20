import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import '../style.css'



const AddRestPage = () => {
    
        return(
            <div className="main" style={{height:"100%"}}>
                <Header/>
                <div>
                <AddRestaurant id="lf-select"/>
                </div>
            </div>
        )
    
}

export default AddRestPage