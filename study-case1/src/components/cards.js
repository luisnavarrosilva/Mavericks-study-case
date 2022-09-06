import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export default class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
        </Card>
    )
  }
}
