import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export  function Headers() {
  let isToken = localStorage.getItem("accessToken");
  let history = useHistory();
  // To Logout
  const logout = ()=> {
    // isToken= null;
    // history.push('/login');
  }

 

  return (
   isToken && <Navbar expand="lg" className="bg_blue">
      {/* <Navbar.Brand href="#home">SoFa</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
       <Nav.Link >My Profile</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
