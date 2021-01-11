import React, { Component } from "react";
import { Container, Row,  Image, Col} from "react-bootstrap";
import { connect } from "react-redux";
import { getCustomer } from '../action/app.action'
import { bindActionCreators } from "redux";
import {BreadcrumbModule} from '../ui_modules/Breadcrum';
import { faUserPlus, faUserEdit, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Layout } from "../_layout/Layout";

class DashboardComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
      this.props.getCustomer();
    }

    render(){
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
                <div className="widget_board" name="" >
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

                <div className="widget_board">
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
                    <div  className="box">
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
    }
}

const mapStateToProps = state => {
    return{
    product: state.appReducer
  };
};
  

const mapDispatchToState = dispatch => {
    return bindActionCreators({
        getCustomer: getCustomer
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToState)(DashboardComponent);