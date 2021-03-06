import React, { Component } from "react";
import ItemList from "../../itemList";
import { BooksPageBlock } from "./booksPageBlock";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import { withRouter } from "react-router-dom";

class BooksPage extends Component {
  gotService = new gotService();

  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={(itemId) => {
          this.props.history.push(itemId);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => name}
      />
    );

    return <BooksPageBlock>{itemList}</BooksPageBlock>;
  }
}

export default withRouter(BooksPage);
