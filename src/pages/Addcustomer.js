import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { getCustomer } from '../action/app.action';
import { connect } from "react-redux";
import { Multiselect } from "multiselect-react-dropdown";
import { Form, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { faUserPlus, faUserEdit, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BreadcrumbModule } from '../ui_modules/Breadcrum';

const AddCustomerComponent = (props) => {
    const [selecedProdType, SetSelectedProdType] = useState([]);

    const onselectProd = (params) => {
        SetSelectedProdType(params);
    }

    const onRemoveProd = (params) => {
        if (selecedProdType.length === 1) {
            SetSelectedProdType([]);
        } else {
            const index = selecedProdType.indexOf(params[0]);
            let selectedData = selecedProdType.splice(index, 1);
            SetSelectedProdType(selectedData);
        }
    }

    // useEffect(() => { 

    // }, [SetSelectedProdType])
    return (
        <div className="content-wrapper" >
            <section className="content-header">
                <Row>
                    <Col className="p-3">
                        <h3 className="text-left">
                            Add Customer
                        </h3>
                        <BreadcrumbModule></BreadcrumbModule>
                    </Col>
                </Row>
            </section>

            <Form>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm="12" className="mt-3 mb-3"><h4 className="text-left">Customer Details</h4></Col>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Customer Name" />
                    </Col>


                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Customer Contact Number" />
                    </Col>

                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Order Number" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={4}>
                        <Multiselect
                            options={props.productTypes} // Options to display in the dropdown
                            onSelect={onselectProd}
                            onRemove={onRemoveProd}
                            selectedValues={selecedProdType}
                            displayValue="name"
                            placeholder="Select Category"
                        />
                    </Col>
                </Form.Group>

                {selecedProdType.length !== 0 && selecedProdType.map(data => {
                    return (
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Col sm="12" className="mt-3 mb-3"><h4 className="text-left">Product Details</h4></Col>
                            <Col sm={2}>
                                <b>{data.name}</b>
                            </Col>
                            <Col sm={4}>
                                <Form.Control as="select" size="sm">
                                    <option>Elizabeth</option>
                                    <option>Elizabeth</option>
                                    <option>Elizabeth</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12}>
                                <ul className="productLists">
                                    <li>
                                        <input type="radio" name="test" value='test'/> Test
                                    </li>
                                    <li>
                                        <input type="radio" name="test" value='test'/> Test
                                    </li>

                                    <li>
                                        <input type="radio" name="test" value='test'/> Test
                                    </li>
                                    <li>
                                        <input type="radio" name="test" value='test'/> Test
                                    </li>
                                </ul>
                            </Col>
                        </Form.Group>
                    )
                })}

            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.appReducer
    };
};


const mapDispatchToState = dispatch => {
    return bindActionCreators({
        getCustomer: getCustomer
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToState)(AddCustomerComponent);