import React from "react";
import { BreadcrumbModule } from "../ui_modules/Breadcrum";
import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const EditStagesComponents = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <Row>
          <Col className="p-3">
            <h3 className="text-left">Edit Stages</h3>
            <BreadcrumbModule></BreadcrumbModule>
          </Col>
        </Row>
        <Row>
          <Form>
            <Form.Group></Form.Group>
          </Form>
        </Row>
      </section>
    </div>
  );
};

export default EditStagesComponents;
