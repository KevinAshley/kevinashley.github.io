import React, {Component} from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Jumbotron,
    Button,
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
} from "reactstrap";

import Sales from "../riverCricket/sales";

import Accounts from "../riverCricket/accounts";
import Select from "react-select";
import {connect} from "react-redux";
import {makeSelectOptionsArray} from "../../utils/reactSelect";
const rowsOfJunk = ["1", "1"];
const tabs = [
    {
        name: "Home"
    },
    {
        name: "Sales"
    },
    {
        name: "Inventory"
    },
    {
        name: "Accounts"
    },
    {
        name: "Contacts"
    }
];

class RiverCricketComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        };
        this.changeTabs = this.changeTabs.bind(this);
    }

    changeTabs(tab) {
        this.setState({activeTab: tab});
    }
    render() {
        // console.log("riverCricket props - ", this.props);
        if (!this.props.loggedIn) {
            // if not logged in, then show nothing
            return "";
        }
        return (
            <div className="text-left">
                <Container>
                    <Row>
                        <Col className="mt-4">
                            <Jumbotron className="mt-2 text-center">
                                <h1>River Cricket</h1>
                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Nav tabs className="mb-4">
                                {tabs.map((item, index) => {
                                    return (
                                        <NavItem key={index}>
                                            <NavLink
                                                href="#"
                                                className="px-2"
                                                active={
                                                    this.state.activeTab ==
                                                    index
                                                }
                                                onClick={() =>
                                                    this.changeTabs(index)
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    );
                                })}
                            </Nav>
                        </Col>
                    </Row>
                    {// this is the reporting tab
                    this.state.activeTab == 0 && <p>Reports go here</p>}

                    {// this is the sales tab
                    this.state.activeTab == 1 && <Sales />}
                    {// this is the accounts tab
                    this.state.activeTab == 3 && <Accounts />}
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {loggedIn} = state;
    return {loggedIn: loggedIn};
};
const RiverCricket = connect(mapStateToProps)(RiverCricketComponent);
export default RiverCricket;
