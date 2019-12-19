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
        // console.log('products props - ',this.props);
        console.log('products state - ',this.state);

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
                        <Table striped>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>twitter</td>
                            </tr>
                          </tbody>
                        </Table>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => (state);

const ProductsContainer = connect(mapStateToProps)(Products);

export default ProductsContainer;
