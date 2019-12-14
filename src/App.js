import React, { Component } from 'react';

import './css/main.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './components/header/header';
import Navigation from './components/nav/navigation';
import Footer from './components/footer/footer';
import Homepage from './components/pages/homepage';
import CoinFlip from './components/pages/coinFlip';
import RiverCricket from './components/pages/riverCricket';
import CricketScoreboard from './components/pages/cricketScoreboard';
import Stock from './components/pages/stock';
import Login from './components/pages/login';

const App = (props) => {
    return (
        <Router>
          <div className="App">
            <Header />
            <Navigation />
            <div className="page-wrapper">
                <Route exact path="/" render={() => <Homepage/>} />
                <Route exact path="/coin-flip" render={() => <CoinFlip/>} />
                <Route exact path="/cricket-scoreboard" render={() => <CricketScoreboard/>} />
                <Route exact path="/stock" render={() => <Stock/>} />
                <Route exact path="/river-cricket" render={() => <RiverCricket />} />
                <Route exact path="/login" render={() => <Login/>} />
            </div>
            <Footer />
          </div>
        </Router>
    );
}

export default App;
