import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, ButtonGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import SpecialDropdown from '../misc/SpecialDropdown';
import ReduxjunkContainer from '../misc/reduxjunk';

const items = [
    {label:'20', value:20},
    {label:'19', value:19},
    {label:'18', value:18},
    {label:'17', value:17},
    {label:'16', value:16},
    {label:'15', value:15},
    {label:'bulls', value:25},
]

class CricketScoreboard extends Component {

    constructor(props) {
        super(props);
        // Set the state directly. Use props if necessary.
        this.state = {
            opponentOne: [],
            opponentTwo: [],
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(index, opponent, direction) {
        console.log(index);
        console.log(opponent);

        var newObject = this.state[opponent];
        var lastTally = this.state[opponent][index];
        var nextTally = 0;
        console.log('last tally was ' + lastTally);
        if (lastTally == undefined) {
            lastTally = 0;
        }
        if (direction == "increase") {
            nextTally = lastTally + 1;
        } else {
            nextTally = lastTally - 1;
            if (nextTally < 0) {
                nextTally = 0;
            }
        }
        newObject[index] = nextTally;
        if (opponent == "opponentOne") {
            this.setState({
                opponentOne: newObject
            });
        }
        if (opponent == "opponentTwo") {
            this.setState({
                opponentTwo: newObject
            });
        }

    }


    render() {

        console.log(items[6]['label']);

        const scoreBoardMarkup = items.map((item, index) => {
            return (
                <div key={index} className="row text-center flex-nowrap mb-2 pb-2 border-bottom">

                    <Col className="w-100 text-right">
                        <ButtonGroup className="tally-holder pr-2">
                            <Button outline color="secondary" className="disabled">
                                {this.state.opponentOne[index] > 3 ? this.state.opponentOne[index] - 3 : <span>&nbsp;</span>}
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="">
                            <Button onClick={() => {this.handleChange(index, 'opponentOne', "decrease")}} >-</Button>
                            <Button className="btn-outline-dark disabled counter w-100">
                                {this.state.opponentOne[index] == null || this.state.opponentOne[index] == 0 ? <span>&nbsp;</span> : this.state.opponentOne[index] == 1 ? "/" : this.state.opponentOne[index] == 2 ? <span>X</span> : <span>&#10683;</span> }
                            </Button>
                            <Button onClick={() => {this.handleChange(index, 'opponentOne', "increase")}} >+</Button>
                        </ButtonGroup>
                    </Col>

                    <Col className="target-label col-2">{ index == 6 ? <span>&#9678;</span> : items[index]['label']}</Col>

                    <Col className="w-100 text-left">

                        <ButtonGroup className="">
                            <Button onClick={() => {this.handleChange(index, 'opponentTwo', "decrease")}} >-</Button>
                            <Button className="btn-outline-dark disabled counter w-100">
                                {this.state.opponentTwo[index] == null || this.state.opponentTwo[index] == 0 ? <span>&nbsp;</span> : this.state.opponentTwo[index] == 1 ? "/" : this.state.opponentTwo[index] == 2 ? <span>X</span> : <span>&#10683;</span> }
                            </Button>
                            <Button onClick={() => {this.handleChange(index, 'opponentTwo', "increase")}} >+</Button>
                        </ButtonGroup>
                        <ButtonGroup className="tally-holder pl-2">
                            <Button outline color="secondary" className="disabled">
                                {this.state.opponentTwo[index] > 3 ? this.state.opponentTwo[index] - 3 : <span>&nbsp;</span>}
                            </Button>
                        </ButtonGroup>
                    </Col>

                </div>
            );
        });

        return (

            <div className="page_container">
                <Container>
                    <Row>
                        <Col className='mt-4'>
                            <Jumbotron className="mt-2">
                                <h1>Cricket Scoreboard</h1>
                                <p>Score your dart game with this simple scoreboard.</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="scoreboard-container">
                                {scoreBoardMarkup}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className="pt-5 mt-5 mw-100" src="/images/cricket.png" />
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default CricketScoreboard;
