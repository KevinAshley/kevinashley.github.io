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
            collapseOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    render() {
        console.log(this.props);
        // this.props.filterData(this.props.tableData);

        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} color="light">
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
                                            onClick={this.toggleCollapse}
                                            color="link"
                                            block
                                        >
                                            {item.label}
                                            <i className="fas fa-chevron-down ml-2"></i>
                                        </Button>
                                        <Collapse
                                            isOpen={this.state.collapseOpen}
                                        >
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{" "}
                                                    Filter 1
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="checkbox" />{" "}
                                                    Filter 2
                                                </Label>
                                            </FormGroup>
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
