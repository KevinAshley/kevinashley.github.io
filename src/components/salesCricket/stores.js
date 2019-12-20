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

import SampleTable from "../salesCricket/sampleTable";

// Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";
// import "firebase/firestore";
//
// var db = firebase.firestore();

class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // db.collection("accounts")
        //     .get()
        //     .then(function(querySnapshot) {
        //         querySnapshot.forEach(function(doc) {
        //             // doc.data() is never undefined for query doc snapshots
        //             console.log(doc.id, " => ", doc.data());
        //         });
        //     });
        return (
            <React.Fragment>
                <div className="text-right mb-4">
                    <Button color="link">
                        Add Store
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

export default Stores;
