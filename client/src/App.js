import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./routes/Home"
import DetailPage from './routes/DetailPage'
import UpdatePage from './routes/UpdatePage'
import { RestaurantContextProvider } from './RestaurantContext'
import AddRestPage from './routes/AddRestPage'

class App extends React.Component {
    render(){
        return(
          <div> 
          <RestaurantContextProvider>
          
              <Router>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/restaurants/add" component={AddRestPage}/>
                  <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
                  <Route exact path="/restaurants/:id" component={DetailPage}/>
                </Switch>
              </Router>
            
          </RestaurantContextProvider>
          </div>
          
        )
    }
}



export default App 
