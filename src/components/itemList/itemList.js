import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage";

export default class ItemList extends Component {
  gotService = new gotService();

  state = {
    charList: null,
    error: false,
  };

  componentDidMount() {
    this.gotService
      .getAllCharacters()
      .then((charlist) => {
        this.setState({ charlist, error: false });
      })
      .catch(() => this.onError);
  }

  componentDidCatch() {
    this.setState({
      charList: null,
      error: true,
    });
  }

  onError = (status) => {
    this.setState({
      char: null,
      error: true,
    });
  };

  renderItems(arr) {
    return arr.map((item, i) => {
      const uniqueKey = `sha${(~~(Math.random() * 1e8)).toString(16)}`;
      return (
        <ListGroupItem
          key={uniqueKey}
          className="item-list"
          onClick={() => this.props.onCharSelected(41 + i)}
        >
          {item.name}
        </ListGroupItem>
      );
    });
  }

  render() {
    const { charlist, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;

    const content = charlist ? this.renderItems(charlist) : <Spinner />;

    return (
      <ListGroupBlock>
        <ListGroup>
          {errorMessage}
          {content}
        </ListGroup>
      </ListGroupBlock>
    );
  }
}
