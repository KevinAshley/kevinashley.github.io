import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Form, FormGroup, Input, Button, Alert } from 'reactstrap';

import { connect } from 'react-redux';

import {
  changeLoginState,
  changeAuthentication
} from '../../redux';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";

class login extends Component {

    constructor(props) {
        super(props);
        // Set the state directly. Use props if necessary.
        this.state = {};

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleSignOut = this.handleSignOut.bind(this);

    }

    handleSignOut() {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          console.log("Sign-out successful.");

        }).catch(function(error) {
          // An error happened.
          console.log("An error happened", error);
        });

    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.props.loginState.loggedIn) {

            firebase.auth().signInWithEmailAndPassword(this.emailRef.current.value, this.passwordRef.current.value).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            });
            this.props.changeAuthentication({
                authenticating: true
            });
        }
    }

    render() {
        // console.log(this.props.loginState.loggedIn);

        return (

            <div className="page_container">
                <Container>
                    {
                        this.props.loginState.loggedIn ?
                        <Row>
                            <Col className='mt-4'>
                                <Jumbotron className="mt-2">
                                    <h1>Signed In</h1>
                                    <p>Welcome back, Kevin</p>
                                </Jumbotron>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col className='mt-4'>
                                <Jumbotron className="mt-2">
                                    <h1>Log In</h1>
                                    <p>Sign in to access advanced features</p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    }

                    {
                        // !this.props.loginState.loggedIn ?
                        // <Alert color="danger">
                        //     Incorrect email or password
                        // </Alert>
                        // : ""
                    }

                    {
                        this.props.loginState.loggedIn ?
                        <Row>
                            <Col>
                                <Button onClick={ this.handleSignOut } block>
                                    Sign out
                                </Button>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit} className="text-left">
                                    <FormGroup>

                                        <Input innerRef={this.emailRef} type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup>

                                        <Input innerRef={this.passwordRef} type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </FormGroup>
                                    <Button type="submit" className="my-4" block>Submit</Button>
                                </Form>
                            </Col>
                        </Row>

                    }


                </Container>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => (state);

const mapDispatchToProps = {
  changeLoginState,
  changeAuthentication
};

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(login);

export default loginContainer;
