import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  Button,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {
  Link
} from 'react-router-dom';

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
          <Link to="/" className='navbar-brand'>HOME</Link>

          <Button onClick={this.toggle} type="button" className="navbar-toggler"><i className="fas fa-bars"></i></Button>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/coin-flip' onClick={this.close} className='nav-link'>Coin Flip</Link>
              </NavItem>
              <NavItem>
                <Link to='/cricket-scoreboard' onClick={this.close} className='nav-link'>Cricket Scoreboard</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Stock Tools
                </DropdownToggle>
                <DropdownMenu right>

                  <Link to='/stock' onClick={this.close} className='dropdown-item'>Stock Lookup</Link>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </div>
        </Navbar>

    );
  }
}

export default Navigation;
