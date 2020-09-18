import axios from 'axios'

export default axios.create(
    {
        baseURL: "/restaurants"
    })
//http://localhost:3001