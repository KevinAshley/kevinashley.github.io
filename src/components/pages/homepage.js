import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

class Homepage extends Component {
  render() {
    return (

        <div className="page_container">
            <Container>
                <Row>
                    <Col>

                        <Jumbotron className="mt-2">
                            <h1>Welcome to my website!</h1>
                            <p className="lead">This website is hosted for free on my GitHub repository, and it was built using React.js and BootStrap components via Reactstrap.</p>
                            <hr className="my-2" />
                            <p>This website acts like a single-page React application, but it uses React-Router-DOM to achieve multiple routes and a simple hack ensures that every route works as an entry point to my website (so every page is crawlable and indexable by search engine spiders).</p>
                            <p className="lead">
                              <Button color="primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}

export default Homepage;
