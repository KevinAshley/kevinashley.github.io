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

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }



  render() {
    return (

        <Navbar color="dark" dark expand="md" className='sticky-top'>
          <div className='container'>
          <Link to="/" className='navbar-brand'>HOME</Link>

          <Button onClick={this.toggle} type="button" className="navbar-toggler"><i class="fas fa-bars"></i></Button>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/subpage' className='nav-link'>Subpage</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
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
