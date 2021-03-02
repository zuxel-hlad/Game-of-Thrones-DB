import React, { Component } from "react";
import RowBlock from "../../rowBlock";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import { CharacterPageBlock } from "./characterPageBlock";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: null,
    error: false,
  };

  onCharacterSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { selectedChar, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onCharacterSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name }) => name}
      />
    );

    const characterDetails = (
      <ItemDetails getData={this.gotService.getCharacter} itemId={selectedChar} itemType={'character.'}>
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );
    return (
      <CharacterPageBlock>
        <RowBlock leftCol={itemList} rightCol={characterDetails} />
      </CharacterPageBlock>
    );
  }
}
