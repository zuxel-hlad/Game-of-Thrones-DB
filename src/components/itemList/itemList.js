import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };
  componentDidMount() {
    /* function from props from character page */
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
  };

  componentDidCatch() {
    this.setState({
      itemList: null,
    });
  }

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
    const { itemList } = this.state;
    const items = itemList ? this.renderItems(itemList) : <Spinner />;
    return (
      <ListGroupBlock>
        <ListGroup>{items}</ListGroup>
      </ListGroupBlock>
    );
  }
}
