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
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
           { isToken && <Nav.Link onClick={logout}>SignOut</Nav.Link>  }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
