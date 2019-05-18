import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class login extends Component {

    constructor(props) {
        super(props);
        // Set the state directly. Use props if necessary.
        this.state = {};

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.emailRef.current.value, this.passwordRef.current.value);
    }

    render() {

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
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit} className="text-left">
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input innerRef={this.emailRef} type="email" name="email" id="exampleEmail" placeholder="Enter email here" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input innerRef={this.passwordRef} type="password" name="password" id="examplePassword" placeholder="Enter password here" />
                                </FormGroup>
                                <Button type="submit" className="my-4" block>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default login;
