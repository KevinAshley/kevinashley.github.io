import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import Slideshow from '../slideshow/slideshow';

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
                          <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card title</CardTitle>
                              <CardSubtitle>Card subtitle</CardSubtitle>
                              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                              <Button>Button</Button>
                            </CardBody>
                          </Card>
                    </Col>
                    <Col className="col-12 col-md-8">
                          <Card>
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
