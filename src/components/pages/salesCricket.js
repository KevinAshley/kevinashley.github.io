/** @format */

import React, { Component } from "react";
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

import Sales from "../salesCricket/sales";
import Products from "../salesCricket/products";
import Stores from "../salesCricket/stores";
import Select from "react-select";
import { connect } from "react-redux";
import { makeSelectOptionsArray } from "../../utils/reactSelect";

import * as firebase from "firebase/app";
import "firebase/firestore";

import { getCollectionDocs } from "../../utils/databaseQueries";

var database = firebase.firestore();

const rowsOfJunk = ["1", "1"];
const tabs = [
    {
        name: "Home"
    },
    {
        name: "Sales"
    },
    {
        name: "Products"
    },
    {
        name: "Stores"
    },
    {
        name: "Contacts"
    }
];

class SalesCricketComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2,
            data: undefined,
            renderTrigger: true
        };

        this.docs = [];

        this.changeTabs = this.changeTabs.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        // console.log("hello");
        this.setState({
            data: this.docs[0],
            renderTrigger: !this.state.renderTrigger
        });
    }

    componentDidUpdate() {
        if (database && this.props.accountId && !this.state.accountRef) {
            this.setState({
                accountRef: database
                    .collection("accounts")
                    .doc(this.props.accountId)
            });
        }
        if (this.state.accountRef && !this.state.requestedData) {
            this.setState(
                {
                    requestedData: true
                },
                getCollectionDocs(
                    database,
                    "accounts",
                    this.docs,
                    this.updateData
                )
            );
        }
    }

    changeTabs(tab) {
        this.setState({ activeTab: tab });
    }
    render() {
        // console.log("SalesCricket props - ", this.props);
        // console.log("SalesCricket state - ", this.state);
        // console.log("this.docs - ", this.docs);

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
                                <h1>Sales Cricket</h1>
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
                    {// this is the products tab
                    this.state.activeTab == 2 && (
                        <Products
                            products={
                                this.state.data
                                    ? this.state.data.products
                                    : undefined
                            }
                            renderTrigger={this.state.renderTrigger}
                        />
                    )}
                    {// this is the accounts tab
                    this.state.activeTab == 3 && <Stores />}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => state;

const SalesCricket = connect(mapStateToProps)(SalesCricketComponent);

export default SalesCricket;
