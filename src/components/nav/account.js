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

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1lvWoJbwf84DzZ50Add1cVWAk8D-rwSw",
  authDomain: "kevinashley-c0fcb.firebaseapp.com",
  databaseURL: "https://kevinashley-c0fcb.firebaseio.com",
  projectId: "kevinashley-c0fcb",
  storageBucket: "kevinashley-c0fcb.appspot.com",
  messagingSenderId: "592064038980",
  appId: "1:592064038980:web:7e9132c92a40b8d8"
};


class Account extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (

            <React.Fragment>
                {
                    this.props.loginState.loggedIn
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
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state, ownProps) => (state);

const AccountContainer = connect(
  mapStateToProps
)(Account);

export default AccountContainer;
