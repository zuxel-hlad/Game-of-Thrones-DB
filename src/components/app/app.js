import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import { AppBlock } from "./AppBlock";
import Header from "../header";
import RandomChar from "../randomChar";
import { Button } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import CharacterPage from "../characterPage/characterPage";
import ErrorMessage from "../errorMessage/errorMessage";
import gotService from "../../services/gotService";

export default class extends Component {
  gotService = new gotService();

  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => ({
      showRandomChar: !state.showRandomChar,
    }));
  };

  render() {
    const { showRandomChar, error } = this.state;

    if (error) {
      return <ErrorMessage />;
    }
    return (
      <AppBlock>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {showRandomChar ? <RandomChar /> : null}
              <Button
                color="primary"
                className="toggle-btn"
                onClick={this.toggleRandomChar}
              >
                Toggle random character
              </Button>
            </Col>
          </Row>
          <CharacterPage />
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => <span>{item.name}</span>}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => item.name}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </AppBlock>
    );
  }
}
