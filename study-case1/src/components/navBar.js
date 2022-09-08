import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./navBar.css"
import Nav from 'react-bootstrap/Nav';
export default class navBar extends Component {
  render() {
    return (
        <>
      <Navbar bg="dark" variant="dark"><a href='/Dashboard'>
      <img src='https://www.mavs.com/wp-content/themes/mavs/images/news-bg-horse.png' className="logo"></img>
      </a>
      
        <Container className='cont'>
          <Navbar.Brand href="/Dashboard">Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Orders">Orders</Nav.Link>
            <Nav.Link href="/Userinfo">User info</Nav.Link>
            <Nav.Link href="#pricing">Selected Products: </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/">Generate order </Nav.Link>
          <Nav.Link href="/">Logout </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
      </>
    )
  }
}
