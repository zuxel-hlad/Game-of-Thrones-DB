import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
import Spinner from "../spinner/spinner";
// import PropTypes from "prop-types";
// import ErrorMessage from "../errorMessage";

const ItemList = ({ getData, onItemSelected, renderItem }) => {
  const [itemList, updateList] = useState([]);
  // state = {
  //   itemList: null,
  //   error: false,
  // };

  // static defaultProps = {
  //   onItemSelected: () => {},
  // };

  // static propTypes = {
  //   onItemSelected: PropTypes.func,
  // };
  useEffect(() => {
    getData().then((data) => {
      updateList(data);
    });
  },[]);

  // componentDidCatch() {
  //   this.setState({
  //     itemList: null,
  //     error: true,
  //   });
  // }

  // onError = (error) => {
  //   this.setState({
  //     itemList: null,
  //     error: true,
  //   });
  // };

  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = renderItem(item);
      return (
        <ListGroupItem
          key={id}
          className="item-list"
          onClick={() => onItemSelected(id)}
        >
          {label}
        </ListGroupItem>
      );
    });
  };
  const items = itemList ? renderItems(itemList) : <Spinner />;
  return (
    <ListGroupBlock>
      <ListGroup>{items}</ListGroup>
    </ListGroupBlock>
  );
};

export default ItemList;