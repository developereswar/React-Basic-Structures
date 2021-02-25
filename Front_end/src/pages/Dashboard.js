import React, { Component } from "react";
import { Container, Row,  Card, Col, Table} from "react-bootstrap";
import { connect } from "react-redux";
import { getCustomer } from '../action/app.action'
import { bindActionCreators } from "redux";
import {BreadcrumbModule} from '../ui_modules/Breadcrum';
import { faUserPlus, faUserEdit, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from 'react-data-table-component';


import { Layout } from "../_layout/Layout";

import { useHistory } from "react-router-dom";
const customStyles = {
   
    headCells: {
      style: {
        background: '#333',
        color: '#fff',
        '&:hover': {
            cursor: 'pointer',
            color: '#fff'
          }
      },
    }
}

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Email',
        selector:'email',
        sortable: true
      },
       {
    name: 'Mobile',
    selector: 'mobile',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true
  },
]

class DashboardComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            customerList:null
        }
    }
    componentDidMount(prevProps, prevState){
       this.props.getCustomer(); 
    }

    componentDidUpdate(prevProps){
        
    }

    viewPage = (e) => {
        if(e){
            this.props.history.push(e)
        }
    }

 
    render(){
        const {customerList} = this.props;
        console.log(this.props)
      return (
        <Container fluid>
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
            <Row className="mt-3">
                <div className="widget_board"  onClick={() => this.viewPage("/dashboard/add-customer")}>
                    <div className="widget_row">
                        <div className="img_block  bg_red">
                            <FontAwesomeIcon icon={faUserPlus} size="6x"/>
                        </div>
                        <div className="content_block">
                            <h3 className='wid-board-name'>Add Customer</h3>
                        </div>  
                    </div>
                </div>

                <div className="widget_board ">
                    <div className="widget_row">
                        <div className="img_block bg_blue">
                             <FontAwesomeIcon icon={faUserEdit} size="6x"/>
                        </div>
                        <div className="content_block">
                            <h3 className='wid-board-name'>Edit Customer</h3>
                        </div>  
                    </div>
                </div>

                <div className="widget_board"   onClick={() =>this.viewPage("/dashboard/customer-list")}>
                    <div className="widget_row">
                        <div className="img_block bg_green">
                        <FontAwesomeIcon icon={faClipboard} size="6x"/>
                        </div>
                        <div className="content_block">
                            <h3 className='wid-board-name'> Customer Status</h3>
                        </div>  
                    </div>
                </div>
              
            </Row>
            <Row className="mt-4">
                <Col>
                <Card className="box">
                <h3>
                Customer Lists
            </h3>
            { customerList ?
            <DataTable
            columns={columns}
            data={customerList}
            customStyles={customStyles}
            pagination= {true}
            paginationPerPage={5}
            paginationRowsPerPageOptions={ [5, 10, 15, 20, 25, 30]}
          />
          :null
            }
              
            </Card>
                </Col>
            </Row>
        </Container>
    )
    }
}

const mapStateToProps = state => {
    return{ 
    customerList:state.customerList
  };
};
  

const mapDispatchToState = dispatch => {
    return bindActionCreators({
        getCustomer: getCustomer
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToState)(DashboardComponent);