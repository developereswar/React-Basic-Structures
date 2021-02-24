import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { registerWorker } from "../action/app.action";
import { connect } from "react-redux";
import {
    Form,
    Row,
    Col,
    InputGroup,
    FormControl,
    Button,
} from "react-bootstrap";

import { BreadcrumbModule } from "../ui_modules/Breadcrum";


const AddWorkerComponent = (props) => {

    useEffect(() => { }, []);

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <Row>
                    <Col className="p-3">
                        <h3 className="text-left">Add Worker</h3>
                        <BreadcrumbModule></BreadcrumbModule>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6" md="6">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select" size="lg">
                                    <option value="admin">Admin</option>
                                    <option value="worker">Worker</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                             </Button>
                        </Form>
                    </Col>

                    <Col sm="6" md="6">

                    </Col>
                </Row>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.appReducer,
    };
};

const mapDispatchToState = dispatch => {
    return bindActionCreators({
        registerWorker: registerWorker
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToState)(AddWorkerComponent);