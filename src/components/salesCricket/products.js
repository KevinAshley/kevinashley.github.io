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

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log("products props - ", this.props);
        // console.log("products state - ", this.state);
        const tableCols = [
            {
                label: "Name",
                value: "name"
            },
            {
                label: "Opt. 1",
                value: 0
            },
            {
                label: "Opt. 2",
                value: 1
            },
            {
                label: "Price",
                value: "price"
            },
            {
                label: "Qty",
                value: "qty"
            }
        ];
        const tableData = [];

        if (this.props.products) {
            this.props.products.map(product => {
                if (product.inventory) {
                    product.inventory.map((unit, unitIndex) => {
                        var thisUnit = {};
                        if (unit.options) {
                            thisUnit[tableCols[0].value] =
                                product[tableCols[0].value];
                            thisUnit[tableCols[1].value] =
                                unit.options[tableCols[1].value];
                            thisUnit[tableCols[2].value] =
                                unit.options[tableCols[2].value];
                            thisUnit[tableCols[3].value] =
                                unit[tableCols[3].value];
                            thisUnit[tableCols[4].value] =
                                unit[tableCols[4].value];
                        }
                        tableData.push(thisUnit);
                    });
                }
            });
        }

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
                        {!this.props.products ? (
                            <div className="text-center py-4">
                                <Spinner
                                    style={{ width: "4rem", height: "4rem" }}
                                    color="primary"
                                />
                            </div>
                        ) : (
                            <CustomTable
                                tableCols={tableCols}
                                tableData={tableData}
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
