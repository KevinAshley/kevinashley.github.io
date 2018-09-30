import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import $ from 'jquery';

class Stock extends Component {



  render() {

    const google = window.google;

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

        cleanData(stringifiedData);
    }

    async function cleanData(dataIn) {
//        console.log(dataIn);
        var betterData = JSON.parse(dataIn);
        var dataOut = Object.values(betterData);
        for (var i=0; i < Object.keys(dataOut).length; i++) {
            dataOut[i]['6. date'] = Object.keys(betterData)[i]
            dataOut[i]['3. low'] = Number(Object.values(betterData)[i]['3. low'])
            dataOut[i]['1. open'] = Number(Object.values(betterData)[i]['1. open'])
            dataOut[i]['4. close'] = Number(Object.values(betterData)[i]['4. close'])
            dataOut[i]['2. high'] = Number(Object.values(betterData)[i]['2. high'])
        };
        var k = JSON.parse(JSON.stringify( dataOut, ['6. date',"3. low","1. open","4. close","2. high"]));
        var result = [];
//        result = Object.values(k.reverse());
        for (var i=0; i < Object.keys(k).length; i++) {
            result[i] = Object.values(k[i])
        };
        result = result.reverse();

        console.log(result);

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
        var data = google.visualization.arrayToDataTable(result, true);

        var options = {
        legend:'none'
        };

        var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

        chart.draw(data, options);
        }

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
                                  <div id="chart_div"></div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
}



export default Stock;
