import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Card } from 'reactstrap';

import Slideshow from '../slideshow/slideshow';

class Homepage extends Component {
  render() {
    return (


            <Container>
                <Row>
                    <Col className='mt-4'>

                        <Jumbotron className="mt-2">
                            <h1>Welcome to my website!</h1>
                    </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 mb-4">
                        <Card className="hp-slideshow-container">
                            <Slideshow />
                        </Card>
                    </Col>
                </Row>
            </Container>


    );
  }
}

export default Homepage;
