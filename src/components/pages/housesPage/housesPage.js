import React, { Component } from "react";
import RowBlock from "../../rowBlock";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import { HousesPageBlock } from "./housesPageBlock";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";

export default class HousesPage extends Component {
  gotService = new gotService();

  state = {
    selectedHouse: null,
    error: false,
  };

  onHouseSelected = (id) => {
    this.setState({
      selectedHouse: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    const { selectedHouse, error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onHouseSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name }) => name}
      />
    );

    const houseDetails = (
      <ItemDetails getData={this.gotService.getHouse} itemId={selectedHouse} itemType={'house.'}>
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="coatOfArms" label="Coat Of Arms" />
      </ItemDetails>
    );
    return (
      <HousesPageBlock>
        <RowBlock leftCol={itemList} rightCol={houseDetails} />
      </HousesPageBlock>
    );
  }
}
