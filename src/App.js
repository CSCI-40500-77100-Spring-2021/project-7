// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Searchbar from './components/SearchBar/SearchBar';
import StockDisplay from './components/StockDisplay/StockDisplay'
import Data from './components/Data/Data'

function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    <Searchbar />
    {/* <StockDisplay /> */}
    <Data />
    </React.Fragment>
  );
}

export default App;
