import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './pages/main' 
import Result from './pages/result'

const App = () => {

  return(   
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} /> 
          <Route path="/:route" component={Result} /> 
        </Switch>
      </BrowserRouter>
  )  
};
 
export default App;