import React, { Component } from "react";
import { CharDetailsBlock, SelectError } from "./CharDetailsBlock";
import { ListGroup, ListGroupItem } from "reactstrap";
import Spinner from "../spinner/spinner";
import gotService from "../../services/gotService";
import ErrorMessage from "../errorMessage";

const Field = ({ char, field, label }) => {
  return (
    <ListGroupItem>
      <span className="term">{label}</span>
      <span>{char[field]}</span>
    </ListGroupItem>
  );
};

export { Field };

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
        {loading ? (
          <Spinner />
        ) : (
          <ViewContent
            char={char}
            children={React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { char });
            })}
          />
        )}
      </CharDetailsBlock>
    );
  }
}

const ViewContent = (props) => {
  const { name } = props.char;
  const { children } = props;

  return (
    <>
      <h4>{name}</h4>
      <ListGroup flush>{children}</ListGroup>
    </>
  );
};
