import { click } from '@testing-library/user-event/dist/click';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/natural-products-hair-concept-two-size-green-plastic-bottle-blank-label-contain-herbal-bergamot-shampoo-decorate-137183280.jpg" />
      <Card.Body>
        <Card.Title>{this.props.product.name}</Card.Title>
        <Card.Text>
        {this.props.product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Stock of {this.props.product.stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link href={`/add/${this.props.product.id}`}>Another Link</Card.Link>
      </Card.Body>
    </Card>
    )
  }
}
