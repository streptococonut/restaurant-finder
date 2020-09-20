import React from 'react'
import Header from '../components/Header'
import UpdateComponent from '../components/UpdateComponent'
import '../style.css'

const UpdatePage = () => {
     
        return(
            <div className="main" style={{height:"100%"}}>
                <Header/>
             <div>
                <UpdateComponent/>
                </div>
            </div>
        )
}

export default UpdatePage