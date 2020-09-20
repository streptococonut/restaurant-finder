import React from 'react'
import {useHistory} from 'react-router-dom'

const Header = () => {
        let history = useHistory()
        const handleClick = (e) => {
            history.push("/")
        }
        return(
            <div style={{cursor:"pointer"}} onClick={handleClick}>
                <h1 style={{color:"white"}} className="font-weight-light display-3 text-center bg-dark">Restaurant Finder</h1>
            </div>
            
        )
    
}
export default Header