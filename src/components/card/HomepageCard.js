import React, { Component } from 'react';

import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import { connect } from 'react-redux';

import {
  changeCardAppearance
} from '../../redux';

class HomepageCard extends Component {
  render() {

    return (
        <Card className="hp-card-container">
          {this.props.cardState.changed ?
            <CardImg top width="100%" src="images/owl.jpeg" alt="Card image cap" className="invert"/>
          :
            <CardImg top width="100%" src="images/owl.jpeg" alt="Card image cap" />
          }
          <CardBody>
            <CardTitle>Card With Redux State</CardTitle>

            <CardText>The state of this card is managed by the redux store.
                Visit another page and return to find the card in the same state you left it.
            </CardText>

            {this.props.cardState.changed ?
              <Button onClick={() => this.props.changeCardAppearance({changed: false})} color="secondary">
                Unclick me
              </Button> :
              <Button onClick={() => this.props.changeCardAppearance({changed: true})} color="primary">
                Click me!
              </Button>
            }

          </CardBody>
        </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => (state);

const mapDispatchToProps = {
  changeCardAppearance
};

const HomepageCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageCard);

export default HomepageCardContainer;
