import React, { Component } from 'react';

import './css/main.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './components/pages/homepage';
import Subpage from './components/pages/subpage';
import Stock from './components/pages/stock';
import Navigation from './components/nav/navigation';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
            <Navigation />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/subpage" component={Subpage} />
                <Route exact path="/stock" component={Stock} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
