// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Searchbar from './components/SearchBar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
    <Searchbar />
    </>
  );
}

export default App;
