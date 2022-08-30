import './App.css';
import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Activities } from './components/activities/activities.js';
import Landing from './components/landing/landing.js';
import { MainPage } from './components/Home';
import CountryId from "./components/CountryId.js"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/countries" component={MainPage}/>
        <Route path ="/activities" component={Activities} />
        <Route exact path="/countries/:idPais" component={CountryId} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;