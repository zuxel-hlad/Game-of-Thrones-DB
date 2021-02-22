import React, { Component } from "react";
import RowBlock from "../rowBlock";
import ItemList from "../itemList";
import CharDetails, { Field } from "../charDetails";
import { CharacterPageBlock } from "./characterPageBlock";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: null,
    error: false,
  };

  onItemSelected = (id) => {
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
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const charDetails = (
      <CharDetails charId={selectedChar}>
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </CharDetails>
    );
    return (
      <CharacterPageBlock>
        <RowBlock leftCol={itemList} rightCol={charDetails} />
      </CharacterPageBlock>
    );
  }
}
