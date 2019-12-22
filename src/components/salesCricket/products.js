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
    Table,
    Spinner
} from "reactstrap";

import { connect } from "react-redux";

import Graph from "./components/graph";

import { getCollectionDocs } from "../../utils/databaseQueries";

import SampleTable from "../salesCricket/sampleTable";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidUpdate() {
        if (this.state.loading && this.props.products) {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        // console.log("products props - ", this.props);
        // console.log("products state - ", this.state);

        return (
            <React.Fragment>
                <div className="text-right mb-4">
                    <Button color="link">
                        Add Product
                        <i className="fas fa-plus-circle ml-2"></i>
                    </Button>
                </div>
                <Row className="mb-4">
                    <Col>
                        {this.state.loading ? (
                            <div className="text-center py-4">
                                <Spinner
                                    style={{ width: "4rem", height: "4rem" }}
                                    color="primary"
                                />
                            </div>
                        ) : (
                            <Graph graphData={this.props.products} />
                        )}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => state;

const ProductsContainer = connect(mapStateToProps)(Products);

export default ProductsContainer;
