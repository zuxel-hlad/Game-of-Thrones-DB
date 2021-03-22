import React, { useState, useEffect } from "react";
import { RandomCharBlock } from "./RandomCharBlock";
import { ListGroup, ListGroupItem } from "reactstrap";
import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const RandomChar = ({ interval, toggleRandomChar }) => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateChar();
    let timerId = setInterval(updateChar, interval);
    return () => clearInterval(timerId);
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = (err) => {
    setError(true);
    setLoading(false);
  };

  function updateChar() {
    const id = Math.floor(Math.random() * 140 + 25); /* since 25 from 140 */
    // const id = 33333; /* error testing */
    new gotService()
      .getCharacter(id)
      .then(onCharLoaded)
      .catch(onError);
  }
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View char={char} /> : null;

  return (
    <RandomCharBlock className="rounded">
      <span className="close" onClick={toggleRandomChar}>
        <i className="far fa-times-circle"></i>
      </span>
      {errorMessage}
      {spinner}
      {content}
    </RandomCharBlock>
  );
};

const View = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <ListGroup flush>
      <h4>Random Character: {name}</h4>
      <ListGroupItem>
        <span className="term">Gender </span>
        <span>{gender}</span>
      </ListGroupItem>
      <ListGroupItem>
        <span className="term">Born </span>
        <span>{born}</span>
      </ListGroupItem>
      <ListGroupItem>
        <span className="term">Died </span>
        <span>{died}</span>
      </ListGroupItem>
      <ListGroupItem>
        <span className="term">Culture</span>
        <span>{culture}</span>
      </ListGroupItem>
    </ListGroup>
  );
};

export default RandomChar;
