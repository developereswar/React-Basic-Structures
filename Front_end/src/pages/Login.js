import React from "react";
import { Component } from "react";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from '../action/app.action';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: ""
    };
    // this.props.logOut();
  }


  // getCookie(key) {
  //   var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  //   return b ? b.pop() : null;
  // }



  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState)
    if (nextProps.product && (nextProps.product['message'] !== prevState.error)) {
      return {
        error: nextProps.product['message']
      }
    }
    return null
  }

  componentDidMount() {
    this.checkPagePath();
  }
  

  componentDidUpdate() {
    this.renderRedirect();
  }

  checkPagePath(){
    if(window.location.pathname === '/logout'){
      localStorage.clear();
      window.location.pathname = '/login'
    }
  }

  renderRedirect = () => {
    let{ meta, output } = this.props.product.userDetails;
    if (meta.message === 'success') {
      localStorage.setItem('accessToken', output.token);
      this.setState({isLoggedIn: true})
    } else {
      return <Redirect to="/" />
    }
  };

  checkStorage = ()=>{
    let storage = localStorage.getItem('accessToken');
    if(storage){ this.setState({isLoggedIn: true}); }
    return storage && <Redirect to="/" />  
  }

  login = fields => {
    this.props.login(fields);
  };
  render() {
    const{ isLoggedIn } = this.state;
    return (
      <Container>
        {isLoggedIn && this.checkStorage()}
        <Row className="justify-content-md-center rows">
          <div id="formContent">
            <Col xs="12" lg="12">
              <h2 className="text-center">
                Login
                </h2>
              <hr />
            </Col>
            <Col xs="12" lg="12">
              <Formik
                className="loginForm"
                initialValues={{
                  username: "",
                  password: ""
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string()
                    .required("usernameis required")
                    .required("username is required"),
                  password: Yup.string()
                    .required("Password is required")
                })}
                onSubmit={fields => {
                  this.login(fields);
                }}
                render={({ errors, status, touched }) => (
                  <Form >
                    <div className="form-group">
                      <label htmlFor="username"> Username </label>{" "}
                      <Field
                        name="username"
                        type="text"
                        className={
                          "form-control" +
                          (errors.username && touched.username
                            ? " is-invalid"
                            : "")
                        }
                      />{" "}
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password"> Password </label>{" "}
                      <Field
                        name="password"
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />{" "}
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <Button type="submit" variant="primary" size="lg" block>
                        {" "}
                          Login{" "}
                      </Button>{" "}
                      <p className="error"> {this.state.error ? this.state.error : null} </p>
                    </div>
                  </Form>
                )}
              />
            </Col>{" "}
          </div>
        </Row>{" "}
      </Container>
    );
  }
}

const mapStateToProps = state => {
   console.log(state)
  return {
    product: state.appReducer
  };
};


const mapDispatchToState = dispatch => {
  return bindActionCreators({
    login: login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(LoginComponent);