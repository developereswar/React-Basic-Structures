import React, { useState, useEffect } from "react";
import { BreadcrumbModule } from "../ui_modules/Breadcrum";
import { Form, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { columns, customStyles } from "../common/DataTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCustomer } from "../action/app.action";
import { Fragment } from "react";

const CustomerListComponent = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    setCustomerList(props.product.customerList);
  }, []);

  const handleChange = (e) => {
    setSelectedRow({ ...e.selectedRows[0] });
    setIsToggle(!isToggle);
  };

  const ExpandableComponent = ({ data }) => {
    return (
      <Fragment>
      <Form className="editableForm mt-2 mb-2">
        <Form.Group as={Row} >
          <Col sm={4} className="text-left">
          <Form.Label>Name :</Form.Label>
            <Form.Control type="text" value={data.name} />
          </Col>
          <Col sm={4} className="text-left">
          <Form.Label>Email Id :</Form.Label>
            <Form.Control type="text" value={data.email} />
          </Col>
          <Col sm={4} className="text-left">
          <Form.Label>Mobile No :</Form.Label>
            <Form.Control type="text" value={data.mobile} />
          </Col>
          </Form.Group>
        </Form>
      </Fragment>
    );
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <Row>
          <Col className="p-3">
            <h3 className="text-left">Add Customer</h3>
            <BreadcrumbModule></BreadcrumbModule>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <DataTable
              columns={columns}
              data={customerList}
              customStyles={customStyles}
              pagination={true}
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
              onSelectedRowsChange={handleChange}
              expandableRows
              expandableRowsComponent={<ExpandableComponent />}
            />
          </Col>
        </Row>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.appReducer,
    customerList: state.appReducer.customerList,
  };
};

const mapDispatchToState = (dispatch) => {
  return bindActionCreators(
    {
      getCustomer: getCustomer,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToState
)(CustomerListComponent);
