import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
export default class navBar extends Component {
  render() {
    return (
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Orders</Nav.Link>
            <Nav.Link href="#features">User info</Nav.Link>
            <Nav.Link href="#pricing">Selected Products: </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
  }
}
