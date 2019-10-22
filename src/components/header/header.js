import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="app-header text-light bg-dark">
          <i className="fas fa-compact-disc App-logo"></i>
          <h1 className="app-title text-light">Kevin Ashley</h1>
        </header>
    );
  }
}

export default Header;
