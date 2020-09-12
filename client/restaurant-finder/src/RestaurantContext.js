import React, { useState, createContext } from 'react'

export const RestaurantContext = createContext();

export const RestaurantContextProvider = props => {
    const [restaurant, setRestaurant] = useState([])

    const addRestaurantToUI = (place) =>{
        setRestaurant([...restaurant, place])
    }
    return(
      

        <RestaurantContext.Provider value={{restaurant, setRestaurant, addRestaurantToUI}}>
            {props.children}
        </RestaurantContext.Provider>

    )
    }