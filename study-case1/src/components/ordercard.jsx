import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class 
 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
  render() {
    return (
      <div>
        <Card>
        <Card.Header as="h5">{this.props.order.status}</Card.Header>
        <Card.Body>
        <Card.Title>Order number {this.props.order.id}</Card.Title>
        <Card.Text>
          {this.props.order.details}
        </Card.Text>
        <Button variant="primary">Complete order</Button>
        </Card.Body>
        </Card>
      </div>
    )
  }
}
