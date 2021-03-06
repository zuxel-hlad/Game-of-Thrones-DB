import React, { Component } from "react";
import { RandomCharBlock } from "./RandomCharBlock";
import { ListGroup, ListGroupItem } from "reactstrap";
import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import PropTypes from "prop-types";

export default class RandomChar extends Component {
  gotService = new gotService();
  state = {
    char: {},
    loading: true /* on load */,
    error: false,
  };



  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, this.props.interval);
  }
  /* this.props.interval */
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  /* when page load */
  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25); /* since 25 from 140 */
    // const id = 33333; /* error testing */
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const { toggleRandomChar } = this.props;

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
  }
}

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

RandomChar.defaultProps = {
  interval: 1500,
};

RandomChar.propTypes = {
  interval: PropTypes.number,
};
