/** @format */

import React, { Component } from "react";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col
} from "reactstrap";

import CreatableSelect from "react-select/lib/Creatable";

import { makeSelectOptionsArray } from "../../../utils/reactSelect";

class AddItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }
    render() {
        let filters = {};

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
                <Button color="link" onClick={this.toggleModal}>
                    Add {this.props.label}
                    <i className="fas fa-plus-circle ml-2"></i>
                </Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Add {this.props.label}
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            {this.props.tableCols.map((item, index) => {
                                return (
                                    <Col xs={12} className="my-2" key={index}>
                                        <CreatableSelect
                                            placeholder={item.label}
                                            options={makeSelectOptionsArray(
                                                filters[item.value]
                                            )}
                                            isClearable={true}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>
                            Submit {this.props.label}
                        </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default AddItemModal;
