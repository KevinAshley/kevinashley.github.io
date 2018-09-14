import React, {
  Component,
} from 'react';

import { Button } from 'reactstrap';

import { connect } from 'react-redux';

import {
  activateGeod,
  closeGeod,
} from '../../redux';

export class Reduxjunk extends Component {
  render() {
    return (
        <div className="crapola">
            <hr />
            <p>{this.props.geod.title || 'Redux this!'}</p>

            {this.props.geod.title ?
              <Button onClick={this.props.closeGeod}>
                Unclick me
              </Button> :
              <Button onClick={() => this.props.activateGeod({ title: 'Redux that!' })}>
                Click me!
              </Button>
            }

        </div>
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

const ReduxjunkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reduxjunk);

export default ReduxjunkContainer;
