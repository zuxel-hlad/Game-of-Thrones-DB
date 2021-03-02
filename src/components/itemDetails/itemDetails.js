import React, { Component } from "react";
import { ItemDetailsBlock, SelectError } from "./itemDetailsBlock";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage";

const Field = ({ item, field, label }) => {
  return (
    <ListGroupItem>
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </ListGroupItem>
  );
};

export { Field };

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemSelectedLoading = (item) => {
    this.setState({ item, loading: false });
  };

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({ loading: true });
    getData(itemId)
      .then(this.onItemSelectedLoading)
      .catch(() => this.onError);
    // this.foo.bar = 4;
  }
  onError = () => {
    this.setState({
      item: null,
      error: true,
    });
  };

  render() {
    const { item, error, loading } = this.state;
    if (!item && error) {
      return <ErrorMessage />;
    } else if (!item) {
      return <SelectError>Please, select a {this.props.itemType}</SelectError>;
    }
    return (
      <ItemDetailsBlock className="item-details rounded">
        {loading ? (
          <Spinner />
        ) : (
          <ViewContent
            item={item}
            children={React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          />
        )}
      </ItemDetailsBlock>
    );
  }
}

const ViewContent = (props) => {
  const { name } = props.item;
  const { children } = props;

  return (
    <>
      <h4>{name}</h4>
      <ListGroup flush>{children}</ListGroup>
    </>
  );
};
