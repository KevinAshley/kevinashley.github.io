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
        this.props.graphData &&
            this.props.graphData[0] &&
            console.log(this.props.graphData[0]);

        return (
            <React.Fragment>
                <Table>
                    <tbody>
                        {this.props.graphData.map((product, productIndex) => {
                            return (
                                <React.Fragment key={productIndex}>
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
