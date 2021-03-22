import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { ListGroupBlock } from "./ListGroupBlock";
import Spinner from "../spinner/spinner";

const ItemList = ({ getData, onItemSelected, renderItem }) => {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      updateList(data);
    });
  }, []);

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
