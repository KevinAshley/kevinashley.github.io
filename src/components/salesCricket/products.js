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

// import Graph from "./components/graph";
import CustomTable from "./components/customTable";

import { getCollectionDocs } from "../../utils/databaseQueries";

import SampleTable from "../salesCricket/sampleTable";

import { productsTableData, filteredTableData } from "./utils/tableData";

import Filters from "./components/filters";

class Products extends Component {
    constructor(props) {
        super(props);

        this.tableCols = [
            {
                label: "Name",
                value: "name",
                exclude: []
            },
            {
                label: "Opt. 1",
                value: 0,
                exclude: []
            },
            {
                label: "Opt. 2",
                value: 1,
                exclude: []
            },
            {
                label: "Price",
                value: "price",
                exclude: []
            },
            {
                label: "Qty",
                value: "qty",
                exclude: []
            }
        ];
        this.state = {
            tableCols: this.tableCols
        };
        this.updateFilters = this.updateFilters.bind(this);
    }

    updateFilters(col, exclusion) {
        var newState = JSON.parse(JSON.stringify(this.state));
        newState.tableCols.map(item => {
            if (item.value == col) {
                if (item.exclude.includes(exclusion)) {
                    item.exclude.splice(item.exclude.indexOf(exclusion), 1);
                } else {
                    item.exclude.push(exclusion);
                }
            }
        });
        this.setState(newState);
    }

    render() {
        // console.log("products props - ", this.props);
        // console.log("products state - ", this.state);
        const tableData = productsTableData(
            this.props.products,
            this.state.tableCols
        );

        const filteredData = filteredTableData(tableData, this.state.tableCols);

        return (
            <React.Fragment>
                <div className="d-flex justify-content-between mb-4">
                    <Filters
                        tableCols={this.state.tableCols}
                        tableData={tableData}
                        updateFilters={this.updateFilters}
                    />
                    <Button color="link">
                        Add Product
                        <i className="fas fa-plus-circle ml-2"></i>
                    </Button>
                </div>
                <Row className="mb-4">
                    <Col>
                        {!this.props.products ? (
                            <div className="text-center py-4">
                                <Spinner
                                    style={{ width: "4rem", height: "4rem" }}
                                    color="primary"
                                />
                            </div>
                        ) : (
                            <CustomTable
                                tableCols={this.state.tableCols}
                                tableData={filteredData}
                            />
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
