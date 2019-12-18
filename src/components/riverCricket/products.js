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

import SampleTable from "../riverCricket/sampleTable";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log('products props - ',this.props);

        this.props.database.collection("accounts")
            .get()
            .then(
                (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    // this.setState({
                    //     user: doc.data()
                    // })
                });
            });

        return (
            <React.Fragment>
                <div className="text-right mb-4">
                    <Button color="link">
                        Add Product
                        <i className="fas fa-plus-circle ml-2"></i>
                    </Button>
                </div>

                <Row className="mb-4">
                    <Col>
                        <SampleTable />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Products;
