import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
import Spinner from "../spinner/spinner";
import gotService from "../../services/gotService";
import PropTypes from "prop-types";

class ItemList extends Component {
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
    const { data } = this.props;
    const items = data ? this.renderItems(data) : <Spinner />;
    return (
      <ListGroupBlock>
        <ListGroup>{items}</ListGroup>
      </ListGroupBlock>
    );
  }
}

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };
    componentDidMount() {
      /* function from props from character page */
      getData()
        .then((data) => {
          this.setState({ data, error: false });
        })
        .catch(() => this.onError);
    }
    render() {
      const { data } = this.state;
      return <View {...this.props} data={data} />;
    }
  };
};
const{getAllCharacters} = new gotService()
export default withData(ItemList, getAllCharacters);
