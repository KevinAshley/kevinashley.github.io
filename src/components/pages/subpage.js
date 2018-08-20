import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron } from 'reactstrap';

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
            </Container>
        </div>

    );
  }
}

export default Subpage;
