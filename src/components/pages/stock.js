import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import $ from 'jquery';

class Stock extends Component {



  render() {



    async function getData(url) {
        const response = await fetch(url);
        return response.json()
    }

    async function stockLookup() {

        var ticker = document.getElementById('ticker').value;
//        console.log(ticker);
        var requestUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + ticker + "&apikey=BF9KJPW0QTI88ECE";
//        console.log('the api url is ' + requestUrl);
        const data = await getData(requestUrl);
        const innerData = data["Time Series (Daily)"];
//        var arrayLength = Object.keys(innerData).length;
//        console.log(arrayLength);

        var stringifiedData = JSON.stringify(innerData);

        document.getElementById('stock-info').innerHTML=stringifiedData;

        cleanData(stringifiedData);
    }

    async function cleanData(dataIn) {
//        console.log(dataIn);
        var betterData = JSON.parse(dataIn);
        console.log(betterData);
        Object.keys(betterData).map(function (key) { betterData[key] = [key,key] });
        console.log(betterData);
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
