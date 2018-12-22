import React, { Component } from 'react';

import { Container, Row, Col, Jumbotron} from 'reactstrap';

class CoinFlip extends Component {

    constructor(props) {
        super(props);
        // Set the state directly. Use props if necessary.
        this.state = {
            coinIsHeads: true,
            coinIsFlipping: false
        }
        this.coinFlip = this.coinFlip.bind(this);

    }

    coinFlip() {
        this.setState({
            coinIsFlipping: true
        });
        setTimeout(() => {
            this.setState({
                coinIsFlipping: false
            });
        }, 500)
        var random = Math.random();
        if (random >= 0.5) {
            this.setState({
                coinIsHeads: true
            })
        } else {
            this.setState({
                coinIsHeads: false
            })
        }
        console.log('coin has flipped');
    }

    render() {
        console.log(this.state.coinIsHeads);

        const flipping = this.state.coinIsFlipping ? " flipping " : "" ;
        const heads = this.state.coinIsHeads ? " active " : "";
        const tails = this.state.coinIsHeads ? "" : " active ";

        return (

            <div className="page_container">
                <Container>
                    <Row>
                        <Col className='mt-4'>
                            <Jumbotron className="mt-2">
                                <h1>Flip A Coin</h1>
                                <p>Heads or tails? Click on the coin to find out.</p>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <span onClick={this.coinFlip} className="coin">
                                <img alt="heads" draggable="false" className={ flipping + heads } src="/images/heads.png" />
                                <img alt="tails" draggable="false" className={ flipping + tails } src="/images/tails.png" />
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default CoinFlip;
