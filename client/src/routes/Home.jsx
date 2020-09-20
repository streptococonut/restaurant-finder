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
            <div className="main">
                <Header/>

                <div className="d-flex justify-content-center">
                    <div id="lf-all" style={{width:"75%", justifyContent:"center"}}>
                    <LeafletMap positions={true}/>
                    </div>
                </div>
                
                <div className="text-center" >   
                    <button onClick={handleClick} type="submit" id="mybtn-add"
                    
                    className="btn roboto" >Add New Restaurant</button>
                </div>
                <RestaurantList/>
                
                
                
                
                
            </div>
        )
}

export default Home