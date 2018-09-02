import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Stock extends Component {



  render() {

    const stockLookup = () => {
      var ticker = document.getElementById('ticker').value;
      console.log(ticker);

          var stockData = ticker;

      document.getElementById('stock-info').innerHTML=stockData;
    }

    return (

        <div className="page_container">
            <Container>
                <Row>
                    <Col className='mt-4'>
                        <Jumbotron className="mt-2">
                            <h1>This is a stockpage</h1>
                            <p>Content Coming Soon</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                          <InputGroup>
                            <Input id="ticker"/>
                            <InputGroupAddon addonType="append"><Button onClick={stockLookup}>Submit</Button></InputGroupAddon>
                          </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-4'>
                          <p>
                              <hr />
                                  <span id='stock-info'>

                                  </span>
                              <hr />
                          </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}



export default Stock;
