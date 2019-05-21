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
import {
  changeLoginState
} from '../../redux';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";


class Account extends Component {

    constructor(props) {
      super(props);
      this.state = {
          authenticationVerified: false
      };

      this.updateLoginStatus = this.updateLoginStatus.bind(this);
      this.handleLoginIconClick = this.handleLoginIconClick.bind(this);
    }

    handleLoginIconClick() {
        this.updateLoginStatus();
        this.props.close();
    }

    updateLoginStatus() {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            console.log('firebase user login');
            if (!this.props.loginState.loggedIn) {
                  this.props.changeLoginState({
                      loggedIn: true
                  })
            }
        } else {
            // No user is signed in.
            console.log('no firebase login');
            if (this.props.loginState.loggedIn) {
                this.props.changeLoginState({
                    loggedIn: false
                });
            }
        }
    }

    componentDidUpdate() {
        this.updateLoginStatus();
    }

    render() {
        return (

            <React.Fragment>
                {
                    this.props.loginState.loggedIn
                        ?
                        <Nav className="ml-auto mr-3" navbar>
                            <NavItem>
                                <Link onClick={this.handleLoginIconClick} to="/login" className='nav-link'>
                                    Welcome, Kevin
                                    <i className="fas fa-user-check ml-2"></i>
                                </Link>
                            </NavItem>
                        </Nav>
                        :
                        <Nav className="ml-auto mr-3" navbar>
                            <NavItem>
                                <Link onClick={this.handleLoginIconClick} to="/login" className='nav-link'>
                                    Login
                                    <i className="fas fa-user ml-2"></i>
                                </Link>
                            </NavItem>
                        </Nav>
                }
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state, ownProps) => (state);

const mapDispatchToProps = {
  changeLoginState
};

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);

export default AccountContainer;
