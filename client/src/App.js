import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./routes/Home"
import DetailPage from './routes/DetailPage'
import UpdatePage from './routes/UpdatePage'
import AddRestPage from './routes/AddRestPage'
import { RestaurantContextProvider } from './RestaurantContext'


const App = () => {
    
        return(
          
          <RestaurantContextProvider>
          <div> 
              <Router>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/restaurants/add" component={AddRestPage}/>
                  <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
                  <Route exact path="/restaurants/:id" component={DetailPage}/>
                  <Route path="/*" component={Home}/>
                </Switch>
              </Router>
              </div>
          </RestaurantContextProvider>
          
          
        )
    
}



export default App 
