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
        return "";
        return (
            <React.Fragment>
                <Table>
                    <tbody>
                        {this.props.graphData.map((product, productIndex) => {
                            return (
                                <React.Fragment key={productIndex}>
                                    <tr>
                                        <td>{product.name}</td>
                                    </tr>
                                    {product.inventory &&
                                        product.inventory.map(
                                            (inventory, unitIndex) => {
                                                return (
                                                    <tr key={unitIndex}>
                                                        {inventory.options &&
                                                            inventory.options.map(
                                                                (
                                                                    option,
                                                                    optionIndex
                                                                ) => {
                                                                    return (
                                                                        <td
                                                                            key={
                                                                                optionIndex
                                                                            }
                                                                        >
                                                                            {
                                                                                option[
                                                                                    optionIndex
                                                                                ]
                                                                            }
                                                                        </td>
                                                                    );
                                                                }
                                                            )}
                                                    </tr>
                                                );
                                            }
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
