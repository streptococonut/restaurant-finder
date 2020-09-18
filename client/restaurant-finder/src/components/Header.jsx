import React from 'react'
import {useHistory} from 'react-router-dom'

const Header = () => {
        let history = useHistory()
        const handleClick = (e) => {
            history.push("/")
        }
        return(
            <div style={{cursor:"pointer"}} className="box" onClick={handleClick}>
                <h1 className="font-weight-light display-1 text-center ">Restaurant finder</h1>
            </div>
            
        )
    
}
export default Header