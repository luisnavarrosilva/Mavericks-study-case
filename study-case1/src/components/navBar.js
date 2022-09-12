import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./navBar.css"
import Nav from 'react-bootstrap/Nav';
export default class navBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <>
      <Navbar bg="dark" variant="dark"><a href={`/Dashboard/${this.props.location}`}>
      <img src='https://www.mavs.com/wp-content/themes/mavs/images/news-bg-horse.png' className="logo"></img>
      </a>
      
        <Container className='cont'>
          <Navbar.Brand href={`/Dashboard/${this.props.location}`}>Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`/Orders/${this.props.location}`}>Orders</Nav.Link>
            <Nav.Link href={`/Userinfo/${this.props.location}`}>User info</Nav.Link>
            <Nav.Link href="#pricing">Selected Products: </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/">Hello: {this.props.location}</Nav.Link>
          <Nav.Link href="/">Generate order </Nav.Link>
          <Nav.Link href="/">Logout </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
      </>
    )
  }
}
