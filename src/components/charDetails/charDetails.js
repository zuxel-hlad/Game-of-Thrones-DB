import React, { Component } from "react";
import { CharDetailsBlock } from "./CharDetailsBlock";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CharDetails extends Component {
  render() {
    return (
      <CharDetailsBlock className="char-details rounded">
        <h4>John Snow</h4>
        <ListGroup flush>
          <ListGroupItem>
            <span className="term">Gender</span>
            <span>male</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="term">Born</span>
            <span>1783</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="term">Died</span>
            <span>1820</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="term">Culture</span>
            <span>First</span>
          </ListGroupItem>
        </ListGroup>
      </CharDetailsBlock>
    );
  }
}
