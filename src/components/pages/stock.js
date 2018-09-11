import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Stock extends Component {



  render() {

    async function getData(url) {
        const response = await fetch(url);
        return response.json()
    }

    async function stockLookup() {
        var ticker = document.getElementById('ticker').value;
        console.log(ticker);
        var requestUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + ticker + "&apikey=BF9KJPW0QTI88ECE"
        const data = await getData(requestUrl);
        var stringifiedData = JSON.stringify(data);
        document.getElementById('stock-info').innerHTML=stringifiedData;
    }

    return (

        <div className="page_container">
            <Container>
                <Row>
                    <Col className='mt-4'>
                        <Jumbotron className="mt-2">
                            <h1>Look Up A Stock</h1>
                            <p>This page retrieves stock data from the Alpha Vantage API</p>
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

                                  <span id='stock-info'>

                                  </span>

                          </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}



export default Stock;
