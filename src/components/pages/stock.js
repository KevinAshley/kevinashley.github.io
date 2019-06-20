import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, InputGroup, Label,
Button, ButtonGroup, ButtonToolbar, Collapse } from 'reactstrap';

import AsyncSelect from 'react-select/lib/Async';

import { Chart } from "react-google-charts";

import DatePicker from "react-datepicker";

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

const defaultOptions = [
    {label: "AMD - Advanced Micro Devices Inc.", value: "AMD"},
    {label: "GOOG - Alphabet Inc.", value: "GOOG"},
    {label: "MSFT - Microsoft Corporation", value: "MSFT"}
]

const formatDate = (inputDate) => {
    return(
        inputDate.toISOString().substr(0,10)
    )
}

class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            startDate:
                new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() - 6,
                    new Date().getDate()
                ),
            endDate: new Date(),
            dateOption: 0,
            options: []
        };
        this.handleSelection = this.handleSelection.bind(this);
        this.getData = this.getData.bind(this);
        this.formatCandlestickData = this.formatCandlestickData.bind(this);
        this.formatVolumeData = this.formatVolumeData.bind(this);
        this.toggle = this.toggle.bind(this);

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);

        this.changeDateOption = this.changeDateOption.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.filterOptions = this.filterOptions.bind(this);
        this.loadOptions = this.loadOptions.bind(this);
    }

    filterOptions(inputValue) {
      return this.state.options.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    };

    loadOptions(inputValue, callback) {
        var requestUrl = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + inputValue + "&apikey=BF9KJPW0QTI88ECE";

        fetch(requestUrl, {
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
            const innerData = data['bestMatches'];
            const clonedData = JSON.parse(JSON.stringify(innerData));

            var newOptions = [];

            clonedData.map((item, index) => {
                newOptions.push(
                    { value: item["1. symbol"], label: item["1. symbol"] + " - " + item["2. name"] }
                );
            });

            this.setState({
                options: newOptions,
                verboseOptions: clonedData
            });
            callback(this.filterOptions(inputValue));
        })
        .catch(err => {
            console.log("fetch error" + err);
        });

    };

    handleInputChange(newValue) {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };

    changeDateOption(newOption) {
        const dateObject = {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        if (newOption == 0) {
            dateObject.startDate = new Date(
                new Date().getFullYear(),
                new Date().getMonth() - 6,
                new Date().getDate()
            );
            dateObject.endDate = new Date();
        }
        if (newOption == 1) {
            dateObject.startDate = new Date(
                new Date().getFullYear(),
                new Date().getMonth() - 12,
                new Date().getDate()
            );
            dateObject.endDate = new Date();
        }
        if (newOption == 2) {
            dateObject.startDate = new Date(
                new Date().getFullYear(),
                new Date().getMonth() - (12 * 5),
                new Date().getDate()
            );
            dateObject.endDate = new Date();
        }

        this.setState({
            dateOption: newOption,
            startDate: dateObject.startDate,
            endDate: dateObject.endDate
        });

    }

    handleEndDateChange(date) {
        this.setState({
          endDate: date
        });
    }

    handleStartDateChange(date) {
        this.setState({
          startDate: date
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
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
        console.log('the date is', this.state.startDate, formatDate(this.state.startDate));

        return (

            <div className="page_container">
                <Container>
                    <Row>
                        <Col className='mt-4'>
                            <Jumbotron className="mt-2">
                                <h1>Look Up A Stock</h1>
                                <p>This page retrieves stock data from the Alpha&nbsp;Vantage&nbsp;API</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-4'>
                            <InputGroup className="w-100 mt-2">
                                <AsyncSelect
                                    className="flex-grow-1"
                                    classNamePrefix="react-select"

                                    cacheOptions
                                    loadOptions={this.loadOptions}
                                    defaultOptions={defaultOptions}
                                    onInputChange={this.handleInputChange}
                                    onChange={this.handleSelection}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonToolbar>
                                <ButtonGroup className="btn-block">
                                    <Button onClick={() => {this.changeDateOption(0)}} color={this.state.dateOption == 0 ? "dark" : "secondary"}>6 months</Button>
                                    <Button onClick={() => {this.changeDateOption(1)}} color={this.state.dateOption == 1 ? "dark" : "secondary"}>1 year</Button>
                                    <Button onClick={() => {this.changeDateOption(2)}} color={this.state.dateOption == 2 ? "dark" : "secondary"}>5 years</Button>
                                    <Button onClick={() => {this.changeDateOption(3)}} color={this.state.dateOption == 3 ? "dark" : "secondary"}>Custom</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </Row>

                    <Collapse isOpen={this.state.dateOption == 3 ? true : false}>
                        <div className="card px-4 pb-2 mt-4 bg-light">
                            <Row>
                                <Col className="col-6 text-left">
                                    <Label className="mb-0 mt-1">Start Date</Label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleStartDateChange}

                                        selectsStart
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}

                                        className="mb-2"
                                    />
                                </Col>
                                <Col className="col-6 text-left right-column">
                                    <Label className="mb-0 mt-1">End Date</Label>
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleEndDateChange}

                                        selectsEnd
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Collapse>

                        {
                            this.state.candlestickData && this.state.volumeData ?
                            <React.Fragment>
                                <Row className="mt-3">

                                    <Col className="col-6 col-xl-6">
                                        <div className="card card-body my-2">
                                            <h4>
                                                ${this.state.candlestickData[this.state.candlestickData.length - 1][3].toLocaleString()}
                                            </h4>
                                            Last Trade Price<br />
                                            on&nbsp;
                                            {this.state.candlestickData[this.state.candlestickData.length - 1][0]}
                                        </div>
                                    </Col>

                                    <Col className="col-6 col-xl-6">
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
                            :
                            <div className="stockPage-spacer">
                            </div>
                        }

                </Container>
            </div>

    );
  }
}



export default Stock;
