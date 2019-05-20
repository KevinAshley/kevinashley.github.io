import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  Button,
  Nav,
  NavItem
} from 'reactstrap';

import {
  Link
} from 'react-router-dom';

import { connect } from 'react-redux';

class Navigation extends Component {

    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this.toggle = this.toggle.bind(this);
      this.close = this.close.bind(this);

    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    close() {
        if (this.state.isOpen) {
            this.toggle();
        }
    }



  render() {
    return (

        <Navbar color="primary" dark expand="md" className='sticky-top'>
          <div className='container'>
          <Link to="/" className='navbar-brand'>HOME
          </Link>

          {this.props.loginState.loggedIn
              ?
              <Nav className="ml-auto mr-3" navbar>
                  <NavItem>
                      <Link to="/login" className='nav-link'>
                          Welcome, Kevin
                          <i className="fas fa-user-check ml-2"></i>
                      </Link>
                  </NavItem>
              </Nav>
              :
              <Nav className="ml-auto mr-3" navbar>
                  <NavItem>
                      <Link  onClick={this.close} to="/login" className='nav-link'>
                          Login
                          <i className="fas fa-user ml-2"></i>
                      </Link>
                  </NavItem>
              </Nav>
          }




          <Button onClick={this.toggle} type="button" className="navbar-toggler"><i className="fas fa-bars"></i></Button>

          <Collapse isOpen={this.state.isOpen} className="flex-grow-0" navbar>
            <Nav navbar>
              <NavItem>
                <Link to='/coin-flip' onClick={this.close} className='nav-link'>Coin Flip</Link>
              </NavItem>
              <NavItem>
                <Link to='/cricket-scoreboard' onClick={this.close} className='nav-link'>Cricket Scoreboard</Link>
              </NavItem>
              <NavItem>
                <Link to='/stock' onClick={this.close} className='nav-link'>Stock Lookup</Link>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>

    );
  }
}

const mapStateToProps = (state, ownProps) => (state);

const NavigationContainer = connect(
  mapStateToProps
)(Navigation);

export default NavigationContainer;
