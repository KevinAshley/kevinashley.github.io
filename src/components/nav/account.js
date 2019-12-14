import React, {
    Component
} from 'react';

import {
    Nav,
    NavItem
} from 'reactstrap';

import {
    Link
} from 'react-router-dom';

import {
    connect
} from 'react-redux';
import {
    changeAuthentication,
    changeLoginState
} from '../../redux';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../sensitiveData/firebaseConfig';

firebase.initializeApp(firebaseConfig);

class Account extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.close();
    }

    render() {

        console.log('account props - ', this.props);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.props.changeLoginState(true);
            } else {
                // No user is signed in.
                this.props.changeLoginState(false);
            }
        });

        return (<React.Fragment>
            {
                // check if the user is defined
                this.props.loggedIn
                    ? <Nav className="ml-auto px-2 mr-2" navbar>
                            <NavItem>
                                <Link onClick={this.handleClick} to="/login" className='nav-link px-2'>
                                    Signed In
                                    <i className="fas fa-user-check ml-2"></i>
                                </Link>
                            </NavItem>
                        </Nav>
                    : <Nav className="ml-auto mr-2" navbar>
                            <NavItem>
                                <Link onClick={this.handleClick} to="/login" className='nav-link px-2'>
                                    Login
                                    <i className="fas fa-user ml-2"></i>
                                </Link>
                            </NavItem>
                        </Nav>
            }
        </React.Fragment>);
    }
}

const mapStateToProps = (state, ownProps) => (state);

const mapDispatchToProps = {
    changeAuthentication,
    changeLoginState
};

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;