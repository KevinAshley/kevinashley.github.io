import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, Form, FormGroup, InputGroupAddon, Label, Input } from 'reactstrap';

class Subpage extends Component {
  render() {
    return (

        <div className="page_container">
            <Container>
                <Row>
                    <Col>
                        <Jumbotron className="mt-2">
                            <h1>This is a subpage</h1>
                            <p>Content Coming Soon</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                          <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
                        </FormGroup>
                      </Form>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}

export default Subpage;
