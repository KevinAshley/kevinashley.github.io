import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CreatableSelect from 'react-select/lib/Creatable';

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
            modalIsOpen: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateScores = this.updateScores.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.resetScoreboard = this.resetScoreboard.bind(this);

        this.opponentOneScore = 0;
        this.opponentTwoScore = 0;

    }

    resetScoreboard() {
        this.setState({
            opponentOne: []
        });
        this.setState({
            opponentTwo: []
        });

        this.opponentOneScore = 0;
        this.opponentTwoScore = 0;

        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    updateScores(opponent) {
        var nextScore = 0;
        for (var i = 0 ; i < 7 ; i++) {
            // this.opponentOneScore = this.opponentOneScore + (this.state.opponentOne[i] * items[i]['value']);
            if (this.state[opponent][i] > 3) {
                nextScore = nextScore + ((this.state[opponent][i] - 3) * items[i]['value']);
            }
        }
        console.log(opponent + ' score is ' + nextScore);
        if (opponent === 'opponentOne') {
            this.opponentOneScore = nextScore;
        }
        if (opponent === 'opponentTwo') {
            this.opponentTwoScore = nextScore;
        }
    }

    handleChange(index, opponent, direction) {

        var newObject = this.state[opponent];
        var lastTally = this.state[opponent][index];
        var nextTally = 0;
        if (lastTally === undefined) {
            lastTally = 0;
        }
        if (direction === "increase") {
            nextTally = lastTally + 1;
        } else {
            nextTally = lastTally - 1;
            if (nextTally < 0) {
                nextTally = 0;
            }
        }
        newObject[index] = nextTally;
        if (opponent === "opponentOne") {
            this.setState({
                opponentOne: newObject
            });
        }
        if (opponent === "opponentTwo") {
            this.setState({
                opponentTwo: newObject
            });
        }
        this.updateScores(opponent);

    }


    render() {

        const scoreBoardMarkup = items.map((item, index) => {
            return (
                <div key={index} className="row text-center flex-nowrap mb-2 pb-2 border-bottom">

                    <Col className="w-100 text-right">

                        <ButtonGroup className="w-100">
                            <Button onClick={() => {this.handleChange(index, 'opponentOne', "decrease")}} color={ this.state.opponentOne[index] > 2 && this.state.opponentTwo[index] > 2 ? "light" : "primary"} ><i className="fas fa-minus-circle"></i></Button>
                            <Button className="btn-outline-dark disabled counter w-100">
                                {
                                    this.state.opponentOne[index] === null || this.state.opponentOne[index] === 0 ? <span>&nbsp;</span> :
                                    this.state.opponentOne[index] === 1 ? <div className="right-slash">|</div> :
                                    this.state.opponentOne[index] === 2 ? <div className="slash-container"><span className="x-symbol">&#10005;</span></div> :
                                    this.state.opponentOne[index] === 3 ? <div className="slash-container"><span className="x-symbol">&#10005;</span><i className="fas fa-circle-notch circle-slash"></i></div> :
                                    this.state.opponentOne[index] > 3 ? "+" + (this.state.opponentOne[index] - 3) : ""
                                }
                            </Button>
                            <Button onClick={() => {this.handleChange(index, 'opponentOne', "increase")}} color={ this.state.opponentOne[index] > 2 && this.state.opponentTwo[index] > 2 ? "light" : "primary"} className="ml-0" ><i className="fas fa-plus-circle"></i></Button>
                        </ButtonGroup>
                    </Col>

                    <Col className={ this.state.opponentOne[index] > 2 && this.state.opponentTwo[index] > 2 ? "closed-out text-danger target-label col-2" : "target-label col-2"}>{ index === 6 ? <i className="bullseye far fa-dot-circle"></i> : items[index]['label']}</Col>

                    <Col className="w-100 text-right">

                        <ButtonGroup className="w-100">
                            <Button onClick={() => {this.handleChange(index, 'opponentTwo', "decrease")}} color={ this.state.opponentOne[index] > 2 && this.state.opponentTwo[index] > 2 ? "light" : "secondary"}><i className="fas fa-minus-circle"></i></Button>
                            <Button className="btn-outline-dark disabled counter w-100">
                                {
                                    this.state.opponentTwo[index] === null || this.state.opponentTwo[index] === 0 ? <span>&nbsp;</span> :
                                    this.state.opponentTwo[index] === 1 ? <div className="right-slash">|</div> :
                                    this.state.opponentTwo[index] === 2 ? <div className="slash-container"><span className="x-symbol">&#10005;</span></div> :
                                    this.state.opponentTwo[index] === 3 ? <div className="slash-container"><span className="x-symbol">&#10005;</span><i className="fas fa-circle-notch circle-slash"></i></div> :
                                    this.state.opponentTwo[index] > 3 ? "+" + (this.state.opponentTwo[index] - 3) : ""
                                }
                            </Button>
                            <Button onClick={() => {this.handleChange(index, 'opponentTwo', "increase")}} color={ this.state.opponentOne[index] > 2 && this.state.opponentTwo[index] > 2 ? "light" : "secondary"} className="ml-0"><i className="fas fa-plus-circle"></i></Button>
                        </ButtonGroup>
                    </Col>

                </div>
            );
        });

        return (

            <div className="page_container cricket-scoreboard-page-container">
                <Container>
                    <Row>
                        <Col className='mt-4'>
                            <Jumbotron className="mt-2">
                                <h1>Cricket Scoreboard</h1>
                                <p>Score your dart game with this mobile optimized cricket scoreboard.</p>

                                    <Button color="light" onClick={this.toggleModal}>Reset Scoreboard</Button>

                                    <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal} >
                                      <ModalHeader toggle={this.toggleModal}>Are you sure?</ModalHeader>
                                      <ModalBody>
                                        No undo...
                                      </ModalBody>
                                      <ModalFooter>
                                        <Button color="danger" onClick={this.resetScoreboard}>Reset Scoreboard</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                      </ModalFooter>
                                    </Modal>

                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-5">
                            <CreatableSelect
                                placeholder="Player 1"
                                classNamePrefix="cricket-name-select"
                                formatCreateLabel={(inputValue) => `` + inputValue}
                                isClearable
                            />

                        </Col>
                        <Col className="col-2 versus-text">
                            VS
                        </Col>
                        <Col className="col-5">
                            <CreatableSelect
                                placeholder="Player 2"
                                classNamePrefix="cricket-name-select"
                                formatCreateLabel={(inputValue) => `` + inputValue}
                                isClearable
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr className="mb-2"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="scoreboard-container">
                                {scoreBoardMarkup}
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="col-5 player-score">
                            {this.opponentOneScore}
                        </Col>
                        <Col className="col-2">
                        </Col>
                        <Col className="col-5 player-score">
                            {this.opponentTwoScore}
                        </Col>
                    </Row>

                </Container>
            </div>

        );
    }
}

export default CricketScoreboard;
