import React, {
    Component
} from "react";

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
    Table
} from "reactstrap";

import AddSale from "../riverCricket/addSale";
import SampleTable from "../riverCricket/sampleTable";

import Select from "react-select";
import {connect} from "react-redux";
import {makeSelectOptionsArray} from "../../utils/reactSelect";

const rowsOfJunk = ["1", "1"];
const tabs = [
    {
        name: "Reports"
    },
    {
        name: "Sales"
    },
    {
        name: "Inventory"
    },
    {
        name: "Accounts"
    },
    {
        name: "Contacts"
    }
];
const storeInputs = [
    {
        placeholer: "Account",
        xsWidth: 12
    }
];
const qtyOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const newSaleFields = [
    {
        fieldType: "input",
        placeholer: "Beer",
        xsWidth: 12,
        mdWidth: 4
    },
    {
        fieldType: "input",
        placeholer: "Packaging",
        xsWidth: 5,
        mdWidth: 4
    },
    {
        fieldType: "input",
        placeholer: "Qty",
        xsWidth: 5,
        mdWidth: 3,
        options: makeSelectOptionsArray(qtyOptions)
    },
    {
        fieldType: "remove",
        placeholer: "Remove",
        xsWidth: 2,
        mdWidth: 1
    }
];

class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderItems: ["testOrder"],
            addSaleModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            addSaleModalOpen: !this.state.addSaleModalOpen
        })
    }

    render() {
        return (
            <React.Fragment>

                <div className="text-right mb-4">
                    <Button
                        color="link"
                        onClick={this.toggleModal}
                    >
                        Add Sale
                        <i className="fas fa-plus-circle ml-2"></i>
                    </Button>

                </div>

                <Row className="mb-4">
                    <Col>
                        <SampleTable />
                    </Col>
                </Row>

                <AddSale
                    isOpen={this.state.addSaleModalOpen}
                    toggle={this.toggleModal}
                />

            </React.Fragment>
        );
    }
}

export default Sales;
