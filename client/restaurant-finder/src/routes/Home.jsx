import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import {useHistory} from 'react-router-dom'
import LeafletMap from '../LeafletMap'

const Home = () => {
    let history = useHistory()
        const handleClick = (e) => {
            
            history.push("/restaurants/add")}
        
    
        
        return(
            <div style={{backgroundColor:"snow"}}>
                <Header/>

                <div className="d-flex justify-content-center">
                    <div style={{width:"75%", justifyContent:"center"}}>
                    <LeafletMap positions={true}/>
                    </div>
                </div>
                
                <div className="text-center">   
                    <button onClick={handleClick} type="submit" style={{marginTop:"4px", width:"75%", cursor:"pointer"}} className="btn btn-primary">Add New Restaurant</button>
                </div>
                
                <RestaurantList/>
                
                
                
                
            </div>
        )
}

export default Home