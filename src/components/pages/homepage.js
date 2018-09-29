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
                            <p>This website is hosted on my GitHub repository, and it was built using React.js and BootStrap components via Reactstrap.</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-4">
                          <HomepageCardContainer />
                    </Col>
                    <Col className="col-12 col-md-8">
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
