/** @format */

import React, { Component } from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
    Collapse,
    Input,
    FormGroup,
    Label
} from "reactstrap";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            collapseOpen: {}
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse(item) {
        var newState = JSON.parse(JSON.stringify(this.state));
        if (!newState.collapseOpen[item]) {
            newState.collapseOpen[item] = true;
        } else {
            newState.collapseOpen[item] = false;
        }
        this.setState(newState);
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    render() {
        // console.log(this.props);
        // this.props.filterData(this.props.tableData);

        const filters = {};

        this.props.tableCols.map(item => {
            filters[item.value] = [];
            this.props.tableData.map(dataItem => {
                if (!filters[item.value].includes(dataItem[item.value])) {
                    filters[item.value].push(dataItem[item.value]);
                }
            });
        });

        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} color="link">
                    <i className="fas fa-filter mr-2"></i>
                    Filters
                </Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>Filters</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            {this.props.tableCols.map((item, index) => {
                                return (
                                    <ListGroupItem key={index}>
                                        <Button
                                            onClick={() =>
                                                this.toggleCollapse(item.value)
                                            }
                                            color="link"
                                            block
                                        >
                                            {item.label} (show all)
                                            {this.state.collapseOpen[
                                                item.value
                                            ] ? (
                                                <i className="fas fa-chevron-up ml-2"></i>
                                            ) : (
                                                <i className="fas fa-chevron-down ml-2"></i>
                                            )}
                                        </Button>
                                        <Collapse
                                            isOpen={
                                                this.state.collapseOpen[
                                                    item.value
                                                ]
                                            }
                                        >
                                            {filters[item.value].map(
                                                (dataItem, dataItemIndex) => {
                                                    return (
                                                        <FormGroup
                                                            key={dataItemIndex}
                                                            check
                                                        >
                                                            <Label check>
                                                                <Input type="checkbox" />{" "}
                                                                {dataItem}
                                                            </Label>
                                                        </FormGroup>
                                                    );
                                                }
                                            )}
                                        </Collapse>
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <Button color="danger" onClick={this.toggleModal}>
                            Reset Filters
                        </Button>{" "}
                        <Button color="primary" onClick={this.toggleModal}>
                            Done
                        </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Filters;
