// import logo from './logo.svg';

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchbar from "./components/SearchBar/SearchBar";
import Data from "./components/Data/Data";
// import StockDisplay from "./components/StockDisplay/StockDisplay";
import Chart from "./Chart";
// import PolygonApi from './components/PolygonApi';
import Watchlist from './components/Watchlist/Watchlist'
const App = () => {
  const [ticker, setTicker] = useState("");

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <Searchbar setTicker={setTicker} />
      <Chart ticker={ticker} />
      <Data ticker={ticker} />
      <Watchlist />
    </React.Fragment>
  );
};

export default App;
