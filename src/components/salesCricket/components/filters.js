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
    Label,
    Container,
    Row,
    Col
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
            newState.collapseOpen = {};
            newState.collapseOpen[item] = true;
        } else {
            newState.collapseOpen[item] = false;
        }
        this.setState(newState);
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
            collapseOpen:
                this.state.modalIsOpen == false ? {} : this.state.collapseOpen
        });
    }

    render() {
        // console.log(this.props);
        // this.props.filterData(this.props.tableData);

        let filters = {};
        let filtersStrings = {};
        let filtersApplied = false;

        this.props.tableCols.map(item => {
            if (item.exclude.length > 0) {
                filtersApplied = true;
            }
            filters[item.value] = [];
            filtersStrings[item.value] = [];
            this.props.tableData.map(dataItem => {
                if (!filters[item.value].includes(dataItem[item.value])) {
                    filters[item.value].push(dataItem[item.value]);
                    if (!item.exclude.includes(dataItem[item.value])) {
                        filtersStrings[item.value].push(dataItem[item.value]);
                    }
                }
            });
        });

        return (
            <React.Fragment>
                <Button
                    onClick={this.toggleModal}
                    color={filtersApplied ? "light" : "link"}
                    outline={filtersApplied ? false : false}
                >
                    <i className="fas fa-filter mr-2"></i>
                    Filter{filtersApplied ? "ed ..." : "s"}
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
                                            className="d-flex"
                                        >
                                            <span className="text-nowrap">
                                                {item.label}&nbsp;(
                                            </span>
                                            {item.exclude.length > 0 ? (
                                                <span className="text-left position-relative flex-shrink-1 overflow-hidden text-overflow-ellipses min-width-0">
                                                    <span className="text-nowrap">
                                                        {filtersStrings[
                                                            item.value
                                                        ].length == 0 ? (
                                                            <span>none</span>
                                                        ) : (
                                                            <React.Fragment>
                                                                {filtersStrings[
                                                                    item.value
                                                                ].join(", ")}
                                                            </React.Fragment>
                                                        )}
                                                    </span>
                                                </span>
                                            ) : (
                                                "show all"
                                            )}
                                            <span className="text-nowrap">
                                                {")"}
                                                {this.state.collapseOpen[
                                                    item.value
                                                ] ? (
                                                    <i className="fas fa-chevron-up ml-2"></i>
                                                ) : (
                                                    <i className="fas fa-chevron-down ml-2"></i>
                                                )}
                                            </span>
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
                                                                <Input
                                                                    type="checkbox"
                                                                    onChange={() =>
                                                                        this.props.updateFilters(
                                                                            item.value,
                                                                            dataItem
                                                                        )
                                                                    }
                                                                    checked={
                                                                        item.exclude.includes(
                                                                            dataItem
                                                                        )
                                                                            ? false
                                                                            : true
                                                                    }
                                                                />{" "}
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
                        <Container className="px-0">
                            <Row>
                                <Col xs={6}>
                                    <Button
                                        color="danger"
                                        onClick={() =>
                                            this.props.updateFilters(
                                                "",
                                                "",
                                                true
                                            )
                                        }
                                        outline={true}
                                        block
                                    >
                                        Reset Filters
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <Button
                                        color="primary"
                                        onClick={this.toggleModal}
                                        block
                                    >
                                        Done
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Filters;
