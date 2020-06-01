import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TheUltimateCV from './Components/TheUltimateCV';
import ChooseCategory from './Components/ChooseCategory';
import Tabs from "./Components/Tabs"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="background-ultimateCV">
      
      <Router basename={window.location.pathname}>
        <Switch>
          <Route path="/" exact component={TheUltimateCV} />
          <Route path="/category" component={ChooseCategory} />
          <Route path="/:type" component={Tabs} />         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
