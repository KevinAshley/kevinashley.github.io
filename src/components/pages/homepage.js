import React, { Component } from 'react';

import { Button } from 'reactstrap';

class Homepage extends Component {
  render() {
    return (

        <div className="page_container">
            <p className="App-intro">
              This is the homepage
            </p>

            <Button>
                Press Me Now
            </Button>
        </div>

    );
  }
}

export default Homepage;
