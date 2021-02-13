import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
export default class ItemList extends Component {
  render() {
    return (
      <ListGroupBlock>
        <ListGroup>
          <ListGroupItem className="item-list">John Snow</ListGroupItem>
          <ListGroupItem className="item-list">Brandon Stark</ListGroupItem>
          <ListGroupItem className="item-list">Geremy</ListGroupItem>
        </ListGroup>
      </ListGroupBlock>
    );
  }
}
