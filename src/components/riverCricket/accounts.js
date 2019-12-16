import React, {Component} from "react";

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

import Select from "react-select";

const product = {
    name: "Junk Beer",
    description: "IPA",
    packaging: {
        keg: ["5 gallon", "15.5 gallon"],
        case: ["16oz cans", "22oz bottles"]
    }
};

const contact = {
    name: "Steve Erwin",
    title: "Manager",
    phone: "916-555-3333",
    email: "steve@email.com"
};

const qtyOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const makeSelectOptionsArray = optionsArray => {
    let newOptions = [];
    optionsArray.map((item, index) => {
        newOptions[index] = {
            label: item,
            value: item
        };
    });
    console.log("newOptions");
    return newOptions;
};

const newSaleFields = [
    {
        fieldType: "input",
        placeholer: "Company",
        xsWidth: 12,
        mdWidth: 4
    },
    {
        fieldType: "input",
        placeholer: "Address",
        xsWidth: 5,
        mdWidth: 4
    },
    {
        fieldType: "input",
        placeholer: "Phone",
        xsWidth: 5,
        mdWidth: 4,
        options: makeSelectOptionsArray(qtyOptions)
    }
];

const accountSample = {
    name: "Raleys",
    address: "123 fake street",
    phone: "123-123-4567",
    primaryContact: "Steve Erwin",
    secondaryContact: "James Smith"
};

const getObjectIndexArray = object => {
    let indexArray = [];
    Object.keys(object).forEach((key, index) => {
        indexArray[index] = key;
    });
    return indexArray;
};

const accountsArray = [accountSample, accountSample, accountSample];

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderItems: ["testOrder"]
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-right mb-4">
                    <Button color="link">
                        Add Account
                        <i class="fas fa-plus-circle ml-2"></i>
                    </Button>
                </div>

                <Row className="mb-4">
                    <Col>
                        <Table striped className="bg-light mb-4">
                            <thead>
                                <tr>
                                    {getObjectIndexArray(accountSample).map(
                                        (item, index) => {
                                            return <th key={index}>{item}</th>;
                                        }
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {getObjectIndexArray(accountSample).map(
                                        (item, index) => {
                                            return <td key={index}>{item}</td>;
                                        }
                                    )}
                                </tr>
                                <tr>
                                    {getObjectIndexArray(accountSample).map(
                                        (item, index) => {
                                            return <td key={index}>{item}</td>;
                                        }
                                    )}
                                </tr>
                                <tr>
                                    {getObjectIndexArray(accountSample).map(
                                        (item, index) => {
                                            return <td key={index}>{item}</td>;
                                        }
                                    )}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Accounts;
