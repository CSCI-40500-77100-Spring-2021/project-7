// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Searchbar from './components/SearchBar/SearchBar';
import StockDisplay from './components/StockDisplay/StockDisplay';
import Chart from './Chart';
// import PolygonApi from './components/PolygonApi';


const App =()=> {
  const [ticker, setTicker]=useState('');

  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    <Searchbar setTicker={setTicker}/>
    <Chart ticker={ticker}/>
    </React.Fragment>
  );
}

export default App;
