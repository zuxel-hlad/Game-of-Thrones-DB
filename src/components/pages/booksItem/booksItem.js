import React, { Component } from "react";
import gotService from "../../../services/gotService";
import ItemDetails, { Field } from "../../itemDetails";
import { BooksItemBlock } from "./booksItemBlock";

export default class BooksItem extends Component {
  gotService = new gotService();

  render() {
    const { bookId } = this.props;
    const gotService = this.gotService;
    return (
      <BooksItemBlock>
        <ItemDetails itemId={bookId} getData={gotService.getBook}>
          <Field field="numberOfPages" label="Number Of Pages" />
          <Field field="publisher" label="Publisher" />
          <Field field="released" label="Released" />
        </ItemDetails>
      </BooksItemBlock>
    );
  }
}
