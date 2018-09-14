import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import SpecialDropdown from '../misc/SpecialDropdown';
import ReduxjunkContainer from '../misc/reduxjunk';

class Subpage extends Component {
  render() {
    return (

        <div className="page_container">
            <Container>
                <Row>
                    <Col className='mt-4'>
                        <Jumbotron className="mt-2">
                            <h1>This is a subpage</h1>
                            <p>Content Coming Soon</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                          <InputGroup>
                            <Input />
                            <InputGroupAddon addonType="append"><Button>Submit</Button></InputGroupAddon>
                          </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-4'>
                          <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SpecialDropdown />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReduxjunkContainer />
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}

export default Subpage;
