import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Reservation from './Components/Reservation/Reservation';

const App = () => {
  return (
    <Router>
      <div class = "App">
        <Header />
        <Routes>
          <Route path = "/" exact component={Home} />
          <Route path = "Menu" component={Menu} />
          <Route path = "Reservation" component={Reservation} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

const appDiv = document.getElementById("app");
render(<App />, appDiv);