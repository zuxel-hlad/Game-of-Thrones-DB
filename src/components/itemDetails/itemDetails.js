import React, { useState, useEffect } from "react";
import { ItemDetailsBlock, SelectError } from "./itemDetailsBlock";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
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

const ItemDetails = ({ itemId, getData, itemType, children }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateItem();
  }, [itemId]);

  const onItemSelectedLoading = (item) => {
    setItem(item);
    setLoading(false);
  };

  function updateItem() {
    if (!itemId) {
      return;
    }
    setLoading(true);
    getData(itemId)
      .then(onItemSelectedLoading)
      .catch(() => onError);
  }

  function onError() {
    setItem(null);
    setError(true);
  }

  if (!item && error) {
    return <ErrorMessage />;
  } else if (!item) {
    return <SelectError>Please, select a {itemType}</SelectError>;
  }
  return (
    <ItemDetailsBlock className="item-details rounded">
      <Link to="/">
        <i className="far fa-times-circle" />
      </Link>
      {loading ? (
        <Spinner />
      ) : (
        <ViewContent
          item={item}
          children={React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        />
      )}
    </ItemDetailsBlock>
  );
};

export default ItemDetails;

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
