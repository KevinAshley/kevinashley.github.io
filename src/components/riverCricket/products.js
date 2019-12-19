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

import {
    connect
} from 'react-redux';

import {getCollectionDocs} from '../../utils/databaseMethods';

import SampleTable from "../riverCricket/sampleTable";

class Products extends Component {
    constructor(props) {
        super(props);
        var account = this.props.database.collection("accounts").doc(this.props.accountId);
        var products = getCollectionDocs(account, "products");
        console.log(products);
        this.state = {
            products: products
        };
    }

    render() {
        console.log('products props - ',this.props);
        console.log('products state - ',this.state);

        // if (!this.state.accountId) {
        //     db.collection("accounts").where("userEmails", "array-contains", userEmail)
        //         .get()
        //         .then(
        //             (querySnapshot) => {
        //             querySnapshot.forEach((doc) => {
        //                 // doc.data() is never undefined for query doc snapshots
        //                 console.log(doc.id, " => ", doc.data());
        //                 this.setState({
        //                     accountId: doc.id
        //                 })
        //             });
        //         });
        // }
        //
        // if (this.state.accountId && this.state.productIds.length == 0) {
        //     db.collection("accounts").doc(this.state.accountId).collection("products")
        //         .get()
        //         .then(
        //             (querySnapshot) => {
        //             querySnapshot.forEach((doc) => {
        //                 // doc.data() is never undefined for query doc snapshots
        //                 console.log(doc.id, " => ", doc.data());
        //                 this.setState({
        //                     productIds: [...this.state.productIds, doc.id],
        //                     products: [...this.state.productIds, doc.data()]
        //                 })
        //             });
        //         });
        // }

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

const mapStateToProps = (state, ownProps) => (state);

const ProductsContainer = connect(mapStateToProps)(Products);

export default ProductsContainer;
