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
    changeLoginState
} from '../../redux';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../sensitiveData/firebaseConfig';

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: ""
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.close();
    }

    componentDidUpdate(prevProps) {

        if (this.props.userEmail && this.props.userEmail !== this.state.user.email) {
            db.collection("users").where("email", "==", this.props.userEmail)
                .get()
                .then(
                    (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        // console.log(doc.id, " => ", doc.data());
                        this.setState({
                            user: doc.data()
                        })
                    });
                });
        }
    }

    render() {

        console.log('account props - ', this.props);
        console.log('account state - ', this.state);

        const {user} = this.state;

        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                // User is signed in.
                const userEmail = firebase.auth().currentUser.email;
                this.props.changeLoginState(true, userEmail);
            } else {
                // No user is signed in.
                this.props.changeLoginState(false, '');
            }
        });

        return (<React.Fragment>
            {
                // check if the user is defined
                this.props.loggedIn
                    ? <Nav className="ml-auto px-2 mr-2" navbar>
                            <NavItem>
                                <Link onClick={this.handleClick} to="/login" className='nav-link px-2'>
                                    {
                                        user && user.name && user.name.fname  ?
                                        <span>{user.name.fname}</span> :
                                        <span>&middot;&middot;&middot;</span>
                                    }
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
    changeLoginState
};

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;
