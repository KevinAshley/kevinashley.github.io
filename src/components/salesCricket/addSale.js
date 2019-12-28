/** @format */

import React, { Component } from "react";

import {
    Row,
    Col,
    Card,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

import Select from "react-select";

import { makeSelectOptionsArray } from "../../utils/reactSelect";

const storeInputs = [
    {
        placeholer: "Store",
        xsWidth: 12
    }
];
const qtyOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const newSaleFields = [
    {
        fieldType: "input",
        placeholer: "Beer",
        xsWidth: 12,
        mdWidth: 12
    },
    {
        fieldType: "input",
        placeholer: "Packaging",
        xsWidth: 7,
        mdWidth: 6
    },
    {
        fieldType: "input",
        placeholer: "Qty",
        xsWidth: 5,
        mdWidth: 6,
        options: makeSelectOptionsArray(qtyOptions)
    }
];

class AddSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderItems: ["testOrder"]
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        var orderItems = JSON.parse(JSON.stringify(this.state.orderItems));
        orderItems.push("testOrder");
        this.setState({ orderItems: orderItems });
    }
    removeItem() {
        var orderItems = JSON.parse(JSON.stringify(this.state.orderItems));
        orderItems.pop();
        this.setState({ orderItems: orderItems });
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    toggle={this.props.toggle}
                    isOpen={this.props.isOpen}
                    className="mb-4"
                >
                    <ModalHeader toggle={this.props.toggle}>
                        New Sale
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            {storeInputs.map((item, index) => {
                                return (
                                    <Col
                                        key={index}
                                        xs={item.xsWidth}
                                        className="my-3"
                                    >
                                        <Select placeholder={item.placeholer} />
                                    </Col>
                                );
                            })}
                            <Col>
                                {this.state.orderItems.map(
                                    (orderItem, orderIndex) => {
                                        return (
                                            <Card
                                                key={orderIndex}
                                                className="pt-3 px-3 my-3 bg-light"
                                            >
                                                <div className="d-flex flex-nowrap">
                                                    <div className="flex-grow-1">
                                                        <Row>
                                                            {newSaleFields.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <React.Fragment
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <Col
                                                                                xs={
                                                                                    item.xsWidth
                                                                                }
                                                                                md={
                                                                                    item.mdWidth
                                                                                }
                                                                                className="mb-3"
                                                                            >
                                                                                <Select
                                                                                    options={
                                                                                        item.options
                                                                                    }
                                                                                    clearable="clearable"
                                                                                    placeholder={
                                                                                        item.placeholer
                                                                                    }
                                                                                />
                                                                            </Col>
                                                                        </React.Fragment>
                                                                    );
                                                                }
                                                            )}
                                                        </Row>
                                                    </div>
                                                    <div className="pb-3 pl-3 d-flex align-items-center">
                                                        <Button
                                                            onClick={
                                                                this.removeItem
                                                            }
                                                            color="link"
                                                            className={
                                                                this.state
                                                                    .orderItems
                                                                    .length == 1
                                                                    ? "disabled"
                                                                    : "text-danger"
                                                            }
                                                        >
                                                            <i className="fas fa-minus-circle"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Card>
                                        );
                                    }
                                )}
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="light" onClick={this.addItem}>
                            <i className="fas fa-plus-circle mr-2"></i>
                            Add Item
                        </Button>
                        <Button color="primary" onClick={this.props.toggle}>
                            Submit Sale
                        </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AddSale;
