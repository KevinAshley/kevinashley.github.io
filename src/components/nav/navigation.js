import React, {
    Component
} from 'react';

import {
    Container,
    Collapse,
    Navbar,
    Button,
    Nav,
    NavItem
} from 'reactstrap';

import {
    Link
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import Account from './account';

const navLinksArray = [{
    name: "Coin Flip",
    uri: "/coin-flip"
}, {
    name: "Cricket Scoreboard",
    uri: "/cricket-scoreboard"
}, {
    name: "Stock Lookup",
    uri: "/stock"
}, {
    name: "River Cricket",
    uri: "/river-cricket",
    hidden: true
}]

class NavigationComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    close() {
        if (this.state.isOpen) {
            this.toggle();
        }
    }

    render() {
        return (<Navbar color="primary" dark className='sticky-top p-0'>
            <div className='w-100'>
                <Container className="main-bar w-100 d-flex px-3 py-2 ">
                    <Link to="/" onClick={this.close} className='navbar-brand'>
                        HOME
                    </Link>
                    <Account close={this.close}/>
                    <Button onClick={this.toggle} type="button" className="navbar-toggler">
                        <i className="fas fa-bars"></i>
                    </Button>
                </Container>

                <Collapse isOpen={this.state.isOpen} className="flex-grow-0 darkened-nav" navbar>
                    <Container>
                        <Nav navbar className="py-3">
                            {
                                navLinksArray.map((item, key) => {
                                    return(
                                        <React.Fragment key={key}>
                                            {
                                                item.hidden && !this.props.loggedIn ?
                                                ""
                                                :
                                                <NavItem>
                                                    <Link key={key} to={item.uri} onClick={this.close} className='nav-link'>{item.name}</Link>
                                                </NavItem>
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }
                        </Nav>
                    </Container>
                </Collapse>
            </div>
        </Navbar>);
    }
}

const mapStateToProps = (state) => {
    const {
        loggedIn
    } = state
    return {
        loggedIn: loggedIn
    }
}

const Navigation = connect(mapStateToProps)(NavigationComponent);

export default Navigation;