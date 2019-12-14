import React, {
    Component
} from 'react';

import {
    Container,
    Row,
    Col,
    Jumbotron,
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
    Form,
    FormGroup,
    Label,
    Input,
    ListGroup,
    ListGroupItem,
    Table
} from 'reactstrap';

import {
    connect
} from 'react-redux';

const rowsOfJunk = ["1", "1"]

class RiverCricketComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    render() {

        // console.log("riverCricket props - ", this.props);

        if (!this.props.loggedIn) {
            // if not logged in, then show nothing
            return "";
        }

        return (<div className="text-left">
            <Container>
                <Row>
                    <Col className='mt-4'>
                        <Jumbotron className="mt-2 text-center">
                            <h1>River Cricket</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav tabs className="mb-4">
                            <NavItem>
                                <NavLink href="#" active>Link</NavLink>
                            </NavItem>
                            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink href="#">Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Another Link</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">Disabled Link</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <ListGroup>
                            <ListGroupItem color="success">Cras justo odio</ListGroupItem>
                            <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
                            <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={6}>
                        <ListGroup>
                            <ListGroupItem color="primary">Cras justo odio</ListGroupItem>
                            <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
                            <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem color="secondary">Porta ac consectetur ac</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>

                {
                    rowsOfJunk.map((item, key) => {
                        return (<Row key={key} form className="mb-4">
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input type="text" name="city" id="exampleCity"/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">State</Label>
                                    <Input type="text" name="state" id="exampleState"/>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="exampleZip">Zip</Label>
                                    <Input type="text" name="zip" id="exampleZip"/>
                                </FormGroup>
                            </Col>
                        </Row>)
                    })
                }

                <Row className="mb-4">
                    <Col>
                        <Table hover size="sm" dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twittesr</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>);
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

const RiverCricket = connect(mapStateToProps)(RiverCricketComponent);

export default RiverCricket;