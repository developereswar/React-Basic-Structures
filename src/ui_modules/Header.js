import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export  function Headers() {
  let isToken = localStorage.getItem("accessToken");
  let history = useHistory();
  // To Logout
  const logout = ()=> {
    localStorage.clear();
    history.push('/')
  }

 

  return (
    <Navbar expand="lg" className="bg_blue">
      {/* <Navbar.Brand href="#home">SoFa</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
       
           { isToken && <Nav.Link onClick={logout}>SignOut</Nav.Link>  }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
