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

class Graph extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Table bordered responsive>
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>
                                <span className="text-nowrap">Product</span>
                            </th>
                            <th>
                                <span className="text-nowrap">Opt. 1</span>
                            </th>
                            <th>
                                <span className="text-nowrap">Opt. 2</span>
                            </th>
                            <th>
                                <span className="text-nowrap">Price</span>
                            </th>
                            <th>
                                <span className="text-nowrap">Stock</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.graphData.map((product, productIndex) => {
                            const rowColor = productIndex & 1 ? "bg-light" : "";
                            return (
                                <React.Fragment key={productIndex}>
                                    {product.inventory && (
                                        <React.Fragment key={productIndex}>
                                            {product.inventory.map(
                                                (inventory, unitIndex) => {
                                                    return (
                                                        <tr
                                                            key={unitIndex}
                                                            className={rowColor}
                                                        >
                                                            <td>
                                                                {product.name}
                                                            </td>
                                                            {inventory.options && (
                                                                <React.Fragment>
                                                                    <td>
                                                                        {
                                                                            inventory
                                                                                .options[0]
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            inventory
                                                                                .options[1]
                                                                        }
                                                                    </td>
                                                                </React.Fragment>
                                                            )}
                                                            <td>
                                                                $
                                                                {
                                                                    inventory.price
                                                                }
                                                            </td>
                                                            <td>
                                                                {inventory.qty}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

export default Graph;
