import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Card } from 'reactstrap';

import Slideshow from '../slideshow/slideshow';
import HomepageCardContainer from '../card/HomepageCard';

class Homepage extends Component {
  render() {
    return (

        <div className="page_container">
            <Container>
                <Row>
                    <Col className='mt-4'>

                        <Jumbotron className="mt-2">
                            <h1>Welcome to my website!</h1>
                            <p className="mb-0">This website is hosted on Github. View my repository <a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/KevinAshley/kevinashley.github.io">here</a>
                            <br /><br />
                            Kevin Ashley</p>
                    </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-4 mb-4">
                          <HomepageCardContainer />
                    </Col>
                    <Col className="col-12 col-md-8 mb-4">
                          <Card className="hp-slideshow-container">
                            <Slideshow />
                          </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}

export default Homepage;
