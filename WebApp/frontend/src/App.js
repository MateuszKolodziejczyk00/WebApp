import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/Header/Header"
import HomePage from './Components/Home/HomePage';
import MenuPage from './Components/Menu/MenuPage';
import Reservation from './Components/Reservation/Reservation';

const App = () => {
  return (
    <Router>
      <div className = "App">
        <div className = "AppContent">
          <Routes>
            <Route path="/" exact element = { <HomePage /> } />
            <Route path="/Menu" element = { <MenuPage /> } />
            <Route path="/Reservation" element = { <Reservation />} />
          </Routes>
        </div>
        <Header />
      </div>
    </Router>
  )
}

export default App

const appDiv = document.getElementById("app");
ReactDOM.createRoot(appDiv).render(<App />)