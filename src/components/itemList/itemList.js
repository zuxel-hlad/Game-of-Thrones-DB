import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";
import ErrorMessage from "../errorMessage";

export default class ItemList extends Component {
  state = {
    itemList: null,
    error: false,
  };

  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
  };

  componentDidMount() {
    /* function from props from character page */
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({ itemList, error: false });
      })
      .catch(() => this.onError);
  }

  componentDidCatch() {
    this.setState({
      itemList: null,
      error: true,
    });
  }

  onError = (error) => {
    this.setState({
      itemList: null,
      error: true,
    });
  };

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <ListGroupItem
          key={id}
          className="item-list"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </ListGroupItem>
      );
    });
  }

  render() {
    const { itemList, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const items = itemList ? this.renderItems(itemList) : <Spinner />;
    return (
      <ListGroupBlock>
        <ListGroup>
          {errorMessage}
          {items}
        </ListGroup>
      </ListGroupBlock>
    );
  }
}
