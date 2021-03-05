import React, { Component } from "react";
import RowBlock from "../../rowBlock";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import { BooksPageBlock } from "./booksPageBlock";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";

export default class BooksPage extends Component {
  gotService = new gotService();

  state = {
    selectedBook: null,
    error: false,
  };

  onBookSelected = (id) => {
    this.setState({
      selectedBook: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { selectedBook, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onBookSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => name}
      />
    );

    const bookDetails = (
      <ItemDetails
        getData={this.gotService.getBook}
        itemId={selectedBook}
        itemType={"book."}
      >
        <Field field="numberOfPages" label="Number Of Pages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
    return (
      <BooksPageBlock>
        <RowBlock leftCol={itemList} rightCol={bookDetails} />
      </BooksPageBlock>
    );
  }
}
