import React, { Component } from "react";

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
    Table,
    Spinner
} from "reactstrap";

import { connect } from "react-redux";

import { getCollectionDocs } from "../../utils/databaseMethods";

import SampleTable from "../riverCricket/sampleTable";

class Products extends Component {
    constructor(props) {
        super(props);
        this.accountRef = this.props.database
            .collection("accounts")
            .doc(this.props.accountId);

        // console.log(products);
        this.state = {
            loading: true
        };

        this.updateData = this.updateData.bind(this);
    }

    updateData(data) {
        // console.log("the returned data is - ", data);
        this.setState({
            products: data,
            loading: false
        });
    }

    componentDidMount() {
        getCollectionDocs(this.accountRef, "products", this.updateData);
    }

    render() {
        // console.log('products props - ',this.props);
        // console.log("products state - ", this.state);

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
                        {this.state.loading ? (
                            <div className="text-center py-4">
                                <Spinner
                                    style={{ width: "4rem", height: "4rem" }}
                                    color="primary"
                                />
                            </div>
                        ) : (
                            <Table striped className="bg-light">
                                <thead>
                                    <tr>
                                        {Object.keys(
                                            this.state.products[0]
                                        ).map((item, index) => {
                                            return <th key={index}>{item}</th>;
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products &&
                                        this.state.products.length !== 0 && (
                                            <React.Fragment>
                                                {this.state.products.map(
                                                    (item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                {Object.values(
                                                                    item
                                                                ).map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <td
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                {
                                                                                    item
                                                                                }
                                                                            </td>
                                                                        );
                                                                    }
                                                                )}
                                                            </tr>
                                                        );
                                                    }
                                                )}
                                            </React.Fragment>
                                        )}
                                </tbody>
                            </Table>
                        )}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => state;

const ProductsContainer = connect(mapStateToProps)(Products);

export default ProductsContainer;
