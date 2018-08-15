import React, { Component } from 'react';

import { Button } from 'reactstrap';

class Subpage extends Component {
  render() {
    return (

        <div className="page_container">
            <p className="App-intro">
              This is a subpage
            </p>

            <Button>
                BUTTON
            </Button>
        </div>

    );
  }
}

export default Subpage;
