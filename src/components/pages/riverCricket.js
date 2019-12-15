import React, {
    Component
} from 'react';

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
} from 'reactstrap';

import Accounts from "../riverCricket/accounts";

import Select from 'react-select';

import {
    connect
} from 'react-redux';

const rowsOfJunk = ["1", "1"];

const product = {
    name: "Junk Beer",
    description: "IPA",
    packaging: {
        keg: [
            '5 gallon',
            '15.5 gallon'
        ],
        case: [
            "16oz cans",
            "22oz bottles"
        ]
    }
}

const accountSample = {
    name: "Raleys",
    address: "123 fake street",
    phone: "123-123-4567",
    primaryContact: "Steve Erwin",
    secondaryContact: "James Smith"
}

const contact = {
    name: "Steve Erwin",
    title: "Manager",
    phone: "916-555-3333",
    email: "steve@email.com"
}

const tabs = [{
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
]

const storeInputs = [{
    placeholer: "Account",
    xsWidth: 12
}]

const qtyOptions = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
]

const makeSelectOptionsArray = (optionsArray) => {
    let newOptions = [];
    optionsArray.map((item, index) => {
        newOptions[index] = {
            label: item,
            value: item
        };
    })
    console.log('newOptions');
    return newOptions;
}

const newSaleFields = [{
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
]



class RiverCricketComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 3,
            orderItems: [
                "testOrder"
            ]
        }
        this.changeTabs = this.changeTabs.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        var orderItems = JSON.parse(JSON.stringify(this.state.orderItems));
        orderItems.push("testOrder");
        this.setState({
            orderItems: orderItems
        })
    }

    removeItem() {
        var orderItems = JSON.parse(JSON.stringify(this.state.orderItems));
        orderItems.pop();
        this.setState({
            orderItems: orderItems
        })
    }

    changeTabs(tab) {
        this.setState({
            activeTab: tab
        })
    }

    render() {

        // console.log("riverCricket props - ", this.props);

        if (!this.props.loggedIn) {
            // if not logged in, then show nothing
            return "";
        }

        return (<div className="text-left">
            <Container>
                <Row>
                    <Col className='mt-4'>
                        <Jumbotron className="mt-2 text-center">
                            <h1>River Cricket</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav tabs className="mb-4">
                            {
                                tabs.map((item, index) => {
                                    return(
                                        <NavItem key={index}>
                                            <NavLink
                                                href="#"
                                                active={this.state.activeTab == index}
                                                onClick={() => this.changeTabs(index)}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    )

                                })
                            }
                        </Nav>
                    </Col>
                </Row>

                {
                    // this is the reporting tab
                    this.state.activeTab == 0 &&
                    <p>
                        Reports go here
                    </p>
                }

                {
                    // this is the sales tab
                    this.state.activeTab == 1 &&
                    <React.Fragment>
                        <Card className="p-4 mb-4 bg-light">
                            <h4 className="text-center mb-4">
                                New Sale
                            </h4>
                            <Row>
                                {
                                    storeInputs.map((item, index) => {
                                        return(
                                            <Col key={index} xs={item.xsWidth} className="mb-3">
                                                <Select placeholder={item.placeholer} />
                                            </Col>
                                        )

                                    })
                                }
                                <Col>

                                        {this.state.orderItems.map((orderItem, orderIndex) => {
                                            return(
                                                <Card className="pt-3 px-4 mb-4">
                                                    <Row key={orderIndex}>
                                                        {
                                                            newSaleFields.map((item, index) => {
                                                                return(
                                                                    <React.Fragment>
                                                                        {
                                                                            item.fieldType == "remove" ?
                                                                            <Col key={index} xs={item.xsWidth} md={item.mdWidth} className="mb-3">
                                                                                <div className="d-flex justify-content-center align-items-center h-100">
                                                                                    <Button onClick={this.removeItem} color="link" className={this.state.orderItems.length == 1 ? "disabled p-0" : "p-0"}>
                                                                                        <i className="fas fa-minus-circle"></i>
                                                                                    </Button>
                                                                                </div>
                                                                            </Col>
                                                                            :
                                                                            <Col key={index} xs={item.xsWidth} md={item.mdWidth} className="mb-3">
                                                                                <Select options={item.options} clearable placeholder={item.placeholer} />
                                                                            </Col>
                                                                        }

                                                                    </React.Fragment>

                                                                )

                                                            })
                                                        }
                                                    </Row>
                                                </Card>
                                            )
                                        })}


                                </Col>

                            </Row>
                            <Row className="justify-content-end">
                                <Col xs={6} md={3} className="mb-4 text-right">
                                    <Button color="info" onClick={this.addItem}>Add Item</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button block>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Card>


                    </React.Fragment>
                }

                {
                    // this is the accounts tab
                    this.state.activeTab == 3 &&
                    <Accounts />
                }



            </Container>
        </div>);
    }
}


const mapStateToProps = (state) => {
    const {
        loggedIn
    } = state
    return {
        loggedIn: loggedIn
    }
}

const RiverCricket = connect(mapStateToProps)(RiverCricketComponent);

export default RiverCricket;