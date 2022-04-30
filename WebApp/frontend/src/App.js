import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import MenuPage from './Components/Menu/MenuPage';
import Reservation from './Components/Reservation/Reservation';

const App = () => {
  return (
    <Router>
      <div className = "App">
        <Header />
        <Routes>
          <Route path="/" exact element = { <Home /> } />
          <Route path="/Menu" element = { <MenuPage /> } />
          <Route path="/Reservation" element = { <Reservation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

const appDiv = document.getElementById("app");
ReactDOM.createRoot(appDiv).render(<App />)