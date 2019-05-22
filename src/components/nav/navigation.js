import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  Button,
  Nav,
  NavItem
} from 'reactstrap';

import {
  Link
} from 'react-router-dom';

import Account from './account'

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

            <Navbar color="primary" dark className='sticky-top p-0'>
              <div className='w-100'>
                  <Container className="main-bar w-100 d-flex px-3 py-2">
                      <Link to="/" onClick={this.close} className='navbar-brand'>
                          HOME
                      </Link>
                      <Account
                          close={this.close}
                      />
                      <Button onClick={this.toggle} type="button" className="navbar-toggler"><i className="fas fa-bars"></i></Button>
                  </Container>

                  <Collapse isOpen={this.state.isOpen} className="flex-grow-0 darkened-nav" navbar>
                    <Container>
                        <Nav navbar className="py-3 flex-row justify-content-end">
                          <NavItem>
                            <Link to='/coin-flip' onClick={this.close} className='nav-link'>Coin Flip</Link>
                          </NavItem>
                          <NavItem className="px-4">
                            <Link to='/cricket-scoreboard' onClick={this.close} className='nav-link'>Cricket Scoreboard</Link>
                          </NavItem>
                          <NavItem>
                            <Link to='/stock' onClick={this.close} className='nav-link'>Stock Lookup</Link>
                          </NavItem>
                        </Nav>
                    </Container>
                  </Collapse>
              </div>
            </Navbar>

        );
    }
}

export default Navigation;
