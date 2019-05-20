import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Form, FormGroup, Input, Button, Alert } from 'reactstrap';

import { connect } from 'react-redux';

import {
  changeLoginState
} from '../../redux';

class login extends Component {

    constructor(props) {
        super(props);
        // Set the state directly. Use props if necessary.
        this.state = {};

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        // ghetto auth needs to be replaced
        this.email = "fake@email.com";
        this.password = "kevinross";
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.emailRef.current.value, this.passwordRef.current.value);
        if (this.emailRef.current.value == this.email && this.passwordRef.current.value == this.password) {
            this.props.changeLoginState({loggedIn: true});
            this.setState({
                loginFailed: false
            });
        } else {
            this.setState({
                loginFailed: true
            });
        }
    }

    render() {
        // console.log(this.props.loginState.loggedIn);

        return (

            <div className="page_container">
                <Container>
                    <Row>
                        <Col className='mt-4'>
                            <Jumbotron className="mt-2">
                                <h1>Log In</h1>
                                <p>Sign in to access advanced features</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    {
                        this.state.loginFailed ?
                        <Alert color="danger">
                            Your email or password is incorrect...
                        </Alert>
                        : ""
                    }

                    {
                        this.props.loginState.loggedIn ?
                        <Alert color="success">
                            You are signed in
                        </Alert>
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
  changeLoginState
};

const loginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(login);

export default loginContainer;
