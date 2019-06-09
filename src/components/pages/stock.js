import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, InputGroup } from 'reactstrap';

import CreatableSelect from 'react-select/lib/Creatable';

import { Chart } from "react-google-charts";

const candlestickChartOptions = {
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
    risingColor: { strokeWidth: 0, fill: '#0f9d58' } // green
  },
  chartArea:{left:0,top:10,width:'100%',height:'300'},
  vAxis: {textPosition: 'in'}
}

const volumeChartOptions = {
  chartArea:{left:0,top:10,width:'100%'},
  vAxis: {textPosition: 'in'}
}

const options = [
  { value: 'MSFT', label: 'MSFT' },
  { value: 'GOOG', label: 'GOOG' },
  { value: 'AMD', label: 'AMD' }
]

class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSelection = this.handleSelection.bind(this);
        this.getData = this.getData.bind(this);
        this.formatCandlestickData = this.formatCandlestickData.bind(this);
        this.formatVolumeData = this.formatVolumeData.bind(this);
    }

    formatVolumeData(dataIn) {
        var betterData = JSON.parse(JSON.stringify(dataIn));
        // console.log("better data is ", betterData);

        var dataOut = [];

        for (var i=0; i < Object.keys(betterData).length; i++) {
            dataOut[i] = [];
            dataOut[i][0] = Object.keys(betterData)[i]
            dataOut[i][1] = Number(Object.values(betterData)[i]['5. volume'])
        };

        dataOut[Object.keys(betterData).length] = [
            "date",
            "volume"
        ]

        dataOut.reverse();
        // console.log("data out is ", dataOut);
        return dataOut;
    }

    formatCandlestickData(dataIn) {
//        console.log(dataIn);
        var betterData = JSON.parse(JSON.stringify(dataIn));
        // console.log("better data is ", betterData);

        var dataOut = [];

        for (var i=0; i < Object.keys(betterData).length; i++) {
            dataOut[i] = [];
            dataOut[i][0] = Object.keys(betterData)[i]
            dataOut[i][1] = Number(Object.values(betterData)[i]['3. low'])
            dataOut[i][2] = Number(Object.values(betterData)[i]['1. open'])
            dataOut[i][3] = Number(Object.values(betterData)[i]['4. close'])
            dataOut[i][4] = Number(Object.values(betterData)[i]['2. high'])
        };

        dataOut[Object.keys(betterData).length] = [
            "date",
            "low",
            "open",
            "close",
            "high"
        ]

        dataOut.reverse();

        // console.log("data out is ", dataOut);

        return dataOut;

    }

    getData(url, ticker) {
        fetch(url, {
        method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            // console.log(responseData);
            return responseData;
        })
        .then(data => {
            const innerData = data["Time Series (Daily)"];
            const clonedData = JSON.parse(JSON.stringify(innerData));
            // console.log("cloned data is ", clonedData);
            var candlestickData = this.formatCandlestickData(clonedData);
            var volumeData = this.formatVolumeData(clonedData);
            // var labels = [
            //     "date",
            //     "low",
            //     "open",
            //     "close",
            //     "high"
            // ];

            this.setState({
                "ticker" : ticker,
                "stockData" : data,
                "candlestickData" : candlestickData,
                "volumeData" : volumeData
            });
        })
        .catch(err => {
            console.log("fetch error" + err);
        });

    }

    handleSelection(inputValue) {
        var ticker = inputValue.value;
        var requestUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + ticker + "&apikey=BF9KJPW0QTI88ECE";
        // console.log(requestUrl);
        this.getData(requestUrl, ticker);
    }

    render() {

        console.log('the state is ', this.state );

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
                              <InputGroup className="w-100 mt-2">
                                <CreatableSelect
                                    className="w-100"
                                    classNamePrefix="react-select"
                                    options={options}
                                    formatCreateLabel={(inputValue) => `` + inputValue}
                                    onChange={this.handleSelection}
                                />
                              </InputGroup>
                        </Col>
                    </Row>

                        {
                            this.state.candlestickData && this.state.volumeData &&
                            <React.Fragment>
                                <Row className="mt-3">

                                    <Col className="col-6 col-xl-3">
                                        <div className="card card-body my-2">
                                            <h4>
                                                ${this.state.candlestickData[this.state.candlestickData.length - 1][3].toLocaleString()}
                                            </h4>
                                            Closing Price<br />
                                            on&nbsp;
                                            {this.state.candlestickData[this.state.candlestickData.length - 1][0]}
                                        </div>
                                    </Col>

                                    <Col className="col-6 col-xl-3">
                                        <div className="card card-body my-2">
                                            <h4>
                                                {this.state.volumeData[this.state.volumeData.length - 1][1].toLocaleString()}
                                            </h4>
                                            Shares Traded<br />
                                            on&nbsp;
                                            {this.state.volumeData[this.state.volumeData.length - 1][0]}
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col className='mt-4'>
                                        <Chart
                                          chartType="CandlestickChart"
                                          loader={<div>Loading Chart</div>}
                                          data={this.state.candlestickData}
                                          options={ candlestickChartOptions }
                                          width="100%"
                                          height="300px"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Chart
                                          chartType="ColumnChart"
                                          loader={<div>Loading Chart</div>}
                                          data={this.state.volumeData}
                                          options={ volumeChartOptions }
                                          width="100%"
                                          height="200px"
                                        />
                                    </Col>
                                </Row>
                            </React.Fragment>
                        }

                </Container>
            </div>

    );
  }
}



export default Stock;
