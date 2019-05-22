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
import CricketScoreboard from './components/pages/cricketScoreboard';
import Stock from './components/pages/stock';
import Login from './components/pages/login';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <Navigation />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/coin-flip" component={CoinFlip} />
                <Route exact path="/cricket-scoreboard" component={CricketScoreboard} />
                <Route exact path="/stock" component={Stock} />
                <Route exact path="/login" component={Login} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
