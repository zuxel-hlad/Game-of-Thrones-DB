import React, { Component } from "react";
import { CharDetailsBlock, SelectError } from "./CharDetailsBlock";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner/spinner";
import gotService from "../../services/gotService";
import ErrorMessage from "../errorMessage";

export default class CharDetails extends Component {
  gotService = new gotService();

  state = {
    char: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.createChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.createChar();
    }
  }

  onCharSelectedLoading = (char) => {
    this.setState({ char, loading: false });
  };

  createChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }

    this.setState({ loading: true });

    this.gotService
      .getCharacter(charId)
      .then(this.onCharSelectedLoading)
      .catch(() => this.onError);
    // this.foo.bar = 4;
  }

  onError = () => {
    this.setState({
      char: null,
      error: true,
    });
  };

  render() {
    const { char, error, loading } = this.state;

    if (!char && error) {
      return <ErrorMessage />;
    } else if (!char) {
      return <SelectError>Please, select a character</SelectError>;
    }

    return (
      <CharDetailsBlock className="char-details rounded">
        {loading ? <Spinner /> : <ViewContent char={char} />}
      </CharDetailsBlock>
    );
  }
}

const ViewContent = ({ char }) => {
  const { name, gender, born, died, culture } = char;
  return (
    <>
      <h4>{name ? name : "Unknown :("}</h4>
      <ListGroup flush>
        <ListGroupItem>
          <span className="term">Gender</span>
          <span>{gender ? gender : "Unknown"}</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="term">Born</span>
          <span>{born ? born : "Unknown :("}</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="term">Died</span>
          <span>{died ? died : "Unknown :("}</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="term">Culture</span>
          <span>{culture ? culture : "Unknown :("}</span>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};
