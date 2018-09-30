import React, { Component } from 'react';

import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import { connect } from 'react-redux';

import {
  activateGeod,
  closeGeod,
} from '../../redux';

class HomepageCard extends Component {
  render() {
    return (
        <Card className="hp-card-container">
          {this.props.geod.title ?
            <CardImg top width="100%" src="images/owl.jpeg" alt="Card image cap" />
          :
            <CardImg top width="100%" src="images/owl.jpeg" alt="Card image cap" className="invert"/>
          }
          <CardBody>
            <CardTitle>Card With Redux State</CardTitle>

            <CardText>The state of this card is managed by the redux store.
                Visit another page and return to find the card in the same state you left it.
            </CardText>

            {this.props.geod.title ?
              <Button onClick={this.props.closeGeod} color="danger">
                Unclick me
              </Button> :
              <Button onClick={() => this.props.activateGeod({ title: 'Redux that!' })} color="primary">
                Click me!
              </Button>
            }

          </CardBody>
        </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const HomepageCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageCard);

export default HomepageCardContainer;
